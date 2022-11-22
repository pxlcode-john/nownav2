import clsx from "clsx"
import React, { forwardRef } from "react"

export type Option = {
  value: string
  label: string
}

export type SelectProps = {
  defaultValue?: string
  options: Option[]
  size?: "small" | "medium"
} & Partial<
  Pick<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    "id" | "name" | "onChange" | "onBlur" | "disabled" | "defaultValue" | "placeholder" | "value"
  >
>

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ options, size = "medium", ...restProps }, ref) => {
  return (
    <select
      ref={ref}
      {...restProps}
      className={clsx(
        "block w-full rounded-md border-gray-300 focus:border-primary-500 focus:outline-none focus:ring-primary-500",
        {
          "text-xs px-2 py-1.5": size === "small",
          "text-base": size === "medium",
        }
      )}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
})

Select.displayName = "Select"

export default Select
