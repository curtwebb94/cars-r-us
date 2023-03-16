import { getPaintColors, getFabricStyles, getTechnology, getWheels, getOrders } from "./database.js"


const buildOrderListItem = (order) => {
    const fabrics = getFabricStyles()
    const paints = getPaintColors()
    const techs = getTechnology()
    const wheels = getWheels()
    

const foundFabrics = fabrics.find(
    (fabrics) => {
        return fabrics.id === order.fabricId

    }
)

const foundPaints = paints.find(
    (paints) => {
        return paints.id === order.paintId
        
    }
)

const foundTechs = techs.find(
    (techs) => {
        return techs.id === order.techId
        
    }
)

const foundWheels = wheels.find(
    (wheels) => {
        return wheels.id === order.wheelId
        
    }
)

const totalCost = foundFabrics.price + foundPaints.price + foundTechs.price + foundWheels.price
console.log(totalCost)

// To automatically format the number as currency
const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

return `<li>
Order #${order.id} cost ${costString}
</li>`

}


    export const orderBuilder = () => {
        
        const orders = getOrders()

        let html = "<ul>"

        const listItems = orders.map(buildOrderListItem)

        html += listItems.join("")
        html += "</ul>"

        return html
    }

