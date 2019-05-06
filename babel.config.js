module.exports = function(api) {
  api.cache(true);

  const presets = ['@babel/preset-env'];
  const plugins = [];
  const env = {
    test: {
      plugins: ['istanbul'],
    },
  };

  return {
    presets,
    plugins,
    env,
  };
};
