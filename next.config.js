/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    /* UNOPTIMIZED JUST FOR TEST IN FUTURE REMOVE IT */
images: { unoptimized: false },
serverComponentsExternalPackages: ['nodemailer'],
}
module.exports = nextConfig
