import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'
import type { Shortcut } from 'unocss'

const usefulShortcuts: Shortcut[] = [
  ['pr', 'relative'],
  ['pa', 'absolute'],
  ['pf', 'fixed'],
  ['f-c', 'flex justify-center items-center'],
  ['f-c-c', 'f-c flex-col'],

  ['fc', 'flex justify-center'],
  ['fcc', 'flex justify-center items-center'],
  ['fs', 'flex justify-start'],
  ['fsc', 'flex justify-start items-center'],
  ['fe', 'flex justify-end'],
  ['fec', 'flex justify-end items-center'],
  ['fb', 'flex justify-between'],
  ['fbc', 'flex justify-between items-center'],
  ['fa', 'flex justify-around'],
  ['fac', 'flex justify-around items-center'],

  ['fic', 'flex items-center'],
  ['fccc', 'flex justify-center items-center flex-col'],

  ['p-c', 'pa top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'],
]

export default defineConfig({
  shortcuts: [
    ...usefulShortcuts,

    ['trans', 'transition-all-350 ease-linear'],
    ['text', 'text-text-default dark:text-text-dark'],
    ['bg', 'trans bg-bg-default dark:bg-bg-dark'],
    ['base', 'trans text'],

    ['icon', 'w-5.5 h-5.5 cursor-pointer select-none transition-opacity-300 ease-in-out text'],
    ['icon-btn', 'icon color-inherit op64 hover-op100 hover-color-teal-500 dark-hover-color-inherit'],
    ['icon-link', 'icon color-inherit op64 hover:op100 hover-text-red-300 dark-hover-color-inherit'],
    ['icon-text', 'color-inherit op64 hover:op100 hover-text-purple dark-hover-color-inherit'],
    ['link-hoverImportant', '!no-underline !hover-underline !hover-underline-offset-4 trans'],
    ['link', '!text-red-400 link-hoverImportant'],
    ['linkOutside', '!text-teal-500 link-hoverImportant'],
    ['linkOrg', '!text-blue-400 link-hoverImportant'],
    ['linkBtn', '!text-purple-400 link-hoverImportant'],

    ['header-anchor', 'float-left mt-[0.125em] ml-[-0.8em] pr-[0.2em] text-[0.85em] op-0 group-hover-op-60 fw-600'],
  ],
  theme: {
    colors: {
      bg: {
        default: '#fefefe',
        dark: '#1c1f24',
      },
      text: {
        // default: '#3D4248',
        default: '#6f6f6f',
        dark: '#C8CCD0',
      },
      primary: '#00bcd4',
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
      xxxl: '1736px',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],

})
