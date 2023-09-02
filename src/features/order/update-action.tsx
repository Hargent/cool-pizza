import { updateOrder } from "../../services/api-restaurant";

export async function action({ params}) {
    const data = { priority: true }
    await updateOrder(params.orderID,data)
    return null
}
