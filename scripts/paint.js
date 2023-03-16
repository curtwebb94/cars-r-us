import { getPaintColors, setPaint } from "./database.js";

export const Paint = () => {
    let paints = getPaintColors()
    let html = "<h2>Paint:</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select a paint option</option>'

    for (const paint of paints) {
        html += `<option value="${paint.id}">${paint.color}</option>`
    }

    html += "</select>"
    return html
    

}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setPaint(parseInt(event.target.value))        }
    }
)