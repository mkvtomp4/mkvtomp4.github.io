/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        azure: {
          DEFAULT: '#3A86FF',
          hover: '#2563EB',
          glow: 'rgba(58, 134, 255, 0.35)',
        },
        periwinkle: {
          DEFAULT: '#BDB2FF',
          soft: 'rgba(189, 178, 255, 0.25)',
        },
        blush: {
          DEFAULT: '#FFD6E0',
          dark: '#2A1F3D',
        },
        alabaster: '#FFF4F4',
        ink: '#0F172A',
        bgPrimary: 'var(--bg-primary)',
        bgSurface: 'var(--bg-surface-card)',
        bgWorkspace: 'var(--workspace-box-bg)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        borderTheme: 'var(--border-color)',
        pillBadge: 'var(--highlight-pill-badge)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        workspace: '0 24px 60px -15px rgba(58, 134, 255, 0.14), 0 0 0 2px var(--border-color)',
        'workspace-hover': '0 28px 70px -12px rgba(58, 134, 255, 0.24), 0 0 0 2px #3A86FF',
        kofi: '0 0 20px rgba(255, 214, 224, 0.85)',
      },
       keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-7px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'float-slow': 'floatSlow 3.8s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
