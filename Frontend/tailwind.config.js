/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f46e5',
          dark: '#3730a3',
          light: '#eef2ff',
        },
        surface: '#ffffff',
        bg: '#f8fafc',
        ink: '#0f172a',
        muted: '#64748b',
        border: '#e2e8f0',
        success: '#16a34a',
        warning: '#f59e0b',
        danger: '#dc2626',
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 23, 42, 0.08)',
      },
      borderRadius: {
        card: '12px',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
