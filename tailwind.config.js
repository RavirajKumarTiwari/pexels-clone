/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "nav-bg":
                    "url('https://images.pexels.com/photos/733860/pexels-photo-733860.jpeg?auto=compress&cs=tinysrgb&h=350')",
            },
        },
    },
    plugins: [],
};

