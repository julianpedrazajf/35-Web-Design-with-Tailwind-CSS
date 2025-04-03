const { plugins } = require('./postcss.config');

/** @type {import('tailwindscss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {},
    },    
        plugins: [],
}