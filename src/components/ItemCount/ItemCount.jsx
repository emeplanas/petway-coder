import { Fragment, useState } from "react";

function ItemCount() {

const [number, setNumber] = useState(0)

const incrementar = () => {
    setNumber(number + 1)
}

const disminuir = () => {
    if (number > 0){
        setNumber(number - 1)
    }
}

return(
    <Fragment>
        <h1>{`tiene ${number} en el carrito`}</h1>
        <button onClick={incrementar}> + </button>
        <button onClick={disminuir}> - </button>
    </Fragment>
)

}
export default ItemCount