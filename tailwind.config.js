/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./indext.html", "./**/*.html", "./**/*.js"],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "Inter", "ui-sans-serif", "system-ui", "-apple-system",
                    "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Cantarell",
                    "Helvetica Neue", "Arial", "sans-serif"
                ],
                display: [
                    "Plus Jakarta Sans", "Inter", "ui-sans-serif"
                ],
            },
            colors: {
                fouces: {
                    teal: "#0E8791",
                    tealDark: "#095B62",
                    sand: "#F7F5F2",
                    gold: "#91681A", 
                    ink: "#0F172A",
                }                
            },
            boxshadow: {
                soft: "0 10px 25px -10px rgba(0,0,0,.18)",
            }
        },
    },
    plugins: [],
}