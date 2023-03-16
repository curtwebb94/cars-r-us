

const database = {
    paintColors: [
        {id:1, color:"Silver" , price: 2000},
        {id:2, color:"Midnight Blue" , price: 2000},
        {id:3, color:"Firebrick Red" , price: 2000},
        {id:4, color:"Spring Green", price: 2000}
    ],
    fabricStyles: [
        {id:1, material:"Beige Fabric" , price: 4000},
        {id:2, material:"Charcoal Fabric" , price: 4000},
        {id:3, material:"White Leather" , price: 7000},
        {id:4, material:"Black Leather", price: 7000}
    ],
    technology: [
        {id:1, features:"Basic Package (basic sound system)" , price: 10000},
        {id:2, features:"Navigation Package (includes integrated navigation controls)" , price: 14000},
        {id:3, features:"Visibility Package (includes side and rear cameras)" , price: 14000},
        {id:4, features:"Ultra Package (includes navigation and visibility packages)", price: 26000}
    ],
    wheels: [
        {id:1, type:"17-inch Pair Radial" , price: 2000},
        {id:2, type:"17-inch Pair Radial Black" , price: 2500},
        {id:3, type:"18-inch Pair Spoke Silver" , price: 3000},
        {id:4, type:"18-inch Pair Spoke Black", price: 3500} 
    ],
    customOrders: [
        {
            id: 1,
            paintId: 3,
            fabricId: 2,
            techId: 3,
            wheelId: 3,
            timestamp: 16363829337
        }
    ],
    orderBuilder: {
        
    },
    
}

export const getPaintColors = () => {
    return database.paintColors.map(paintColors => ({...paintColors}))
}

export const getFabricStyles = () => {
    return database.fabricStyles.map(fabricStyles => ({...fabricStyles}))
}

export const getTechnology = () => {
    return database.technology.map(technology => ({...technology}))
}

export const getOrders = () => {
    return database.customOrders.map(customOrders => ({...customOrders}))
}

export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
}

export const getOrderBuilder = () => {
    return database.orderBuilder.map(orderBuilder => ({...orderBuilder}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setFabric = (id) => {
    database.orderBuilder.fabricId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
