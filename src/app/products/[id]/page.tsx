import { XataClient } from "xata"

const xata = new XataClient()

async function getProduct(id: string) {
  const record = await xata.db.products.read(id)
  return {
    id: record?.id,
    title: record?.title,
    html: record?.html,
  }
}

export default async function ProductViewPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)
  return <div>Product View Page {JSON.stringify(product)}</div>
}
