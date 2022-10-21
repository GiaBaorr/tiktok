import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from '~/Components/Image/Image';
import classNames from 'classnames/bind';

// function Image({ src, className, fallback: customFallback = images.noImage, alt, ...props }, ref) {
//     const [fallback, setFallback] = useState(``);

//     const handleOnError = () => {
//         setFallback(customFallback);
//     };
//     return (
//         <img
//             className={classNames(styles.wrapper, className)}
//             ref={ref}
//             src={fallback || src}
//             {...props}
//             alt={alt}
//             onError={handleOnError}
//         />
//     );
// }

// export default forwardRef(Image);

const Image = forwardRef(
    ({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
        const [fallback, setFallback] = useState('');

        const handleError = () => {
            setFallback(customFallback);
        };

        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    },
);

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
};
export default Image;
