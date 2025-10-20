/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vqsvlqcvaktgngyoxuyp.supabase.co", // Supabase Storage ドメイン
        pathname: "/storage/v1/**", // バケット配下の全ての画像
      },
    ],
  },
};

export default nextConfig;
