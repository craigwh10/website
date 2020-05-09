module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
  env: {
    spaceID: process.env.spaceID,
    accessToken: process.env.accessToken,
    USER: process.env.USER,
  },
};
