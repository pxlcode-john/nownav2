import { useState } from "react"
import Image from "next/image"
import { Disclosure, RadioGroup, Tab } from "@headlessui/react"
import { StarIcon } from "@heroicons/react/20/solid"
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline"
import Select from "common/components/Select"
import logo from "assets/nowna.svg"
import BuyerTopbar from "common/components/sections/BuyerTopbar"
import ImageGallery from "common/components/ImageGallery"
import ProductInfo from "common/components/ProductInfo"
import products from "tests/mock/products"
import Footer from "common/components/sections/Footer"
import ProductReviews from "common/components/ProductReviews"

export async function getData() {
  return products[1]
}

export default async function ProductViewPage() {
  const product = await getData()

  const handleBuy = () => {}
  return (
    <div>
      <BuyerTopbar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-16">
            <ImageGallery images={product.images} />
            <ProductInfo
              id={product.id}
              name={product.name}
              price={product.price}
              rating={product.rating}
              details={product.details}
              description={product.description}
            />
          </div>
          <div className="max-w-2xl">
            <h2 className="my-6 text-3xl font-bold text-gray-800 mb-16">
              Customer Reviews
            </h2>
            <ProductReviews />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
