/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/bible",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
