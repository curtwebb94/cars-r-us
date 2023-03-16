
import { Technologies } from "./technology.js"
import { Wheels } from "./wheels.js"
import { Paint } from "./paint.js"
import { Fabrics } from "./fabric.js"
import { orderBuilder } from "./orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()


        }

    }
)

export const carsRUS = () => {
    return `
<article class ="Selectors">
<h1>Cars-r-Us: Personal Car Builder</h1>
<h2><u>Options</u></h2>
<br></br><br></br>
<section class = "options">
<div id = "paint">${Paint()}</div>
<div id = "tech">${Technologies()}</div>
<div id = "wheel">${Wheels()}</div>
<div id = "fabric">${Fabrics()}</div>
</section>
<br></br>
<article>
<button id="orderButton">Create Custom Order</button>
</article>
<br></br><br></br>
<div class="customOrdersHolder">
    <h2>Custom Car Orders</h2>
        <section class="customOrders">
        ${orderBuilder()}         
        </section>
     </div>`


}

