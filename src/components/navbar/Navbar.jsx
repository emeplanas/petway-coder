import './Navbar.css'
import logo from './logo.png'

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
        </header>
    )
}

export default Navbar