'use client';

import Image, { StaticImageData } from 'next/image';
import { FC, CSSProperties, useState, useMemo } from 'react';
import { Skeleton } from 'antd';
import { FiImage } from 'react-icons/fi';

/**
 * ⚡ ImageManager — Smart Next.js Image Wrapper with AntD & graceful fallbacks
 * Features:
 * - Handles both static & remote images
 * - Smart loading (no priority/lazy conflict)
 * - Built-in AntD Skeleton loader
 * - Smooth fade-in animation
 * - Graceful fallback with icon
 * - Fully typed + reusable
 */

type ImageManagerProps = {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  showSkeleton?: boolean;
  radius?: number;
  onClick?: () => void;
};

const ImageManager: FC<ImageManagerProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  style,
  fill = false,
  priority = false,
  sizes,
  quality = 85,
  loading,
  placeholder,
  showSkeleton = true,
  radius = 12,
  onClick,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const isStatic = typeof src !== 'string';
  const imageSrc = isStatic ? src.src : src;
  const computedWidth = width ?? (isStatic ? src.width : undefined);
  const computedHeight = height ?? (isStatic ? src.height : undefined);

  // ✅ Avoid conflict between priority & loading
  const effectiveLoading = useMemo(() => (priority ? undefined : loading ?? 'lazy'), [priority, loading]);

  return (
    <div
      className={`${fill ? 'relative w-full h-full' : 'inline-block'} ${className}`}
      style={{
        ...style,
        borderRadius: radius,
        overflow: 'hidden',
        position: fill ? 'relative' : 'unset',
      }}
      onClick={onClick}
    >
      {/* 🌀 Show Skeleton while image loads */}
      {!isLoaded && !hasError && showSkeleton && (
        <Skeleton.Image
          active
          style={{
            width: computedWidth ?? '100%',
            height: computedHeight ?? 180,
            borderRadius: radius,
          }}
        />
      )}

      {/* 🖼️ Optimized Image */}
      {!hasError ? (
        <Image
          src={imageSrc}
          alt={alt}
          width={fill ? undefined : computedWidth}
          height={fill ? undefined : computedHeight}
          fill={fill}
          priority={priority}
          sizes={sizes}
          quality={quality}
          loading={effectiveLoading}
          placeholder={placeholder && isStatic ? placeholder : 'empty'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`object-cover transition-opacity duration-500 ease-in-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        // ❌ Graceful fallback UI
        <div
          className="flex items-center justify-center bg-gray-50 border border-gray-200"
          style={{
            width: computedWidth ?? '100%',
            height: computedHeight ?? 180,
            borderRadius: radius,
          }}
        >
          <FiImage size={40} className="text-gray-400" />
        </div>
      )}
    </div>
  );
};

export default ImageManager;
