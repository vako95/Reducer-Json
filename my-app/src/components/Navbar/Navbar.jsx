import { useSelector } from 'react-redux'
import './Navbar.css'
import LogoIMG from "./assets/img/logoM.png"

const Navbar = () => {
const {movies} = useSelector((state) => state.content)
    return (
        <div className="nav">
            <div className="nav_logo">
                <img className='nav_img' src={LogoIMG} alt="" />
            </div>
            <div className="nav_menu">
              
                <ul className='nav_menu_ul'>
                    <li>Like Movie<span>10</span></li>
                    <li>Dislike Movie <span>10</span></li>
                    <li>Total Movies <span>10</span></li>
                    <li>Favorites MV<span>10</span></li>
                </ul>
                <div className="menu_basket">
                    <i className="fi fi-sr-basket-shopping-simple"></i>
                    <span className='i_span'>10</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;