const { override, fixBabelImports, addBabelPlugins } = require('customize-cra');

module.exports = override(
    fixBabelImports('icons', {
        libraryName: '@material-ui/icons',
        libraryDirectory: '',
        camel2DashComponentName: false,
    }),
    fixBabelImports('core', {
        libraryName: '@material-ui/core',
        libraryDirectory: '',
        camel2DashComponentName: false,
    })
);
