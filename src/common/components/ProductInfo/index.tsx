"use client"
import { v4 as uuidv4 } from "uuid"
import { useRouter } from "next/navigation"
import { Disclosure } from "@headlessui/react"
import { StarIcon } from "@heroicons/react/20/solid"
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline"
import Select from "common/components/Select"

export type ProductInfoProps = {
  id: number
  name: string
  description: string
  rating: number
  price: string
  details: {
    name: string
    items: string[]
  }[]
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

async function buy(id: number, navigate: (href: string) => void) {
  const checkoutId = uuidv4()
  navigate(`/checkout/${checkoutId}`)
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  details,
  name,
  description,
  price,
  rating,
  id,
}): React.ReactElement => {
  const router = useRouter()
  const handleBuy = async () => {
    await buy(id, router.push)
  }
  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        {name}
      </h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight text-gray-900">{price}</p>
      </div>

      {/* Reviews */}
      <div className="mt-3">
        <h3 className="sr-only">Reviews</h3>
        <div className="flex items-center">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rate) => (
              <StarIcon
                key={rate}
                className={classNames(
                  rating > rate ? "text-secondary-500" : "text-gray-300",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="sr-only">{rating} out of 5 stars</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>

        <div
          className="space-y-6 text-base text-gray-700"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <form className="mt-6">
        {/* Colors */}
        <div className="max-w-xs">
          <h3 className="text-sm text-gray-600">Variants</h3>

          <Select options={[]} />
        </div>

        <div className="sm:flex-col1 mt-10 flex">
          <button
            type="button"
            onClick={handleBuy}
            className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-primary-600 py-3 px-8 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
          >
            Buy
          </button>
        </div>
      </form>

      <section aria-labelledby="details-heading" className="mt-12">
        <h2 id="details-heading" className="sr-only">
          Additional details
        </h2>

        <div className="divide-y divide-gray-200 border-t">
          {details.map((detail) => (
            <Disclosure as="div" key={detail.name}>
              {({ open }) => (
                <>
                  <h3>
                    <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                      <span
                        className={classNames(
                          open ? "text-primary-600" : "text-gray-900",
                          "text-sm font-medium"
                        )}
                      >
                        {detail.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        {open ? (
                          <MinusIcon
                            className="block h-6 w-6 text-primary-400 group-hover:text-primary-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusIcon
                            className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </h3>
                  <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                    <ul role="list">
                      {detail.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductInfo
