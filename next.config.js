/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.output.publicPath = "http://localhost:3000/_next/";

    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: "mf1",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./sidebar": "./src/Components/Sidebar/index.ts",
        },
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
          {
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
        ],
      })
    );

    return config;
  },
};

module.exports = nextConfig;
