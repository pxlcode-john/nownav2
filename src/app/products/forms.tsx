"use client"
import React, { forwardRef } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import TextField from "common/components/formInput/TextField"
import TextareaField from "common/components/formInput/TextareaField"

import { createProduct, iProduct } from "libs/api"
import Card from "common/components/Card"
import CheckboxField from "common/components/formInput/CheckboxField"
import ProductVariant from "common/components/ProductVariant"
import Button from "common/components/Button"
import { PlusIcon } from "@heroicons/react/24/outline"
import { groupBy, keys, reduce, sortBy } from "lodash"
import { generateVariants, generateVariantTitle } from "utils/product"
import Input from "common/components/Input"

export interface iCreateProduct {
  title: string
  html: string
  price: number
  variants: { variant: string; value: string }[]
}

const people = [
  { id: 1, name: "Annette Black" },
  { id: 2, name: "Cody Fisher" },
  { id: 3, name: "Courtney Henry" },
  { id: 4, name: "Kathryn Murphy" },
  { id: 5, name: "Theresa Webb" },
]

const schema = yup.object({
  title: yup.string().required("Title is required"),
  html: yup.string().required("Product description is required"),
  variants: yup
    .array(
      yup
        .object({
          variant: yup.string().required(),
          value: yup.string().required("Variant name is required"),
        })
        .required()
    )
    .min(1, "Atleast 1 variant is required"),
})

export type CreateProductFormProps = {
  onSuccess: (response: iProduct | null) => void
  onError: (error: any) => void
}

export const CreateProductForm = forwardRef<HTMLButtonElement, CreateProductFormProps>(
  ({ onSuccess, onError }, ref) => {
    const { handleSubmit, register, control, setValue, getFieldState, watch } = useForm<iCreateProduct>({
      mode: "onBlur",
      resolver: yupResolver(schema),
    })
    const { fields, append, remove } = useFieldArray({
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "variants", // unique name for your Field Array
    })

    const states = {
      title: getFieldState("title"),
      html: getFieldState("html"),
      variants: getFieldState("variants"),
    }

    const variants = generateVariants(groupBy(watch("variants"), "variant"))

    const onSubmit = async (value: iCreateProduct) => {
      console.log(value)
      // try {
      //   const product = await createProduct({
      //     title,
      //     html,
      //   })
      //   onSuccess(product)
      // } catch (err) {
      //   onError(err)
      // }
    }

    const addEmptyVariant = () => {
      append({
        variant: "size",
        value: "",
      })
    }

    const clearVariant = () => setValue("variants", [])

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <Card panel>
          <TextField
            error={states.title.error?.message}
            placeholder="Product title"
            label="Title"
            {...register("title")}
          />
          <TextareaField
            error={states.html.error?.message}
            label="HTML Body"
            placeholder="Product description"
            {...register("html")}
          />
        </Card>
        <Card>
          <div className="flex flex-col space-y-2">
            <CheckboxField
              checked={fields.length > 0}
              label="Variant"
              id="variant"
              onChange={(e) => {
                if (e.target.checked) {
                  addEmptyVariant()
                } else {
                  clearVariant()
                }
              }}
            />

            {fields.map((field, index) => (
              <ProductVariant
                key={field.id}
                index={index}
                onRemove={remove}
                selectProps={{ ...register(`variants.${index}.variant`) }}
                inputProps={{ ...register(`variants.${index}.value`) }}
              />
            ))}
            {fields.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                <Button type="button" icon={PlusIcon} onClick={addEmptyVariant} text="Add Variant" size="small" />
              </div>
            )}
          </div>
        </Card>
        <Card title="Pricing" panel={fields.length > 0}>
          {fields.length === 0 && <TextField placeholder="0.00" type="number" label="" {...register("price")} />}
          {fields.length > 0 &&
            variants.map((variant, index) => (
              <div key={`index-${index}`} className="flex space-x-2 items-start">
                <div className="w-8 p-8 shrink border-dashed border-spacing-3 border-2"></div>
                <div className="space-y-1 w-60">
                  <Input placeholder="SKU" size="small" />
                  <div className="grid grid-cols-3 gap-x-1">
                    <div className="col-span-2">
                      <Input placeholder="₱0.00" type="number" size="small" />
                    </div>
                    <Input placeholder="Quantity" type="number" size="small" />
                  </div>
                </div>
                <div className="col-span-2 flex items-start">
                  <span className="text-sm text-gray-500">{generateVariantTitle(variant)}</span>
                </div>
              </div>
            ))}
        </Card>
        <Card title="Locations">
          <div className="grid grid-cols-4 gap-4">
            {people.map((person, personIdx) => (
              <CheckboxField id={`id-${personIdx}`} label={person.name} key={`key${personIdx}`} />
            ))}
          </div>
        </Card>
        <button ref={ref} type="submit" className="hidden" />
      </form>
    )
  }
)

CreateProductForm.displayName = "CreateProductForm"

export default CreateProductForm
