import {Products} from '../Item/Item.jsx'
import {Fragment} from 'react/cjs/react.production.min'
import ItemCount from '../ItemCount/ItemCount.jsx'
import './ItemList.css'

function ItemList(){
    return(
    <Fragment>
        {
            Products.map((product,index) => {
                return(
                    <div key={index}>
                        <h1 className="Product">{product.name}</h1>
                        <img src={product.img} alt='' />
                        <p className="Price">{product.price}</p>
                        <ItemCount productstock={product.stock} />
                    </div>
                )
            })
        }
    </Fragment>
    )
}

export default ItemList