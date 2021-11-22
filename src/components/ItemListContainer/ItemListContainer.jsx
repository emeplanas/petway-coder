import ItemCount from '../ItemCount/ItemCount.jsx'
import { Fragment } from 'react/cjs/react.production.min'
import ItemList from '../ItemList/ItemList.jsx'

const ItemListContainer = (props) => {
    return(
        <Fragment>
        <h1>{props.greeting}</h1>
        <ItemCount />
        <ItemList />
        </Fragment>
    )
}

export default ItemListContainer