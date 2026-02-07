import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            keyframes: {
                slideGrid: {
                    '0%': { transform: 'translateY(0%)' },
                    '100%': { transform: 'translateY(50%)' },
                },
            },
            animation: {
                slideGrid: 'slideGrid 20s linear infinite',
            },
        },
    },
    plugins: [],
}

export default config