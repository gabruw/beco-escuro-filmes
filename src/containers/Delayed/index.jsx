import { useEffect, useState } from 'react';

const Delayed = ({ children, time = 500 }) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIsShown(true);
        }, time);

        return () => clearTimeout(timeOut);
    }, [time]);

    return isShown ? children : null;
};

export default Delayed;
