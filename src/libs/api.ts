import axios, { AxiosResponse } from "axios"

export enum RESPONSE_CODE {
  RECORD_EXIST = "RECORD_EXIST",
  SEVER_ERROR = "SEVER_ERROR",
}

export const responseMessage = {
  [RESPONSE_CODE.RECORD_EXIST]: "Record Exist",
  [RESPONSE_CODE.SEVER_ERROR]: "Unable to process request at the moment.",
}

export interface iResponseDto {
  code?: RESPONSE_CODE
  message?: string
}

export interface iProduct {
  id: string
  title: string
  html: string
}

export interface iProductVariant {
  id: string
  name: string
  price: number
  image: string
}

export interface iProductItem {
  id: string
  title: string
  slug: string
  variants: iProductVariant[]
}

export interface iCreateProductRequestDto extends Pick<iProduct, "title" | "html"> {}

export interface iCreateProductResponseDto extends iResponseDto {
  data: iProduct | null
}

export interface iGetProductsResponseDto extends iResponseDto {
  data: {
    records: iProductItem[] | null
    page: {
      cursor: string
      more: boolean
    }
  }
}

export interface iGetProductsQueryDto {
  size: number
  after?: string
  before?: string
  offset?: number
  start?: string
  end?: string
}

export const createProduct = async (body: iCreateProductRequestDto) => {
  try {
    const response = await axios.post<{}, AxiosResponse<iCreateProductResponseDto>>("/api/createProduct", body)
    return response.data.data
  } catch (err) {
    return null
  }
}

export const getProducts = async (params?: iGetProductsQueryDto) => {
  try {
    const response = await axios.get<{}, AxiosResponse<iGetProductsResponseDto>>("/api/getProducts", { params })
    return response.data
  } catch (err) {
    console.log(err)
  }
}

export interface iPaginateQueryDto {
  size?: number
  after?: string
  before?: string
  offset?: number
  start?: string
  end?: string
}

export const paginate = async (url: string, params?: iPaginateQueryDto) => {
  try {
    const response = await axios.get<{}, AxiosResponse>(url, { params })
    return response.data
  } catch (err) {
    console.log(err)
  }
}
