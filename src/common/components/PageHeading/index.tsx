import Link from "next/link"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"

export default function PageHeading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 mt-8">
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <a
            href="#"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ChevronLeftIcon
              className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Back
          </a>
        </nav>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <Link
                  className="text-sm font-medium text-gray-500 hover:text-gray-700"
                  href="/Nephrisol-Vanilla-Low-Protein-Milk"
                >
                  Nephrisol Vanilla Low Protein Milk 185 grams
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href="#"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Checkout
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-800 sm:truncate sm:text-3xl sm:tracking-tight">
            Checkout Page
          </h2>
        </div>
      </div>
    </div>
  )
}
