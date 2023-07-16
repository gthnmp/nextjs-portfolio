import imagesLoaded from "imagesloaded";

// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

const calcWinsize = () => {
    return {width: window.innerWidth, height: window.innerHeight};
};

const randomFloat = (min,max) => parseFloat(Math.min(min + (Math.random() * (max - min)), max).toFixed(2));

// Preload images
const preloadImages = (selector) => {
    return new Promise((resolve, _) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

export { map, lerp, calcWinsize, randomFloat, preloadImages };