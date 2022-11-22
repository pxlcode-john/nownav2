import clsx from "clsx"
import React from "react"

export type InputProps = {
  size?: "small" | "medium"
  bare?: boolean
  error?: boolean
} & Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  "id" | "name" | "defaultValue" | "placeholder" | "disabled" | "onChange" | "onBlur" | "type" | "onFocus"
>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, size = "medium", bare, ...restProps }, ref) => {
    return (
      <input
        ref={ref}
        {...restProps}
        className={clsx("appearance-none border block rounded-md w-full shadow-sm focus:outline-none", {
          "px-2 py-1.5 text-xs": size === "small",
          "px-3 py-2 sm:text-sm": size === "medium",
          "placeholder-gray-400 border-gray-300 focus:border-primary-500 focus:ring-primary-500": !error,
          "placeholder-danger-400 border-danger-300 focus:border-danger-500 focus:ring-danger-500": error,
        })}
      />
    )
  }
)

Input.displayName = "Input"

export default Input
