"use client"
import Link from "next/link"
import { Fragment, useRef, useState } from "react"
import { ResourceItem } from "common/components/resource"
import useSWR from "swr"
import { getProducts, iGetProductsQueryDto, iGetProductsResponseDto, iPaginateQueryDto, paginate } from "libs/api"
import { get } from "lodash"
import Slideover from "common/components/Slideover"
import useOnClickOutside from "hooks/useOnClickOutside"
import CreateProductForm from "./forms"
import useFormAction from "hooks/useFormAction"
import Button from "common/components/Button"
import useOpen from "hooks/useOpen"
import { PlusIcon } from "@heroicons/react/24/outline"

export interface iProductListItem {
  id: string
  name: string
}

export const ProductList = () => {
  const [query, setQuery] = useState<iPaginateQueryDto>()
  const { data, error } = useSWR<iGetProductsResponseDto>(["/api/products", query], paginate)

  const [selected, setSelected] = useState<string>()
  const onSelect = (id: string) => setSelected(id)
  const unSelect = () => setSelected(undefined)

  const products = get(data, "data.records", [])

  return (
    <div className="divide-y divide-gray-800">
      {products.map((item) => (
        <ResourceItem
          as={Link}
          id={item.id}
          key={item.id}
          primaryText={item.title}
          isActive={item.id === selected}
          href={`/products/${item.id}`}
          onClick={onSelect}
          secondarySlot={
            <div>
              <span className="text-xs text-gray-700">
                {item.variants.map((variant) => `${variant.name} (₱${variant.price})`).join(", ")}
              </span>
            </div>
          }
          avatar={
            <span className="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100">
              <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          }
        />
      ))}
    </div>
  )
}

export const NewProductSlidover = () => {
  const slider = useOpen()
  const form = useFormAction()

  return (
    <div>
      <Button icon={PlusIcon} size="small" text="Add Product" rounded onClick={slider.open} />
      <Slideover
        {...slider}
        title="Product Manager"
        actions={
          <div className="space-x-2">
            <Button text="Cancel" onClick={slider.close} />
            <Button text="Save Product" primary onClick={form.onSubmit} />
          </div>
        }
      >
        <CreateProductForm {...form} />
      </Slideover>
    </div>
  )
}
