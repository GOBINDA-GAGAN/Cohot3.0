const ProductCardSkeleton = () => {
  return (
    <div className="w-full overflow-hidden border border-border bg-background">

      {/* Image Skeleton */}
      <div className="aspect-square w-full animate-pulse bg-gray-200" />

      {/* Content */}
      <div className="p-2.5 sm:p-3">

        {/* Title + Rating */}
        <div className="flex items-start justify-between gap-2">

          <div className="flex-1">
            <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />

            <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-gray-200" />
          </div>

          <div className="h-5 w-10 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Tags */}
        <div className="mt-3 flex gap-2">
          <div className="h-5 w-12 animate-pulse rounded-full bg-gray-200" />
          <div className="h-5 w-14 animate-pulse rounded-full bg-gray-200" />
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <div className="h-5 w-16 animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-12 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-14 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Stock */}
        <div className="mt-2 h-3 w-20 animate-pulse rounded bg-gray-200" />

        {/* Bottom Controls */}
        <div className="mt-3 flex items-center justify-between gap-2">

          {/* Quantity */}
          <div className="h-8 w-24 animate-pulse rounded-lg bg-gray-200" />

          {/* Add Cart */}
          <div className="h-8 flex-1 animate-pulse rounded-lg bg-gray-200" />

        </div>

      </div>
    </div>
  );
};

export default ProductCardSkeleton;