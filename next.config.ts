const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.purdue.edu',
                port: '',
                pathname: '/uns/images/**',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'www.cshl.edu',
                port: '',
                pathname: '/wp-content/uploads/**',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'www.mdpi.com',
                port: '',
                pathname: '/files/uploaded/**',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'www.mdpi.com',
                port: '',
                pathname: '/files/uploaded/**',
                search: '',
            },
        ],
    },
};
 
module.exports = withNextIntl(nextConfig);