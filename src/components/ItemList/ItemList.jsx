import {Products} from '../Item/Item.jsx'
import {Fragment} from 'react/cjs/react.production.min'
import ItemCount from '../ItemCount/ItemCount.jsx'
import './ItemList.css'
import mordisco from './mordisco.png'
import petwayc from './petwayc.png'
import petwaym from './petwaym.png'
import rascador from './rascador.png'

function ItemList(){
    return(
    <Fragment>
        {
            Products.map((product,index) => {
                return(
                    <div className="Container" key={index}>
                        <h1 className="Product">{product.name}</h1>
                        <img src={product.img} alt='Product image' />
                        <h1 className="Price">{product.price}</h1>
                        <ItemCount productstock={product.stock} />
                    </div>
                )
            })
        }
    </Fragment>
    )
}

export default ItemList