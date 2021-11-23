import { Fragment, useState } from "react";
import './itemcount.css'

function ItemCount(props) {

const [number, setNumber] = useState(0)

const onAdd = () => {
    if (number < props.productstock){
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
        <h1 className="Cart">{`tiene`} {number} {`en el carrito`}</h1>
        <button onClick={onAdd}> + </button>
        <button onClick={onTake}> - </button>
    </Fragment>
)

}
export default ItemCount