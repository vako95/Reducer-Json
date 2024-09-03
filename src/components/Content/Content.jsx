import './Content.css'
import { setMovies, setLike, setDislike, setFavorites } from '../../store/ContentReducer/ContentReducer'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import MoovieShow from "../../utils/MovieApi"

const Content = () => {
      const { movies } = useSelector((state) => state.content)
      const dispacth = useDispatch()

      useEffect(() => {
            MoovieShow.FetchMovie().then(response => dispacth(setMovies(response)))
      }, [dispacth]);

   

      return (
            <div className="content">
                  {movies.map((prev) => (
                        <div className="content__item">
                              <div className="content__wrapper-img">
                                    <div className="content__wrapper-control">
                                          <i onClick={() => dispacth(setLike(prev.id))} className="fi fi-rs-social-network"></i>
                                          <i onClick={() => dispacth(setDislike(prev.id))} className="fi fi-rs-hand"></i>
                                          <i
                                                className={`fi fi-tr-wishlist-star ${prev.isFavorite ? 'active' : 'active.i'}`}
                                                onClick={() => dispacth(setFavorites(prev.id))}
                                          ></i>
                                    </div>
                                    <img className='content__img' src={prev.backdrop_path} alt={prev.title} />
                              </div>
                              <div className="content__title">
                                    <span className='content__span'><b>favorites:</b>{prev.favorites}</span>
                                    <span className='content__span'><b>Likes:</b>{prev.likes}</span>
                                    <span className='content__span'><b>Title:</b>{prev.title}</span>
                                    <span className='content__span'><b>Description:</b>{prev.description}</span>
                              </div>
                        </div>
                  ))}
            </div>
      )
}

export default Content;