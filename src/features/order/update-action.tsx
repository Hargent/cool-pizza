import { ActionFunction } from "react-router-dom";
import { updateOrder } from "../../services/api-restaurant";

const action:ActionFunction = async({ params})=> {
    const data = { priority: true }
    if (params.orderID) {
        
        await updateOrder(params.orderID ,data)
    }
    return null
}
export {action}
