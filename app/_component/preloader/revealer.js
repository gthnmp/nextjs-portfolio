import { gsap } from 'gsap';

class ImageLayer {
    constructor(el) {
        this.DOM = {el: el};
        this.DOM.image = this.DOM.el.querySelector('.layers__item-img');
    }
}

export default class Revealer {
    constructor() {
        this.DOM = {main: document.querySelector('main')};
        this.layers = [];
        [...document.querySelectorAll('.layers__item')].forEach(item => this.layers.push(new ImageLayer(item)));
        this.layersTotal = this.layers.length;
        this.gridItems = [...document.querySelectorAll('.grid__item')];
        this.options = {
            duration: 1.25,
            panelDelay: 0.25
        };
        this.createTimeline();
    }
    createTimeline() {
        this.tl = gsap.timeline({paused: true});
        for (let i = 0, len = this.layersTotal; i <= len-1; ++i) {
            this.tl.to([this.layers[i].DOM.el, this.layers[i].DOM.image], {
                duration: this.options.duration,
                ease: 'Power2.easeInOut',
                y: 0
            }, this.options.panelDelay*i);
        }

        this.tl.addLabel('halfway', this.options.panelDelay*(this.layersTotal-1) + this.options.duration)
        .call(() => {
            this.layers.filter((_, pos) => pos != this.layers.length-1).forEach((panel,pos) => {
                gsap.set(panel.DOM.el, {opacity: 0});
            });
            this.DOM.main.classList.remove('intro');
        }, this, 'halfway')
        .to([this.layers[this.layersTotal-1].DOM.el, this.layers[this.layersTotal-1].DOM.image], {
            duration: this.options.duration,
            ease: 'Expo.easeInOut',
            y: (index) => index ? '101%' : '-101%'
        }, 'halfway')
    }
    reveal() {
        this.tl.restart();
    }
}