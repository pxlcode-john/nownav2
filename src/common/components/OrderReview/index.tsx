import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Nephrisol Vanilla Low Protein Milk 185 grams",
    description:
      "Nephrisol is a specialized nutrition formulated to meet requirements for those with renal insufficiency, help delay CKD progression for patients on pre dialysis stage.",
    href: "#",
    quantity: 1,
    price: "₱1,250.00",
    imageSrc: "https://d1h5fi2l2kvtwf.cloudfront.net/products/Nephrisol.jpg",
    imageAlt: "Nephrisol Vanilla Low Protein Milk 185 grams",
  },
]

export default function OrderReview() {
  return (
    <div className="bg-white">
      <div>
        {products.map((product) => (
          <div
            key={product.id}
            className="flex space-x-6 border-b border-gray-200 py-10"
          >
            <Image
              width={0}
              height={0}
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40"
            />
            <div className="flex flex-auto flex-col">
              <div>
                <h4 className="font-medium text-gray-900">
                  <a href={product.href}>{product.name}</a>
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  {product.description}
                </p>
              </div>
              <div className="mt-6 flex flex-1 items-end">
                <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                  <div className="flex">
                    <dt className="font-medium text-gray-900">Quantity</dt>
                    <dd className="ml-2 text-gray-700">{product.quantity}</dd>
                  </div>
                  <div className="flex pl-4 sm:pl-6">
                    <dt className="font-medium text-gray-900">Price</dt>
                    <dd className="ml-2 text-gray-700">{product.price}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        ))}

        <div className="">
          <h3 className="sr-only">Your information</h3>
          <h4 className="sr-only">Addresses</h4>
          <dl className="grid grid-cols-2 gap-x-6 py-10 text-sm">
            <div>
              <dt className="font-medium text-gray-900">Shipping address</dt>
              <dd className="mt-2 text-gray-700">
                <address className="not-italic">
                  <span className="block">Kristin Watson</span>
                  <span className="block">7363 Cynthia Pass</span>
                  <span className="block">Quezon City, Metro Manilla</span>
                </address>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900">Billing address</dt>
              <dd className="mt-2 text-gray-700">
                <address className="not-italic">
                  <span className="block">Kristin Watson</span>
                  <span className="block">7363 Cynthia Pass</span>
                  <span className="block">Quezon City, Metro Manilla</span>
                </address>
              </dd>
            </div>
          </dl>

          <h4 className="sr-only">Payment</h4>
          <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 py-10 text-sm">
            <div>
              <dt className="font-medium text-gray-900">Payment method</dt>
              <dd className="mt-2 text-gray-700">
                <p>Credit Card</p>
                <p>Mastercard</p>
                <p>
                  <span aria-hidden="true">••••</span>
                  <span className="sr-only">Ending in </span>1545
                </p>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900">Shipping method</dt>
              <dd className="mt-2 text-gray-700">
                <p>Grab Express</p>
                <p>Takes up to 3 working days</p>
              </dd>
            </div>
          </dl>

          <h3 className="sr-only">Summary</h3>

          <dl className="space-y-6 border-t border-gray-200 pt-10 text-sm">
            <div className="flex justify-between">
              <dt className="font-medium text-gray-900">Subtotal</dt>
              <dd className="text-gray-700">$36.00</dd>
            </div>
            <div className="flex justify-between">
              <dt className="flex font-medium text-gray-900">
                Discount
                <span className="ml-2 rounded-full bg-gray-200 py-0.5 px-2 text-xs text-gray-600">
                  STUDENT50
                </span>
              </dt>
              <dd className="text-gray-700">-$18.00 (50%)</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium text-gray-900">Shipping</dt>
              <dd className="text-gray-700">$5.00</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium text-gray-900">Total</dt>
              <dd className="text-gray-900">$23.00</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
