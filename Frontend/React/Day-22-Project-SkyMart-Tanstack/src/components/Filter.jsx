import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  Star,
  Percent,
  PackageCheck,
  PackageX,
  RotateCcw,
} from "lucide-react";

const FilterSidebar = () => {
  return (
    <aside className="w-64 shrink-0 bg-background text-foreground border h-fit border-border mt-3">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between p-2">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={16} />
        </div>

        <button className="text-muted hover:text-primary">
          <RotateCcw size={14} />
        </button>
      </div>

    
      

      {/* Categories */}
      <section className="mb-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xs font-semibold">
            Categories
          </h3>

          <ChevronDown size={13} className="text-muted" />
        </div>

        <div className="space-y-1">

          <button className="flex w-full items-center justify-between bg-primary px-2 py-1.5 text-left text-xs text-white">
            All Products
            <span>✓</span>
          </button>

          {[
            "Groceries",
            "Beauty",
            "Fragrances",
            "Furniture",
            "Laptops",
          ].map((category) => (
            <button
              key={category}
              className="
                flex
                w-full
                items-center
                justify-between
                px-2
                py-1.5
                text-left
                text-xs
                capitalize
                text-muted
                transition
                hover:bg-primary-light
                hover:text-primary
              "
            >
              {category}
            </button>
          ))}

        </div>
      </section>

      {/* Price */}
      <section className="mb-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xs font-semibold">
            Price
          </h3>

          <span className="text-[10px] text-muted">
            ₹0 - ₹1000
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="1000"
          defaultValue="500"
          className="w-full cursor-pointer accent-primary"
        />

        <div className="mt-2 flex justify-between text-[10px] text-muted">
          <span>₹0</span>
          <span>₹1000+</span>
        </div>
      </section>

      {/* Rating */}
      <section className="mb-6">
        <h3 className="mb-3 text-xs font-semibold">
          Rating
        </h3>

        <div className="space-y-1">

          {[4, 3, 2].map((rating) => (
            <button
              key={rating}
              className="
                flex
                w-full
                items-center
                justify-between
                px-2
                py-1.5
                text-xs
                text-muted
                transition
                hover:bg-primary-light
                hover:text-primary
              "
            >
              <span className="flex items-center gap-1">
                <Star
                  size={13}
                  fill="currentColor"
                  className="text-accent"
                />

                {rating}.0 & above
              </span>

              <span>›</span>
            </button>
          ))}

        </div>
      </section>

      {/* Discount */}
      <section className="mb-6">
        <div className="mb-3 flex items-center gap-2">
          <Percent size={14} />

          <h3 className="text-xs font-semibold">
            Discount
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-1">

          {["10% OFF", "20% OFF", "30% OFF", "50% OFF"].map(
            (discount) => (
              <button
                key={discount}
                className="
                  bg-card
                  px-2
                  py-2
                  text-[10px]
                  font-medium
                  text-muted
                  transition
                  hover:bg-primary
                  hover:text-white
                "
              >
                {discount}
              </button>
            )
          )}

        </div>
      </section>

      {/* Availability */}
      <section className="mb-6">
        <h3 className="mb-3 text-xs font-semibold">
          Availability
        </h3>

        <div className="space-y-1">

          <button
            className="
              flex
              w-full
              items-center
              gap-2
              px-2
              py-2
              text-left
              text-xs
              text-muted
              hover:bg-primary-light
              hover:text-primary
            "
          >
            <PackageCheck size={14} />
            In Stock
          </button>

          <button
            className="
              flex
              w-full
              items-center
              gap-2
              px-2
              py-2
              text-left
              text-xs
              text-muted
              hover:bg-primary-light
              hover:text-accent
            "
          >
            <PackageX size={14} />
            Low Stock
          </button>

          <button
            className="
              flex
              w-full
              items-center
              gap-2
              px-2
              py-2
              text-left
              text-xs
              text-muted
              hover:bg-primary-light
              hover:text-primary
            "
          >
            <PackageX size={14} />
            Out of Stock
          </button>

        </div>
      </section>

      {/* Reset */}
      <button
        className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          bg-primary
          px-3
          py-2.5
          text-xs
          font-medium
          text-white
          transition
          hover:bg-primary-hover
        "
      >
        <RotateCcw size={13} />
        Reset Filters
      </button>

    </aside>
  );
};

export default FilterSidebar;