import React from "react"

export type SellerSearchInputProps = {}

export const SellerSearchInput: React.FC<SellerSearchInputProps> = (): React.ReactElement => {
  return (
    <div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full text-lg py-4 border-gray-300 pl-7 pr-12 focus:border-primary-500 focus:ring-primary-500 sm:text-sm border-t-0 border-r-0 border-l-0"
          placeholder="0.00"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SellerSearchInput
