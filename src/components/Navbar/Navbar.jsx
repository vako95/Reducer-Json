import { useSelector } from 'react-redux'
import './Navbar.css'
import LogoIMG from "./assets/img/logoM.png"


const Navbar = () => {
    const { movies } = useSelector((state) => state.content)
    const myLiker = useSelector((state) => state.content.myLikes)
    const muDisLiker = useSelector((state) => state.content.myDislikes)
    const favorites = useSelector((state) => state.content.favorites)

    return (
        <div className="nav">
            <div className="nav_logo">
                <img className='nav_img' src={LogoIMG} alt="" />
            </div>
            <div className="nav_menu">
                <ul className='nav_menu_ul'>
                    <li>Like Movie<span>{myLiker}</span></li>
                    <li>Dislike Movie <span>{muDisLiker}</span></li>
                    <li>Total Movies <span>{movies.length}</span></li>
                    <li>Favorites MV<span>{favorites.length}</span></li>
                </ul>
                <div className="menu_basket">
                    <div className="menu_dropdown">
                        {favorites.length > 0 ?(
                            <div className="dropdown__list">
                               {Array.isArray(favorites) && favorites.length > 0 ? (
                                     <ul> 
                                        {favorites.map((fav) => (
                                        
                                            <li className='drop__li'>
                                          
                                                    <div className='dropdown_img'>
                                                    <img className='imger' src={fav.backdrop_path} alt={fav.title} />
                                                    </div>
                                                
                                                <span>:{fav.title}</span>
                                            
                                           
                                            </li>
                                        ))}
                                        
                                     </ul>
                               ):(
                                <h1>empty</h1>
                               )}
                            </div>
                        ):(
                            <span>Empty</span>
                        )}
                    </div>
                    <i className="fi fi-sr-basket-shopping-simple"></i>
                    <span className={favorites.length > 0 ? "span_show" : "span_hide"}>{favorites.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;