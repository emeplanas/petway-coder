import ItemCount from '../ItemCount/ItemCount.jsx'
import { Fragment } from 'react/cjs/react.production.min'
import ItemList from '../ItemList/ItemList.jsx'
import './ItemListContainer.css'
import Petwayiso from './Asset 1.png'

const ItemListContainer = (props) => {
    return(
        <Fragment>
        <h1 className="greeting"><img className="isologo" src={Petwayiso} alt="<3"/> <div> {props.greeting} </div> </h1>
        <ItemCount />
        <ItemList />
        </Fragment>
    )
}

export default ItemListContainer