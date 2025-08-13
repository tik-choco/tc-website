import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { getDirname, path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'


export default defineUserConfig({
    base: '/tc-website/',
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ],
    lang: 'ja',
    title: '零界オンライン Rinkai Online',
    locales: {
        '/': {
            lang: 'ja',
            description: 'ただそこに異世界がある',
        },
        '/en/': {
            lang: 'en',
            description: 'Let\'s live in a beautiful fantasy world!',
        },
        '/zh-TW/': {
            lang: 'zh-TW',
            description: '讓我們在奇幻的異世界一起生活吧！',
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
                    {
                        text: '規約',
                        link: '/terms_and_privacy/',
                    }                    
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
                    {
                        text: 'Terms & Privacy',
                        link: '/en/terms_and_privacy/',
                    }
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
                    {
                        text: '規約',
                        link: '/zh-TW/terms_and_privacy/',
                    }
                ],
            },
        },
    }),
})
