import { getFabricStyles, setFabric } from "./database.js"


export const Fabrics = () => {
    let fabrics = getFabricStyles()
    let html = "<h2>Fabrics:</h2>"

    html += '<select id="fabric">'
    html += '<option value="0">Select a fabric option</option>'

    for (const fabric of fabrics) {
        html += `<option value="${fabric.id}">${fabric.material}</option>`
    }

    html += "</select>"
    return html
    

}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "fabric") {
            setFabric(parseInt(event.target.value))        }
    }
)