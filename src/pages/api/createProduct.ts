import slugify from "slugify"
import { getXataClient } from "xata"
import { NextApiRequest, NextApiResponse } from "next"
import { RESPONSE_CODE, responseMessage, iCreateProductRequestDto, iCreateProductResponseDto } from "libs/api"

const xata = getXataClient()
export default async function handler(req: NextApiRequest, res: NextApiResponse<iCreateProductResponseDto>) {
  const body = req.body as iCreateProductRequestDto
  try {
    const slug = slugify(body.title).toLowerCase()
    const exist = await xata.db.products.read(slug)
    if (exist?.id !== slug) {
      const product = await xata.db.products.create({
        title: body.title,
        html: body.html,
        slug,
      })
      res.status(201).json({
        data: {
          id: product.id,
          title: product.title,
          html: product.html,
        },
      })
    }
    res.status(401).json({
      data: null,
      code: RESPONSE_CODE.RECORD_EXIST,
      message: responseMessage[RESPONSE_CODE.RECORD_EXIST],
    })
  } catch (err) {
    res.status(404).json({
      data: null,
      code: RESPONSE_CODE.SEVER_ERROR,
      message: responseMessage[RESPONSE_CODE.SEVER_ERROR],
    })
  }
}
