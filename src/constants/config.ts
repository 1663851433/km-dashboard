export const APP_CONFIG = {
  siteName: 'KM Dashboard',
  description: 'Knowledge Management Dashboard',
  apiEndpoints: {
    base: '/api',
    hello: '/api/hello',
  },
  routes: {
    home: '/',
    purchase: '/purchase',
    rosinPrice: '/rosinPrice',
  },
} as const; 