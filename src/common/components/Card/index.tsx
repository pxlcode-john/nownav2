import clsx from "clsx"
import React from "react"

export type CardProps = {
  children: React.ReactNode
  title?: string
  shadow?: boolean
  panel?: boolean
}

export const Card: React.FC<CardProps> = ({ children, title, shadow, panel }): React.ReactElement => {
  return (
    <div
      className={clsx("bg-white", {
        "shadow-md": !panel && shadow,
        "p-4 border-gray-200 border rounded-md": !panel,
      })}
    >
      {title && <h2 className="text-base font-semibold text-gray-500 leading-10">{title}</h2>}
      <div className="space-y-3">{children}</div>
    </div>
  )
}

export default Card
