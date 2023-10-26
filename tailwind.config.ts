import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    ]
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
    }
  },
  plugins: []
}
export default config
