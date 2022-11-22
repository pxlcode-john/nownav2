import { ExclamationCircleIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import Label from "common/components/Label"
import React from "react"

export type TextAreaFieldProps = {
  label: string
  error?: string
} & Partial<
  Pick<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "id" | "name" | "defaultValue" | "rows" | "placeholder" | "disabled" | "onChange" | "onBlur"
  >
>

export const TextareaField = React.forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ id, label, error, rows = 5, ...restProps }, ref) => {
    const isError = Boolean(error)
    return (
      <div>
        <Label htmlFor={id} text={label} bold />
        <div className="relative mt-1 rounded-md shadow-sm">
          <textarea
            id={id}
            ref={ref}
            rows={rows}
            {...restProps}
            className={clsx(
              "block w-full shadow-sm appearance-none rounded-md border px-3 py-2 focus:outline-none sm:text-sm",
              {
                "border-gray-300 placeholder-gray-400 focus:border-primary-500 focus:ring-primary-500": !error,
                "border-danger-300 placeholder-danger-400 focus:border-danger-500 focus:ring-danger-500": error,
              }
            )}
          />
          {isError && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-start pr-3 pt-2">
              <ExclamationCircleIcon className="h-5 w-5 text-danger-500" aria-hidden="true" />
            </div>
          )}
        </div>
      </div>
    )
  }
)

TextareaField.displayName = "TextAreaField"

export default TextareaField
