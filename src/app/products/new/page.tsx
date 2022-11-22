"use client"
import { useRef } from "react"
import CreateProductForm from "./form"

export default function SellerProductsNewPage() {
  const submit = useRef<HTMLButtonElement>(null)
  return (
    <div className="mx-auto max-w-3xl bg-white px-4 py-6 mt-8">
      <div className="space-y-6">
        <CreateProductForm
          ref={submit}
          onSuccess={(product) => console.log(product)}
          onError={(err) => console.log(err)}
        />
        <button
          onClick={() => submit.current && submit.current.click()}
          type="submit"
          className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Save Product
        </button>
      </div>
    </div>
  )
}
