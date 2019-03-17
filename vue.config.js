module.exports = {
    // PWA
    pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'src/service-worker.js'
        },
        themeColor: '#FFF'
    },

    // global scss variables
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import '@/scss/_variables.scss';
                `
            }
        }
    }
}
