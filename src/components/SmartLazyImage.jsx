import React, { useState } from "react";
import result from "../blurData.json";

const SmartLazyImage = ({
  base,
  src,
  alt = "",
  className = "",
  loading = "lazy",
  fetchpriority,
  ...rest
}) => {
  const finalSrc = src || `${base}.webp`;

  const cleanPath = (p) => (p && !p.startsWith("/") ? `/${p}` : p);

  const placeholder =
    result[cleanPath(finalSrc)] ||
    result[cleanPath(`${base}.webp`)] ||
    result[cleanPath(`${base}.jpg`)] ||
    result[cleanPath(`${base}.png`)] ||
    "";

  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${placeholder})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        ...(className.includes("h-") ? {} : { minHeight: "200px" }),
      }}
    >
      {/* 💡 Overlay a soft blur on top of background */}
      {!loaded && (
        <div className="absolute inset-0 backdrop-blur-md bg-white/10 z-0" />
      )}

      <picture className="block w-full h-full">
        <img
          src={finalSrc}
          alt={alt}
          loading={loading}
          fetchpriority={fetchpriority}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          {...rest}
        />
      </picture>
    </div>
  );
};

export default SmartLazyImage;
