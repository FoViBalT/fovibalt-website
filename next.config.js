/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    trailingSlash: false,
    images: {
        formats: ['image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    },
    experimental: {
        serverComponentsExternalPackages: ['nodemailer'],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                ],
            },
            {
                source: '/sitemap.xml',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400' },
                ],
            },
            {
                source: '/robots.txt',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600' },
                ],
            },
        ];
    },
    async redirects() {
        return [
            // Catch common trailing-slash mistakes for all routes
            {
                source: '/:path+/',
                destination: '/:path+',
                permanent: true,
            },
        ];
    },
}
module.exports = nextConfig
