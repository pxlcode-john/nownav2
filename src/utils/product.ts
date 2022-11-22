export const generateVariants = (entries: {
  [key: string]: { variant: string; value: string }[]
}): { [key: string]: string }[] => {
  let attrs = []
  for (const [attr, values] of Object.entries(entries)) attrs.push(values.map((v) => ({ [attr]: v.value })))
  //@ts-ignore
  return attrs.reduce((a, b) => a.flatMap((d) => b.map((e) => ({ ...d, ...e }))), [[]])
}

export const generateVariantTitle = (variant: { [key: string]: string }) => {
  const names = [variant["brand"], variant["material"], variant["color"], variant["size"], variant["weight"]].filter(
    Boolean
  )
  return names.join(" ")
}
