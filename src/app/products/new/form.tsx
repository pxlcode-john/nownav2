"use client"
import { forwardRef } from "react"
import { useForm } from "react-hook-form"
import TextField from "common/components/formInput/TextField"
import TextareaField from "common/components/formInput/TextareaField"

import { createProduct, iProduct } from "libs/api"

export interface iCreateProduct {
  title: string
  html: string
}

export type CreateProductFormProps = {
  onSuccess: (response: iProduct | null) => void
  onError: (error: any) => void
}

export const CreateProductForm = forwardRef<HTMLButtonElement, CreateProductFormProps>(
  ({ onSuccess, onError }, ref) => {
    const { handleSubmit, register } = useForm<iCreateProduct>()

    const onSubmit = async ({ title, html }: iCreateProduct) => {
      try {
        const product = await createProduct({
          title,
          html,
        })
        onSuccess(product)
      } catch (err) {
        onError(err)
      }
    }
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <TextField label="Title" {...register("title")} />
        <TextareaField label="HTML Body" {...register("html")} />
        <button ref={ref} type="submit" className="hidden" />
      </form>
    )
  }
)

CreateProductForm.displayName = "CreateProductForm"

export default CreateProductForm
