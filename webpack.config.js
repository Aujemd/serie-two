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
    // modify the webpack config however you'd like to by adding to this object
  })
}
