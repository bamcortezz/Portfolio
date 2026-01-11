import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const LazyImage = ({ src, alt, className, onClick, ...props }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };

    img.onerror = () => {
      setIsError(true);
      setIsLoading(false);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  if (isError) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-gray-800`}
      >
        <span className="text-gray-400">Failed to load image</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-gray-900`}
      >
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onClick={onClick}
      loading="lazy"
      {...props}
    />
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

LazyImage.defaultProps = {
  className: "",
  onClick: null,
};

export default LazyImage;
