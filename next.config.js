/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/game.data.br",
        headers: [
          {
            key: "Content-Encoding",
            value: "br",
          },
        ],
      },
      {
        source: "/game.framework.js.br",
        headers: [
          {
            key: "Content-Encoding",
            value: "br",
          },
        ],
      },
      {
        source: "/game.wasm.br",
        headers: [
          {
            key: "Content-Encoding",
            value: "br",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
