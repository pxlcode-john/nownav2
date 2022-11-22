import clsx from "clsx"
import React from "react"

export type LabelProps = {
  text: string | React.ReactNode
  bold?: boolean
} & Pick<React.LabelHTMLAttributes<HTMLLabelElement>, "htmlFor">

export const Label: React.FC<LabelProps> = ({ text, bold, ...restProps }): React.ReactElement => {
  const isText = typeof text === "string"
  return (
    <label
      {...restProps}
      className={clsx("block text-sm text-gray-700", {
        "font-medium": isText && bold,
        "font-normal": isText && !bold,
      })}
    >
      {text}
    </label>
  )
}

export default Label
