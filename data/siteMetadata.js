const siteMetadata = {
  title: 'Blog | Amar Nath',
  author: 'Gaurav Sharma',
  headerTitle: 'WebSocks',
  description: `My personal blog where I shares my work`,
  // snippets: 'Reuseable code snippets collected by Parth',
  snippets: 'will see what we can add -by Spiddy',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://musing.vercel.app', //to be edited -by spiddy
  siteRepo: 'https://github.com/pycoder2000/blog', //to be edited -by spiddy
  siteLogo: '/static/images/logo.png', //to be edited -by spiddy
  image: '/static/images/avatar.png', //to be edited -by spiddy
  socialBanner: '/static/images/twitter-card.png', //to be edited -by spiddy
  email: 'amarnath@sliet.ac.in', //to be edited -by spiddy changed by -spiddy
  github: 'https://github.com/Gauravsharma-2002', //to be edited -by spiddy
  twitter: 'https://x.com/spidermonk_75', //to be edited -by spiddy
  linkedin: 'https://www.linkedin.com/in/gaurav-sharma-81a344201/', //to be edited -by spiddy
  website: '', //to be edited -by spiddy
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-F6V2QTJ628', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  // will see does it alters something -by Spiddy
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  // // will have to change these
  socialAccount: {
    twitter: 'spidermonk_75',
  },
}

module.exports = siteMetadata
