import slugify from "slugify"
import { getXataClient, ProductsRecord } from "xata"
import { NextApiRequest, NextApiResponse } from "next"
import { RESPONSE_CODE, iGetProductsQueryDto, iGetProductsResponseDto, iPaginateQueryDto } from "libs/api"
import { DEFAULT_PAGE_SIZE } from "const"
import { SelectedPick } from "@xata.io/client"

const xata = getXataClient()

const mapProduct = async (item: SelectedPick<ProductsRecord, ("id" | "title" | "slug")[]>) => {
  const results = await xata.db.variants
    .filter({ "product.id": item.id })
    .select(["name", "price", "avatar.url"])
    .getMany()
  const variants = results.map((variant) => ({
    id: variant.id,
    price: variant.price,
    name: variant.name,
    image: variant.avatar?.url || "",
  }))
  return {
    id: item.id,
    title: item.title,
    slug: item.slug || "",
    variants,
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<iGetProductsResponseDto>) {
  const { size = DEFAULT_PAGE_SIZE, offset, ...rest } = req.query as unknown as iPaginateQueryDto
  try {
    const results = await xata.db.products.select(["id", "title", "slug"]).getPaginated({
      pagination: {
        size: size ? parseInt(size.toString(), 10) : undefined,
        offset: offset ? parseInt(offset.toString(), 10) : undefined,
        ...rest,
      },
    })

    const records = await Promise.all(results.records.map(mapProduct))

    res.status(200).json({
      data: {
        records,
        page: {
          cursor: results.meta.page.cursor,
          more: results.meta.page.more,
        },
      },
    })
  } catch (err) {
    console.log(err)
  }
}
