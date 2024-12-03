/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    safelist: ['border-lava', 'bg-lava'],
    theme: {
        extend: {
            screens: {
                // Mobile Devices (Landscape Mode)
                sm: { min: '420px', max: '768px' }, // Small Screens (landscape mode on small phones)
                md: { min: '769px', max: '1024px' }, // Medium Screens (landscape mode on medium phones and small tablets)
                lg: { min: '1025px', max: '1440px' },
                xl: { min: '1441px', max: '1920px' },
                // Additional larger screens
                '2xl': { min: '1921px', max: '2560px' }, // Ultra-Wide Screens (e.g., 1440p monitors)
                '3xl': { min: '2561px', max: '3200px' }, // Extra Large Screens (high-resolution monitors)
                '4xl': { min: '3201px' }, // Ultra-High Definition Screens (e.g., 4K displays)
            },
            fontFamily: {
                spraypaint: ['Rubik Spray Paint', 'system-ui'],
                bubbles: ['Rubik Bubbles', 'system-ui'],
                nunito: ['Nunito', 'system-ui'],
                abz: ['ABeeZee', 'sans-serif'],
            },
            colors: {
                back: '#F40000',
                sunshine: '#FFEB3B',
                bluesky: '#4FC3F7',
                applegreen: '#8BC34A',
                tangerine: '#FF9800',
                pinkgum: '#FF80AB',
                grape: '#AB47BC',
                softgray: '#B0BEC5',
                butter: '#FFEDBE',
                cheese: '#FFD568',
                stone: '#8D8686',
                lava: '#CD0045',
                limblue: '#005981',
                darkgreen: '#2B4D39',
                wood: '#D68E5E',
                lineblue: '#4A90E2',
                linered: '#FF5A5F',
                modalblue: '#A9DEFF',
                modalbrown: '#E2B868',
                peach: '#FFBD95',
                greytext: '#9da4b0',
                poop: '#7C4B3A',
                darkpeach: '#FD8C70',
                modalbrownlight: '#E8CBA0',
                modalbrowndark: '#986300',
                lavender: '#9168E2',
                moldcheese: '#F8BC35',
            },
        },
    },
    plugins: [],
}
