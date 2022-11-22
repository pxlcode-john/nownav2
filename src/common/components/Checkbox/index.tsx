import React from "react"

export type CheckboxProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  | "id"
  | "name"
  | "onChange"
  | "onBlur"
  | "defaultChecked"
  | "defaultValue"
  | "disabled"
  | "aria-describedby"
  | "checked"
>

export const Checkbox: React.FC<CheckboxProps> = (props): React.ReactElement => {
  return (
    <input
      type="checkbox"
      className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
      {...props}
    />
  )
}

export default Checkbox
