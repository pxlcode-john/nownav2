import { PlusIcon, XCircleIcon } from "@heroicons/react/24/outline"
import React, { useState } from "react"
import Button from "../Button"
import Input from "../Input"
import Select, { Option } from "../Select"

export const variants: Option[] = [
  {
    value: "size",
    label: "Size",
  },
  {
    value: "color",
    label: "Color",
  },
  {
    value: "brand",
    label: "Brand",
  },
  {
    value: "material",
    label: "Material",
  },
  {
    value: "weight",
    label: "Weight",
  },
]

export type ProductVariantProps = {
  selectProps: any
  inputProps: any
  index: number
  onRemove: (index: number) => void
}

export const ProductVariant: React.FC<ProductVariantProps> = ({
  selectProps,
  inputProps,
  onRemove,
  index,
}): React.ReactElement => {
  const handleRemove = () => onRemove(index)
  console.log(selectProps.value)
  return (
    <div className="grid grid-cols-4 gap-2 items-center">
      <Select options={variants} size="small" {...selectProps} />
      <div className="col-span-3 flex items-center space-x-1">
        <Input size="small" {...inputProps} />
        <button onClick={handleRemove}>
          <XCircleIcon className="w-6 text-gray-400" />
        </button>
      </div>
    </div>
  )
}

export default ProductVariant
