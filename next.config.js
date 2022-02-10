module.exports = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  webpack5: true,
  env: {
    hostName: process.env.HOST_NAME
  }
}
