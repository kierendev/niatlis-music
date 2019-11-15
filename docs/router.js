import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c0ec4040 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _b31aee88 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _a44272ac = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _62056034 = () => interopDefault(import('../pages/playlists/index.vue' /* webpackChunkName: "pages/playlists/index" */))
const _396d684b = () => interopDefault(import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _1156df06 = () => interopDefault(import('../pages/settings/index.vue' /* webpackChunkName: "pages/settings/index" */))
const _5ca8cc99 = () => interopDefault(import('../pages/top-songs/index.vue' /* webpackChunkName: "pages/top-songs/index" */))
const _184d48cb = () => interopDefault(import('../pages/login/callback.vue' /* webpackChunkName: "pages/login/callback" */))
const _3b07d7ef = () => interopDefault(import('../pages/search/track/_id.vue' /* webpackChunkName: "pages/search/track/_id" */))
const _9552843c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _c0ec4040,
    name: "about"
  }, {
    path: "/login",
    component: _b31aee88,
    name: "login"
  }, {
    path: "/logout",
    component: _a44272ac,
    name: "logout"
  }, {
    path: "/playlists",
    component: _62056034,
    name: "playlists"
  }, {
    path: "/search",
    component: _396d684b,
    name: "search"
  }, {
    path: "/settings",
    component: _1156df06,
    name: "settings"
  }, {
    path: "/top-songs",
    component: _5ca8cc99,
    name: "top-songs"
  }, {
    path: "/login/callback",
    component: _184d48cb,
    name: "login-callback"
  }, {
    path: "/search/track/:id?",
    component: _3b07d7ef,
    name: "search-track-id"
  }, {
    path: "/",
    component: _9552843c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
