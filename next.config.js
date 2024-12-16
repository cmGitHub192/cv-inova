const path = require('path');

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'peopleconnectpictures.blob.core.windows.net',
      },
    ],
  },
  webpack: (config) => {
    // Configuración del alias para que funcione en producción
    config.resolve.alias['@src'] = path.join(__dirname, 'src');
    return config;
  },
};
