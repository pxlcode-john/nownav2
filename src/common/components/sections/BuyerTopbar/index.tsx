"use client"
import React from "react"
import Image from "next/image"
import logo from "assets/nowna.svg"
import Link from "next/link"

export type BuyerTopbarProps = {}

export const BuyerTopbar: React.FC<
  BuyerTopbarProps
> = (): React.ReactElement => {
  return (
    <div className="bg-white shadow-md border">
      <div className="mx-auto max-w-2xl py-4 lg:max-w-7xl lg:px-8">
        <Link href="/Nephrisol-Vanilla-Low-Protein-Milk">
          <Image
            src={logo}
            alt="logo"
            width={0}
            height={0}
            className="mx-6 sm:mx-0 w-36"
          />
        </Link>
      </div>
    </div>
  )
}

export default BuyerTopbar
