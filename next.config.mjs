import "dotenv/config";

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => {
    const adminUrl = process.env.WORDPRESS_URL + "/wp-admin";
    return [
      { source: "/admin", destination: adminUrl, permanent: false },
      { source: "/wp-admin", destination: adminUrl, permanent: false },
    ];
  },
};

export default nextConfig;
