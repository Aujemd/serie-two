const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react-ts')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'n5',
    projectName: 'serie-two',
    webpackConfigEnv,
    argv,
    externals: [/^@n5\/.+/]
  })

  return merge(defaultConfig, {
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  })
}
