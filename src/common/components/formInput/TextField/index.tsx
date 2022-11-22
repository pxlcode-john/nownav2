import { ExclamationCircleIcon } from "@heroicons/react/24/outline"
import Input from "common/components/Input"
import Label from "common/components/Label"
import React from "react"

export type TextFieldProps = {
  label: string
  error?: string
} & Partial<
  Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    "id" | "name" | "defaultValue" | "type" | "onChange" | "onBlur" | "disabled" | "placeholder"
  >
>

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ id, label, error, type = "text", ...restProps }, ref) => {
    const isError = Boolean(error)
    return (
      <div>
        <Label htmlFor={id} text={label} bold />
        <div className="relative mt-1 rounded-md shadow-sm">
          <Input error={isError} ref={ref} id={id} type={type} {...restProps} />
          {isError && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon className="h-5 w-5 text-danger-500" aria-hidden="true" />
            </div>
          )}
        </div>
      </div>
    )
  }
)

TextField.displayName = "TextField"

export default TextField
