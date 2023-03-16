import { getWheels, setWheel} from "./database.js"


export const Wheels = () => {
    let wheels = getWheels()
    let html = "<h2>Wheels:</h2>"

    html += '<select id="wheel">'
    html += '<option value="0">Select a tire option</option>'

    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.type}</option>`
    }

    html += "</select>"
    return html
    

}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheel(parseInt(event.target.value))        }
    }
)