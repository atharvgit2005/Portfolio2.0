// CRACO configuration to enable TailwindCSS with Create React App
// This ensures CRA uses PostCSS plugins defined for Tailwind

module.exports = {
  devServer: (devServerConfig) => {
    // Fix: "Invalid options object ... options.allowedHosts[0] should be a non-empty string"
    // Allow all hosts in development to avoid schema issues
    devServerConfig.allowedHosts = 'all';
    return devServerConfig;
  },
};
