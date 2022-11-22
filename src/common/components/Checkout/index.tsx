"use client"
import React, { useState } from "react"
import CheckCircleIcon from "@heroicons/react/24/solid/CheckCircleIcon"
import Image from "next/image"
import AddressForm from "../forms/Address"
import ContactForm from "../forms/Contact"
import clsx from "clsx"
import OrderReview from "../OrderReview"

const products = [
  {
    id: 1,
    name: "Nephrisol Vanilla Low Protein Milk 185 grams",
    href: "#",
    price: "P32.00",
    color: "1 Box",
    size: "Large",
    imageSrc: "https://d1h5fi2l2kvtwf.cloudfront.net/products/Nephrisol.jpg",
    imageAlt: "Nephrisol Vanilla Low Protein Milk 185 grams",
  },
  // More products...
]

const steps = [
  {
    step: 1,
    title: "Shipping Address",
    current: true,
    completed: false,
    buttonText: "Calculate Shipping",
    form: AddressForm,
  },
  {
    step: 2,
    title: "Contact Information",
    current: false,
    completed: false,
    buttonText: "Save Contact",
    form: ContactForm,
  },
  {
    step: 3,
    title: "Billing Details",
    current: false,
    completed: false,
    buttonText: "Save Billing",
    form: AddressForm,
  },
  {
    step: 4,
    title: "Review",
    current: false,
    completed: false,
    buttonText: "Place Order & Pay Now",
    form: OrderReview,
  },
]
export default function Checkout() {
  const [process, setProcess] = useState(steps)

  const onCurrent = (step: number) => {
    setProcess((prev) =>
      prev.map((item) => ({
        ...item,
        current: item.step === step,
        completed: item.step < step,
      }))
    )
  }
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 pt-4 pb-16 sm:px-6 sm:pt-8 sm:pb-24 lg:px-8 xl:px-2 xl:pt-14 bg-white md:my-8 rounded-md shadow-md">
        <h1 className="sr-only">Checkout</h1>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="sr-only">Order summary</h2>

            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {products.map((product) => (
                  <li key={product.id} className="flex space-x-6 py-6">
                    <Image
                      width={0}
                      height={0}
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
                    />
                    <div className="flex-auto">
                      <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                        <div className="flex-auto space-y-1 text-sm font-medium">
                          <h3 className="text-gray-900">
                            <a href={product.href}>{product.name}</a>
                          </h3>
                          <p className="text-gray-900">{product.price}</p>
                          <p className="hidden text-gray-500 sm:block">
                            {product.color}
                          </p>
                          <p className="hidden text-gray-500 sm:block">
                            {product.size}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-gray-900">P104.00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Taxes</dt>
                <dd className="text-gray-900">P8.32</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd className="text-gray-900">P14.00</dd>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-6 text-gray-900">
                <dt className="text-base">Total</dt>
                <dd className="text-base">P126.32</dd>
              </div>
            </dl>
          </div>

          <div className="mx-auto w-full max-w-lg">
            {process.map((item) => (
              <div
                key={`step-${item.step}`}
                className="divide-b divide-gray-200 border-b border-gray-200"
              >
                {!item.current && (
                  <div className="flex items-center">
                    <button
                      disabled={!item.completed}
                      onClick={() => onCurrent(item.step)}
                      type="button"
                      className={clsx(
                        "w-full py-6 text-left text-lg font-medium text-gray-500",
                        {
                          "cursor-auto": !item.completed,
                        }
                      )}
                    >
                      {item.title}
                    </button>
                    {item.completed && (
                      <CheckCircleIcon className="w-6 text-green-500" />
                    )}
                  </div>
                )}
                {item.current && (
                  <div className="flex flex-col py-6">
                    <h2 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h2>
                    <div className="mt-6">
                      <item.form />
                    </div>
                    <button
                      onClick={() => onCurrent(item.step + 1)}
                      type="button"
                      className="mt-6 w-full rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
                    >
                      {item.buttonText}
                    </button>
                  </div>
                )}
              </div>
            ))}

            {/* <form className="mt-6">
              <h2 className="text-lg font-medium text-gray-900">
                Contact information
              </h2>

              <div className="mt-6">
                <ContactForm />
              </div>

              <AddressForm />

              <div className="mt-6 flex space-x-2">
                <div className="flex h-5 items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                </div>
                <label htmlFor="terms" className="text-sm text-gray-500">
                  I have read the terms and conditions and agree to the sale of
                  my personal information to the highest bidder.
                </label>
              </div>

              <button
                type="submit"
                disabled
                className="mt-6 w-full rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
              >
                Continue
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  )
}
