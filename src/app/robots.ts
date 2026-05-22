import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // AI search agents & LLM crawlers — allow full access
      { userAgent: 'GPTBot',         allow: '/' },
      { userAgent: 'ChatGPT-User',   allow: '/' },
      { userAgent: 'OAI-SearchBot',  allow: '/' },
      { userAgent: 'ClaudeBot',      allow: '/' },
      { userAgent: 'Claude-Web',     allow: '/' },
      { userAgent: 'anthropic-ai',   allow: '/' },
      { userAgent: 'PerplexityBot',  allow: '/' },
      { userAgent: 'Googlebot',      allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Applebot',       allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'Bytespider',     allow: '/' },
      { userAgent: 'cohere-ai',      allow: '/' },
      { userAgent: 'DuckAssistBot',  allow: '/' },
      { userAgent: 'facebookexternalhit', allow: '/' },
      { userAgent: 'Amazonbot',      allow: '/' },
      { userAgent: 'YandexBot',      allow: '/' },
    ],
    sitemap: 'https://fovibalt.com/sitemap.xml',
  };
}
