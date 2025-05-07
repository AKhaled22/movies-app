/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2e7bcf',
                blue: '#007bff',
                indigo: '#6610f2',
                purple: '#8e54df',
                pink: '#e83e8c',
                red: '#dc3545',
                orange: '#fd7e14',
                yellow: '#ffc107',
                green: '#28a745',
                teal: '#20c997',
                cyan: '#17a2b8',
                gray: {
                    DEFAULT: '#6c757d',
                    dark: '#343a40',
                },
                secondary: '#212529',
                success: '#28a745',
                info: '#17a2b8',
                warning: '#ffc107',
                danger: '#dc3545',
                light: '#f8f9fa',
                dark: '#343a40',
            },
            fontFamily: {
                sans: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    'Oxygen-Sans',
                    'Ubuntu',
                    'Cantarell',
                    '"Helvetica Neue"',
                    'sans-serif'
                ],
                mono: [
                    'SFMono-Regular',
                    'Menlo',
                    'Monaco',
                    'Consolas',
                    '"Liberation Mono"',
                    '"Courier New"',
                    'monospace'
                ]
            }
        }
    },
    plugins: [],
}