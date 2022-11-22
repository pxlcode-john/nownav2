import clsx from "clsx"
import React, { forwardRef } from "react"

export type ResourceItemProps = {
  id: string
  avatar?: React.ReactNode
  primaryText: string
  secondarySlot?: React.ReactNode
  actionSlot?: React.ReactNode
  onClick?: (id: string) => void
  as?: any
  href?: string
  isActive?: boolean
}

export const ResourceItem = forwardRef<HTMLDivElement, ResourceItemProps>(
  (
    { id, avatar, primaryText, secondarySlot, actionSlot, onClick, as: As, href, isActive },
    ref
  ): React.ReactElement => {
    const markup = (
      <div
        ref={ref}
        className={clsx("p-3 cursor-pointer hover:bg-gray-100", { "bg-gray-100": isActive })}
        onClick={() => onClick && onClick(id)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {avatar}
            <div className="flex flex-col">
              <span className="font-semibold">{primaryText}</span>
              {secondarySlot}
            </div>
          </div>
          {actionSlot}
        </div>
      </div>
    )

    if (As) return <As href={href}>{markup}</As>
    return markup
  }
)

ResourceItem.displayName = "ResourceItem"

export default ResourceItem
