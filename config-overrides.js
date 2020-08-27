/* config-overrides.js */
const { override, addLessLoader, fixBabelImports } = require('customize-cra');
const addCustomize = () => config => {
    require('react-app-rewire-postcss')(config, {
        plugins: loader => [
            require('postcss-px-to-viewport')({
                viewportWidth: 750, // (Number) The width of the viewport.
                viewportHeight: 1334, // (Number) The height of the viewport.
                unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
                viewportUnit: 'vw', // (String) Expected units.
                selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
                minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
                mediaQuery: false // (Boolean) Allow px to be converted in media queries.
            }),
            require("autoprefixer")({
                browsers: [
                    '>1%',
                    'last 2 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                ],
            }),
        ]
    });
    return config;
}
module.exports = override(
    // fixBabelImports('import', {
    //     libraryName: 'antd-mobile',
    //     libraryDirectory: 'es',
    //     style: true,
    // }),
    // addLessLoader({
    //     javascriptEnabled: true,
    //     //modifyVars: { '@primary-color': '#1DA57A' }, # 这里不注释掉，那你的无法修改主题色primary-color 这里很坑的 要注意！
    // }),
    addCustomize()
)
