/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    require('rippleui'),
  ],
  /** @type {import('rippleui').Config} */
  rippleui: {
    defaultStyle: false,
    removeThemes: ['dark', 'light'],
    themes: [
      {
        themeName: "light",
        prefersColorScheme: true,
        colorScheme: "light",
        colors: {
          primary: "#3B82F6",
          secondary: "#6B7280",
          accent: "#EF4444",
          neutral: "#F9FAFB",
        },
      }
    ]
  }
}