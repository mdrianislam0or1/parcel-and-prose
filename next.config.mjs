/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.example.com',
            port: '',
            pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: '**',
          },
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '5000',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
