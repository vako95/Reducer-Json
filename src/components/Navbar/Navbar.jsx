import { useSelector } from 'react-redux'
import { useContext } from 'react'
import './Navbar.css'
import LogoIMG from "./assets/img/logoM.png"
import { LanguageContext } from '../../context/LanguageContext'

const Navbar = () => {
    const { movies } = useSelector((state) => state.content)
    const myLiker = useSelector((state) => state.content.myLikes)
    const muDisLiker = useSelector((state) => state.content.myDislikes)
    const favorites = useSelector((state) => state.content.favorites)
    const { getTranslate, currentLanguage, changeLanguage, Languages } = useContext(LanguageContext)

    return (
        <div className="nav">
            <div className="nav_logo">
                <img className='nav_img' src={LogoIMG} alt="" />
            </div>
            <div className="nav_menu">
                <ul className='nav_menu_ul'>
                    <div className="language-switcher">

                        {Languages.map((lang) => (
                            <button onClick={() => changeLanguage(lang.code)}
                                disabled={currentLanguage === lang.code} >
                                {lang.name}
                            </button>
                        ))}


                    </div>
                    <li>{getTranslate("likeMovie")} <span>{myLiker}</span></li>
                    <li>{getTranslate("dislikeMovie")} <span>{muDisLiker}</span></li>
                    <li>{getTranslate("totalMovies")} <span>{movies.length}</span></li>
                    <li>{getTranslate("favoritesMV")} <span>{favorites.length}</span></li>
                </ul>
                <div className="menu_basket">
                    <div className="menu_dropdown">
                        {favorites.length > 0 ? (
                            <div className="dropdown__list">
                                {Array.isArray(favorites) && favorites.length > 0 ? (
                                    <ul>
                                        {favorites.map((fav) => (
                                            <li className='drop__li'>
                                                <div className='dropdown_img'>
                                                    <img className='imger' src={fav.backdrop_path} alt={fav.title} />
                                                </div>
                                                <span>{fav.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <h1>{getTranslate("navbar.empty")}</h1>
                                )}
                            </div>
                        ) : (
                            <span>{getTranslate("navbar.empty")}</span>
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
