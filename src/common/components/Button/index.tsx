import clsx from "clsx"
import React from "react"

export type ButtonProps = {
  primary?: boolean
  text: string
  rounded?: boolean
  size?: "small" | "medium"
  icon?: any
} & Partial<Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick">>

export const Button: React.FC<ButtonProps> = ({
  primary,
  text,
  rounded,
  size = "medium",
  icon,
  ...restProps
}): React.ReactElement => {
  const Icon = icon ? icon : undefined
  return (
    <button
      {...restProps}
      className={clsx(
        "inline-flex items-center space-x-1 justify-center border font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          "focus:ring-gray-300 outline-none border-gray-300 hover:bg-gray-50 bg-white text-gray-700": !primary,
          "focus:ring-primary-500 border-transparent hover:bg-primary-700 bg-primary-600 text-white": primary,
          "rounded-md": !rounded,
          "rounded-full": rounded,
          "py-1 px-3 text-xs": size === "small",
          "py-2 px-4 text-sm": size === "medium",
        }
      )}
    >
      {icon && (
        <Icon
          className={clsx({
            "w-5": size === "small",
            "w-7": size === "medium",
          })}
        />
      )}
      <span>{text}</span>
    </button>
  )
}

export default Button
