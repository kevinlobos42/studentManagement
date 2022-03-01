const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#00b9fb',
                            '@input-placeholder-color': 'rgba(0,0,0,.6) ',
                            '@secondary-color': '#fff'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};