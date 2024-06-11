const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    resolver: {
      sourceExts: [...sourceExts, 'jsx', 'js', 'ts', 'tsx'],
      assetExts: assetExts.filter(ext => ext !== 'svg'),
    },
  };
})();
