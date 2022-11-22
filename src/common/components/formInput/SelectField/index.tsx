import React from "react"
import Select, { Option, SelectProps } from "common/components/Select"
import Label from "common/components/Label"

export type SelectFieldProps = {
  label: string
} & SelectProps

export const SelectField = React.forwardRef<HTMLInputElement, SelectFieldProps>(({ id, label, ...restProps }, ref) => {
  return (
    <div>
      <Label text={label} htmlFor={id} bold />
      <Select {...restProps} />
    </div>
  )
})

SelectField.displayName = "SelectField"

export default SelectField
