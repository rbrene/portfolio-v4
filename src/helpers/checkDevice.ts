import { viewportDimensions } from '../helpers/units';


export function checkDevice() {
    if (window.innerWidth <= viewportDimensions.mobile - 0.2) {
        return 'mobile';
    } else if (window.innerWidth >= viewportDimensions.mobile && window.innerWidth <= viewportDimensions.tablet - 0.2) {
        return 'tablet';
    } else if (window.innerWidth >= viewportDimensions.tablet) {
        return 'desktop';
    }
}