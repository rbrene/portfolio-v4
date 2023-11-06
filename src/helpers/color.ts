export default class color {
    hue: number; // Hue value
    saturation: number; // Saturation value
    lightness: number; // Lightness value
    alpha?: number; // Lightness value

    constructor(hue: number, saturation: number, lightness: number, alpha?: number) {
        this.hue = hue; // Hue value
        this.saturation = saturation; // Saturation value
        this.lightness = lightness; // Lightness value
        this.alpha = alpha; // Lightness value
    }

    // Converts the 'hue', 'saturation', 'lightness', and 'alpha' values into a hsl() color value & returns it as a string
    hsl() {
        if (this.alpha) {
            return `hsl(${this.hue}, ${this.saturation}, ${this.lightness}, ${this.alpha})`;
        } else {
            return `hsl(${this.hue}, ${this.saturation}, ${this.lightness})`;
        }
    }

    // Converts the 'hue', 'saturation', 'lightness', and 'alpha' values into a rgb() color value & returns it as a string
    rgb() {
        // Convert HSL to RGB
        const h = this.hue / 360;
        const s = this.saturation / 100;
        const l = this.lightness / 100;

        let r: number;
        let g: number;
        let b: number;

        if (s === 0) {
            r = g = b = l;
        } else {
            const hueToRgb = (p: number, q: number, t: number) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };

            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;

            r = hueToRgb(p, q, h + 1 / 3);
            g = hueToRgb(p, q, h);
            b = hueToRgb(p, q, h - 1 / 3);
        }

        const red = Math.round(r * 255);
        const green = Math.round(g * 255);
        const blue = Math.round(b * 255);

        if (this.alpha) {
            return `rgba(${red}, ${green}, ${blue}, ${this.alpha})`;
        } else {
            return `rgb(${red}, ${green}, ${blue})`;
        }
    }

    // Converts the HSL string with the specified alpha value.
    transitionAlpha(alpha: number) {
        return `hsl(${this.hue}, ${this.saturation}, ${this.lightness}, ${alpha})`;
    }

    // Converts the color to an HSL or HSLA string.
    transitionColor(hue: number, saturation: number, lightness: number, alpha?: number) {
        if (alpha) {
            return `hsl(${hue}, ${saturation}, ${lightness}, ${alpha})`;
        } else if (!alpha) {
            return `hsl(${hue}, ${saturation}, ${lightness})`;
        }
    }
};