/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          50: '#fff7ed',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          900: '#111827',
        },
        brand: {
          light: '#ffffff',
          bg: '#fafafa',
          text: '#111827',
          border: '#e5e7eb',
        },
      },
      backgroundImage: {
        'gradient-subtle': 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
        'gradient-accent': 'linear-gradient(135deg, #f0f9ff 0%, #fef3c7 50%, #fce7f3 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-medium': 'floatMedium 7s ease-in-out infinite',
        'float-smooth': 'floatSmooth 6s cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
        'gradient-slow': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        floatSmooth: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '25%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(-12px)' },
          '75%': { transform: 'translateY(-6px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft-xl': '0 8px 30px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
