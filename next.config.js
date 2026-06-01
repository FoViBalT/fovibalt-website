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
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://static.cloudflareinsights.com",
                            "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://cloudflareinsights.com https://static.cloudflareinsights.com",
                            "img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com",
                            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                            "font-src 'self' https://fonts.gstatic.com",
                            "frame-ancestors 'none'",
                        ].join('; '),
                    },
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
            {
                source: '/llms.txt',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400' },
                    { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
                ],
            },
            {
                source: '/llms-full.txt',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400' },
                    { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
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
