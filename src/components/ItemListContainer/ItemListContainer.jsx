import ItemCount from '../ItemCount/ItemCount.jsx'
import { Fragment } from 'react/cjs/react.production.min'

const ItemListContainer = (props) => {
    return(
        <Fragment>
        <h1>{props.greeting}</h1>
        <ItemCount />
        </Fragment>
    )
}

export default ItemListContainer