"use client"
import { useState } from "react"
import Image from "next/image"
import { Disclosure, RadioGroup, Tab } from "@headlessui/react"
import { StarIcon } from "@heroicons/react/20/solid"
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline"
import Select from "common/components/Select"
import logo from "assets/nowna.svg"
import BuyerTopbar from "common/components/sections/BuyerTopbar"

export type ImageGalleryProps = {
  images: {
    id: number
    name: string
    src: any
    alt: string
  }[]
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
}): React.ReactElement => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      {/* Image selector */}
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <Tab
              key={image.id}
              className="border-none ring-transparent relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
            >
              {({ selected }) => (
                <>
                  <span className="sr-only"> {image.name} </span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <Image
                      fill
                      src={image.src}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </span>
                  <span
                    className={classNames(
                      selected ? "ring-primary-500" : "ring-transparent",
                      "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <Image
              fill
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover object-center sm:rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default ImageGallery
