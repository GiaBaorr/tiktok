import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from '~/Components/Image';
import classNames from 'classnames/bind';

function Image({ src, className, ...props }, ref) {
    const [fallback, setFallback] = useState(``);
    const handleOnError = () => {
        setFallback(images.noImage);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            {...props}
            onError={handleOnError}
        />
    );
}

export default forwardRef(Image);
