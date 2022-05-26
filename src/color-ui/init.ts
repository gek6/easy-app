// @ts-ignore
const colorInit = (app) => {
    uni.getSystemInfo({
        success: function (e: any) {
            // #ifndef MP
            app.config.globalProperties.StatusBar = e.statusBarHeight;
            if (e.platform == 'android') {
                app.config.globalProperties.CustomBar = e.statusBarHeight + 50;
            } else {
                app.config.globalProperties.CustomBar = e.statusBarHeight + 45;
            }
            // #endif
            // #ifdef MP-WEIXIN
            app.config.globalProperties.StatusBar = e.statusBarHeight;
            // @ts-ignore
            let custom = wx.getMenuButtonBoundingClientRect();
            app.config.globalProperties.Custom = custom;
            app.config.globalProperties.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
            // #endif
            // #ifdef MP-ALIPAY
            app.config.globalProperties.StatusBar = e.statusBarHeight;
            app.config.globalProperties.CustomBar = e.statusBarHeight + e.titleBarHeight;
            // #endif
        }
    })

    app.config.globalProperties.ColorList = [{
        title: '嫣红',
        name: 'red',
        color: '#e54d42'
    },
        {
            title: '桔橙',
            name: 'orange',
            color: '#f37b1d'
        },
        {
            title: '明黄',
            name: 'yellow',
            color: '#fbbd08'
        },
        {
            title: '橄榄',
            name: 'olive',
            color: '#8dc63f'
        },
        {
            title: '森绿',
            name: 'green',
            color: '#39b54a'
        },
        {
            title: '天青',
            name: 'cyan',
            color: '#1cbbb4'
        },
        {
            title: '海蓝',
            name: 'blue',
            color: '#0081ff'
        },
        {
            title: '姹紫',
            name: 'purple',
            color: '#6739b6'
        },
        {
            title: '木槿',
            name: 'mauve',
            color: '#9c26b0'
        },
        {
            title: '桃粉',
            name: 'pink',
            color: '#e03997'
        },
        {
            title: '棕褐',
            name: 'brown',
            color: '#a5673f'
        },
        {
            title: '玄灰',
            name: 'grey',
            color: '#8799a3'
        },
        {
            title: '草灰',
            name: 'gray',
            color: '#aaaaaa'
        },
        {
            title: '墨黑',
            name: 'black',
            color: '#333333'
        },
        {
            title: '雅白',
            name: 'white',
            color: '#ffffff'
        },
    ]
};
export {colorInit};
