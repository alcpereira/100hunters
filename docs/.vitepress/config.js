// .vitepress/config.js
import { defineConfig } from "vitepress";

import { withMermaid } from "vitepress-plugin-mermaid";


export default withMermaid(
    
  defineConfig({
    optimizeDeps: {
      include: [
        'dayjs',
        'mermaid'
      ]
    },

    //   class: "mermaid my-class", // set additional css classes for parent container 
    // },
    logo: "/favicon.ico",
    title: '100Hunters',
    description: 'An awesome docs template built by me',
    themeConfig: {
    nav: [
        { text: "Database", link: "/database" },
        { text: "Environment variables", link: "/environment-variables" },
        { text: "Storybook", link: "/storybook" },
        { text: "Tailwind", link: "/tailwind" },
        { text: "Testing", link: "/testing" },
        { text: "Contributing", link: "/contributing" },
        
      ],
    sidebar: [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/introduction' },
            { text: 'Getting Started', link: '/getting-started' },
            { text: "Database", link: "/database" },
            { text: "Environment variables", link: "/environment-variables" },
            { text: "Storybook", link: "/storybook" },
            { text: "Tailwind", link: "/tailwind" },
            { text: "Testing", link: "/testing" },
          ]
        }
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/alcpereira/100hunters" }
      ]
    },
    footer: {
        message: "Released under the MIT License.",
        copyright: "Copyright © 2022-present Adocs",
      },
  })
);
