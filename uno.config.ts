import { mergeConfigs } from '@unocss/core'

import slidevUnoConfig from '@slidev/client/uno.config'

import { defineConfig, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: mergeConfigs([
    { presets: slidevUnoConfig.presets as any },
    {
      presets: [
        presetWebFonts({
          fonts: {
            // these will extend the default theme
            sans: 'Roboto',
            mone: ['Fira Code', 'Fira Mono:400,700'],
            // custom ones
            lobster: 'Lobster',
            lato: [
              {
                name: 'Lato',
                weights: ['400', '700'],
                italic: true,
              },
              {
                name: 'sans-serif',
                provider: 'none',
              },
            ],
          },
        }),
      ],
    },
  ]).presets,
})
