import { Fragment, useState } from "react";

function ItemCount() {

const [number, setNumber] = useState(0)

const stock = 10 // lo hardcodeo, porque no tengo el stock todavia//

const onAdd = () => {
    if (number < stock){
    setNumber(number + 1)
    }
}

const onTake = () => {
    if (number > 0){
        setNumber(number - 1)
    }
}

return(
    <Fragment>
        <h1>{`tiene ${number} en el carrito`}</h1>
        <button onClick={onAdd}> + </button>
        <button onClick={onTake}> - </button>
    </Fragment>
)

}
export default ItemCount