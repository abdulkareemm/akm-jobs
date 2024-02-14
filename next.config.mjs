/** @type {import('next').NextConfig} */
const nextConfig = {
  // target: 'experimental-serverless-trace',
  webpack: (config) => {
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = true;
    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
};


export default nextConfig;
