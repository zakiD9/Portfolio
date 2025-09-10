/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: '#EBF0FF',      
        foreground: '#000F3D',      
        primary: {
          DEFAULT: '#2350CC',        
          foreground: '#EBF0FF',     
        },
        secondary: {
          DEFAULT: '#7C85A2',        
          foreground: '#EBF0FF',     
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#000F3D',
        },
        border: '#B7BCCC',
        input: '#EBF0FF',
        ring: '#2350CC',
        accent: {
          DEFAULT: '#2B2F3D',
          foreground: '#EBF0FF',
        },
        destructive: {
          DEFAULT: '#CC2323',        
          foreground: '#EBF0FF',
        },
        muted: {
          DEFAULT: '#7C85A2',
          foreground: '#EBF0FF',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
