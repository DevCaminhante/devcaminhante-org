export const HeaderRouteURL = {
  BLOG: '/blog',
  CAMINHADA_DEV: '/caminhada-dev',
  HOME: '/',
  SOBRE: '/sobre'
} as const

export const HeaderRouteText = {
  BLOG: 'Blog',
  CAMINHADA_DEV: 'Caminhada Dev',
  HOME: 'Home',
  SOBRE: 'Sobre'
} as const

const urls = Object.values(HeaderRouteURL)
const texts = Object.values(HeaderRouteText)

export type HeaderRouteURLType = (typeof urls)[number]
export type HeaderRouteTextType = (typeof texts)[number]
