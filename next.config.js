/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['qoueeudflsuricguegvb.supabase.co'],
        // formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

// const withPWA = require('next-pwa')({
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
// })

// module.exports = withPWA({
//     reactStrictMode: true,
// })

module.exports = nextConfig
