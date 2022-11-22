import React from "react"
import Label from "common/components/Label"
import Checkbox, { CheckboxProps } from "common/components/Checkbox"

export type CheckboxFieldProps = {
  label: string
  id?: string
} & CheckboxProps

export const CheckboxField: React.FC<CheckboxFieldProps> = ({ id, label, ...restProps }): React.ReactElement => {
  return (
    <div className="inline-flex items-center space-x-2">
      <Checkbox id={id} {...restProps} />
      <Label htmlFor={id} text={label} />
    </div>
  )
}

export default CheckboxField
