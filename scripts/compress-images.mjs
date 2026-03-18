#!/usr/bin/env node

/**
 * Image Compression Script
 * 
 * Compresses all PNG and JPG/JPEG images in public/images/ using sharp.
 * - Resizes images wider than MAX_WIDTH (1920px) while preserving aspect ratio
 * - Compresses PNGs with optimized settings
 * - Compresses JPGs with quality 80
 * - Creates backups in public/images-backup/ before processing
 * 
 * Usage: node scripts/compress-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, mkdir, copyFile } from 'fs/promises';
import { join, extname, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMAGES_DIR = join(__dirname, '..', 'public', 'images');
const BACKUP_DIR = join(__dirname, '..', 'public', 'images-backup');
const MAX_WIDTH = 1920;
const JPG_QUALITY = 80;
const PNG_QUALITY = 80; // for palette-based, sharp uses compressionLevel
const PNG_COMPRESSION_LEVEL = 9; // max compression (0-9)

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg']);

async function getAllImageFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getAllImageFiles(fullPath));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (IMAGE_EXTENSIONS.has(ext)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

async function ensureDir(dir) {
  try {
    await mkdir(dir, { recursive: true });
  } catch { /* already exists */ }
}

async function backupFile(filePath) {
  const relativePath = relative(IMAGES_DIR, filePath);
  const backupPath = join(BACKUP_DIR, relativePath);
  await ensureDir(dirname(backupPath));
  await copyFile(filePath, backupPath);
}

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const relPath = relative(IMAGES_DIR, filePath);
  
  const beforeStats = await stat(filePath);
  const beforeSize = beforeStats.size;

  const image = sharp(filePath);
  const metadata = await image.metadata();

  let pipeline = sharp(filePath);

  // Resize if wider than MAX_WIDTH
  if (metadata.width && metadata.width > MAX_WIDTH) {
    pipeline = pipeline.resize(MAX_WIDTH, null, {
      withoutEnlargement: true,
      fit: 'inside',
    });
  }

  let outputBuffer;

  if (ext === '.png') {
    outputBuffer = await pipeline
      .png({
        compressionLevel: PNG_COMPRESSION_LEVEL,
        adaptiveFiltering: true,
        quality: PNG_QUALITY,
      })
      .toBuffer();
  } else {
    // JPG/JPEG
    outputBuffer = await pipeline
      .jpeg({
        quality: JPG_QUALITY,
        mozjpeg: true,
      })
      .toBuffer();
  }

  const afterSize = outputBuffer.length;
  const savings = ((1 - afterSize / beforeSize) * 100).toFixed(1);

  // Only write if we actually saved space
  if (afterSize < beforeSize) {
    await sharp(outputBuffer).toFile(filePath);
    console.log(
      `✅ ${relPath}: ${formatSize(beforeSize)} → ${formatSize(afterSize)} (${savings}% smaller)` +
      (metadata.width > MAX_WIDTH ? ` [resized ${metadata.width}→${MAX_WIDTH}px]` : '')
    );
    return { path: relPath, before: beforeSize, after: afterSize, saved: beforeSize - afterSize };
  } else {
    console.log(`⏭️  ${relPath}: ${formatSize(beforeSize)} — already optimal`);
    return { path: relPath, before: beforeSize, after: beforeSize, saved: 0 };
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

async function main() {
  console.log('🔍 Scanning for images in public/images/...\n');

  const files = await getAllImageFiles(IMAGES_DIR);
  console.log(`Found ${files.length} images to process.\n`);

  // Create backups
  console.log('📦 Creating backups in public/images-backup/...');
  for (const file of files) {
    await backupFile(file);
  }
  console.log('✅ Backups created.\n');

  // Compress
  console.log('🗜️  Compressing images...\n');
  let totalBefore = 0;
  let totalAfter = 0;
  let totalSaved = 0;

  for (const file of files) {
    try {
      const result = await compressImage(file);
      totalBefore += result.before;
      totalAfter += result.after;
      totalSaved += result.saved;
    } catch (err) {
      console.error(`❌ Error processing ${relative(IMAGES_DIR, file)}: ${err.message}`);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`📊 Summary:`);
  console.log(`   Total before: ${formatSize(totalBefore)}`);
  console.log(`   Total after:  ${formatSize(totalAfter)}`);
  console.log(`   Total saved:  ${formatSize(totalSaved)} (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`);
  console.log('='.repeat(60));
}

main().catch(console.error);
