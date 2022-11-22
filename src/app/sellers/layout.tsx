import { getXataClient } from "xata"

import { ResourceItem } from "common/components/resource"
import SellerSearchInput from "common/components/searchInput/SellerSearchInput"
import { SellerList } from "./components"

const xata = getXataClient()

async function getData() {
  const page = await xata.db.address_classifications.getPaginated({
    pagination: {
      size: 30,
    },
  })
  return page
}

export default async function AdminSellerRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sellers = await getData()
  return (
    <div className="relative z-0 flex flex-1 overflow-hidden h-screen">
      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
        {children}
      </main>
      <aside className="relative w-96 flex-shrink-0 overflow-y-auto border-r border-gray-200 xl:order-first xl:flex xl:flex-col">
        {/* <SellerSearchInput /> */}
        <SellerList
          items={sellers.records.map((item) => ({
            id: item.id,
            name: item.name || "",
          }))}
        />
      </aside>
    </div>
  )
}
