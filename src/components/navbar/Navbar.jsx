import './Navbar.css'
import logo from './logo.png'
import Cartwidget from '../CartWidget/CartWidget.jsx'

const Navbar = () => {
    return(
        <header>
            <a href="#home"> <img src={logo} alt='' class="logo" /></a>
                <div className="navbar">
                    <a href="#home">Home</a>
                    <a href="#products">Products</a>
                    <a href="#about">About us</a>
                    <a href="#contact">Contact</a>
                </div>
            <Cartwidget />
        </header>
    )
}

export default Navbar