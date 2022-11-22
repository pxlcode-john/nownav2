import TextField from "common/components/formInput/TextField"
import React from "react"

export type ContactFormProps = {}
export const ContactForm: React.FC<
  ContactFormProps
> = (): React.ReactElement => {
  return (
    <div className="space-y-4">
      <TextField label="Email" type="email" />
      <TextField label="Mobile" />
    </div>
  )
}

export default ContactForm
