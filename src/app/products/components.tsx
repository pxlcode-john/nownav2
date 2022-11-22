"use client"
import Link from "next/link"
import { useState } from "react"
import { ResourceItem } from "common/components/resource"

export interface iProductListItem {
  id: string
  name: string
}

export const SellerList = ({ items }: { items: iProductListItem[] }) => {
  const [selected, setSelected] = useState<string>()
  const onSelect = (id: string) => setSelected(id)
  const unSelect = () => setSelected(undefined)
  return (
    <div>
      <div className="fixed w-[380px] bg-white px-6 py-5 flex items-center justify-between border-b">
        <h2 className="text-xl leading-loose font-semibold text-gray-600">
          Products
        </h2>
        <Link
          onClick={unSelect}
          href="/products/new"
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Add Product
        </Link>
      </div>
      <div className="divide-y divide-gray-800">
        {items.map((item) => (
          <ResourceItem
            as={Link}
            id={item.id}
            key={item.id}
            primaryText={item.name}
            isActive={item.id === selected}
            href={`/products/${item.id}`}
            onClick={onSelect}
            secondarySlot={<span className="text-sm">Dental toot</span>}
            avatar={
              <span className="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
            }
          />
        ))}
      </div>
    </div>
  )
}
