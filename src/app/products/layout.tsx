import Link from "next/link"
import { NewProductSlidover, ProductList } from "./containers"

export default async function ProductsRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-0 flex flex-1 overflow-hidden h-screen">
      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last bg-transparent">
        {children}
      </main>
      <aside className="bg-white relative w-96 flex-shrink-0 overflow-y-auto border-r border-gray-200 xl:order-first xl:flex xl:flex-col">
        {/* <SellerSearchInput /> */}
        <div className="fixed w-[380px] bg-white px-6 py-5 flex items-center justify-between border-b">
          <h2 className="text-xl leading-loose font-semibold text-gray-600">Products</h2>
          <NewProductSlidover />
        </div>
        {/* <ProductList /> */}
      </aside>
    </div>
  )
}
