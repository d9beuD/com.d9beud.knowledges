import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/com.d9beud.knowledges',

  lang: 'fr-FR',
  title: 'd9beuD\'s Knowledges',
  description: 'Site web rassemblant des connaissances sous forme de cours',

  // Theme related configuration
  themeConfig: {
    nav: nav(),

    sidebar: {
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
        { text: 'HTML' },
        { text: 'CSS' },
        { text: 'PHP' },
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
        { text: 'Langage HTML5', link: '/cours/html/language/' },
      ]
    },
    {
      text: 'Cours de CSS',
      items: [
        { text: 'Langage CSS3', link: '/cours/css/language/' },
        { text: 'Framework Bootstrap', link: '/cours/css/bootstrap/' },
      ]
    },
    {
      text: 'Cours de PHP',
      items: [
        { text: 'Langage PHP 8', link: '/cours/php/language/' },
        { text: 'Framework Symfony', link: '/cours/php/symfony/' },
        { text: 'Framework Slim', link: '/cours/php/slim/' },
      ]
    },
  ]

  return sidebar
}

function sidebarCoursHTML() {
  return []
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
