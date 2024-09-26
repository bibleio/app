import type { Config } from 'tailwindcss';
import { bibleioTheme } from '@bibleio/design';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [bibleioTheme],
  darkMode: 'class',
};
export default config;
