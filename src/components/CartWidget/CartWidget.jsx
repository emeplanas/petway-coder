import './CartWidget.css'
import icon from './shopping-cart.png'

const Cartwidget = () => {
    return(
            <a href="#carrito"> <img src={icon} alt='' class='cartwheel' /></a>
    )
}

export default Cartwidget