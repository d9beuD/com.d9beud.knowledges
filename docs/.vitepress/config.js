import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',

  lang: 'fr-FR',
  title: 'd9beuD\'s Knowledges',
  description: 'Site web rassemblant des connaissances sous forme de cours',

  // Theme related configuration
  themeConfig: {
    nav: nav(),

    sidebar: {
      '/courses/html/': sidebarCoursHTML(),
      '/courses/': sidebarCours(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/d9beuD/' }
    ],

    footer: {
      message: 'Lancé sous la licence MIT.',
      copyright: 'Copyright © 2022-présent Vincent Bathelier'
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    },
  }
})

function nav() {
  return [
    {
      text: 'Cours',
      items: [
        { text: 'Cours de HTML', link: '/courses/html/language/' },
        { text: 'Cours de CSS', link: '/courses/css/language/' },
        { text: 'Cours de PHP', link: '/courses/php/language/' },
      ]
    }
  ]
}

function sidebarCours() {
  /**
   * @type {import('vitepress').DefaultTheme.NavItem[]}
   */
  const sidebar = [
    {
      text: 'Cours de HTML',
      items: [
        { text: 'Langage HTML5', link: '/courses/html/language/' },
      ]
    },
    {
      text: 'Cours de CSS',
      items: [
        { text: 'Langage CSS3', link: '/courses/css/language/' },
        { text: 'Framework Bootstrap', link: '/courses/css/bootstrap/' },
      ]
    },
    {
      text: 'Cours de PHP',
      items: [
        { text: 'Langage PHP 8', link: '/courses/php/language/' },
        { text: 'Framework Symfony', link: '/courses/php/symfony/' },
        { text: 'Framework Slim', link: '/courses/php/slim/' },
      ]
    },
  ]

  return sidebar
}

function sidebarCoursHTML() {
  /**
   * @type {import('vitepress').DefaultTheme.NavItem[]}
   */
  const sidebar = [
    {
      text: 'Langage HTML',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/courses/html/language/' },
        { text: 'La syntaxe', link: '/courses/html/language/01-la-syntaxe' },
      ]
    }
  ]

  return sidebar
}

function sidebarCoursCSSLanguage() {
  return []
}

function sidebarCoursCSSBootstrap() {
  return []
}

function sidebarCoursPHPLanguage() {
  return []
}

function sidebarCoursPHPFrameworkSymfony() {
  return []
}
