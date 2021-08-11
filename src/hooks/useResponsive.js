import { useLayoutEffect, useState, useCallback } from 'react';

export const screenTypes = {
    MOBILE: 'mobile',
    TABLET: 'tablet',
    DESKTOP: 'desktop',
};

export const screenBreakpoints = {
    MOBILE: 480,
    TABLET: 960,
    DESKTOP: 1280,
};

const getScreenType = width => {
    if (width <= screenBreakpoints.MOBILE) {
        return screenTypes.MOBILE;
    } else if (width <= screenBreakpoints.TABLET) {
        return screenTypes.TABLET;
    } else if (width <= screenBreakpoints.DESKTOP) {
        return screenTypes.DESKTOP;
    }
}

const useResponsive = () => {
    const [screenType, setScreenType] = useState(getScreenType(window.innerWidth));
    const eventHandler = useCallback(() => {
        const currentScreenType = getScreenType(window.innerWidth);

        if (currentScreenType !== screenType) {
            setScreenType(currentScreenType);
        }
    }, [screenType]);

    useLayoutEffect(() => {
        window.addEventListener('resize', eventHandler);

        return () => document.removeEventListener('resize', eventHandler);
    }, [eventHandler]);

    return screenType;
};

export default useResponsive;
