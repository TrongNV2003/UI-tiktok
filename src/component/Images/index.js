import { useState, forwardRef } from "react";
import images from "@app/assets/images";
import styles from "./Image.module.scss";
import classNames from "classnames";

const Image = forwardRef(({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
    const [_fallback, setFallback] = useState("");
    const handleError = () => {
        setFallback(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={_fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
