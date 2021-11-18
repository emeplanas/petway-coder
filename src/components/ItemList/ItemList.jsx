import {Products} from '../Item/Item.jsx'
import {Fragment} from 'react/cjs/react.production.min'

function ItemList(){
    return(
    <Fragment>
        {
            Products.map((product,index) => {
                return(
                    <div key={index}>
                        <h1>{product.name}</h1>
                        <p>{product.animal}</p>
                    </div>
                )
            })
        }
    </Fragment>
    )
}

export default ItemList