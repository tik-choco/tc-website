import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { getDirname, path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'


export default defineUserConfig({
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ],
    lang: 'ja',
    title: 'TikChoco Online',
    locales: {
        '/': {
            lang: 'ja',
            description: '異世界で生活しよう',
        },
        '/en/': {
            lang: 'en',
            description: 'Let\'s live in a beautiful fantasy world!',
        },
        '/zh-TW/': {
            lang: 'zh-TW',
            description: '讓我們生活在一個美麗的幻想世界！',
        },
    },
    theme: defaultTheme({
        locales: {
            '/': {
                selectLanguageName: '日本語',
                navbar: [{
                        text: 'Home',
                        link: '/',
                    },
                    {
                        text: 'About',
                        link: '/about/',
                    },
                ],
            },
            '/en/': {
                selectLanguageName: 'English',
                navbar: [{
                        text: 'Home',
                        link: '/en/',
                    },
                    {
                        text: 'About',
                        link: '/en/about/',
                    },
                ],
            },
            '/zh-TW/': {
                selectLanguageName: '繁體中文',
                navbar: [{
                        text: 'Home',
                        link: '/zh-TW/',
                    },
                    {
                        text: 'About',
                        link: '/zh-TW/about/',
                    },
                ],
            },
        },
    }),
})