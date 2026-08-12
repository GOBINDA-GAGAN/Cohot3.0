import {
  Search,
  ArrowDownAZ,
  ArrowUpAZ,
  List,
  Grid2X2,
  Grid3X3,
} from "lucide-react";
import { userProductAPI } from "../hooks/useProduct";

const ProductToolbar = () => {
  let { searchProduct } = userProductAPI();
  
  
  return (
    <div className="flex w-full items-center gap-3 mb-3">
      {/* Search */}
      <div className="flex min-w-0 flex-1 items-center gap-2 border-b border-border px-1 py-2">
        <Search size={16} className="shrink-0 text-muted" />

        <input
          onChange={(e) => searchProduct(e.target.value)}
          type="text"
          placeholder="Search products..."
          className=" w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted
          "
        />
      </div>

      {/* Sort */}
      <div className="flex shrink-0 items-center border border-border">
        <button
          className="
            flex items-center gap-2
            px-3 py-2
            text-xs font-medium
            text-muted
            transition
            hover:bg-primary
            hover:text-white
          "
        >
          <ArrowUpAZ size={14} />
          Low → High
        </button>

        <div className="h-5 w-px bg-border" />

        <button
          className="
            flex items-center gap-2
            px-3 py-2
            text-xs font-medium
            text-muted
            transition
            hover:bg-primary
            hover:text-white
          "
        >
          <ArrowDownAZ size={14} />
          High → Low
        </button>
      </div>

      {/* View Switcher */}
      <div className="flex shrink-0 border border-border">
        {/* List */}
        <button
          title="List View"
          className="
            flex items-center justify-center
            p-2.5
            text-muted
            transition
            hover:bg-primary
            hover:text-white
          "
        >
          <List size={16} />
        </button>

        {/* Grid 4 */}
        <button
          title="4 Column Grid"
          className="
            flex items-center justify-center
            p-2.5
            text-muted
            transition
            hover:bg-primary
            hover:text-white
          "
        >
          <Grid2X2 size={16} />
        </button>

        {/* Grid 6 */}
        <button
          title="6 Column Grid"
          className="
            flex items-center justify-center
            p-2.5
            text-muted
            transition
            hover:bg-primary
            hover:text-white
          "
        >
          <Grid3X3 size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProductToolbar;
