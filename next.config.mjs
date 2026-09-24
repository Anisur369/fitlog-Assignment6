/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // সব বাহ্যিক ইমেজের অনুমতি দিতে
        },
      ],
    },
};

export default nextConfig;
