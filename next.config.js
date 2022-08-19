/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true, // Need to make it true for some versions of Next JS
  distDir: "build", // Defined build directory
  webpack: (config, options) => {
    // webpack configurations
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: "mf1",
        filename: "static/chunks/remoteEntry.js", // remote file name which will used later
        exposes: {
          // expose all component here.
          "./sidebar": "./src/Components/Sidebar",
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
