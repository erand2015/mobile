import { Suspense } from "react";
import { ProductGrid } from "@/components/shop/product-grid";
import { SidebarFilters } from "@/components/shop/sidebar-filters";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen bg-black pt-24">
      {/* Sidebar - Fikse për Desktop */}
      <aside className="hidden w-64 border-r border-zinc-800 p-6 md:block">
        <SidebarFilters />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white tracking-tighter">Premium Collection</h1>
          <div className="flex gap-4">
             {/* Shadcn Select për Sorting */}
          </div>
        </div>

        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductGrid />
        </Suspense>
      </main>
    </div>
  );
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} className="h-[400px] w-full rounded-2xl bg-zinc-900" />
      ))}
    </div>
  );
}