import './Content.css'
import { setMovies, setLike, setDislike, setFavorites } from '../../store/ContentReducer/ContentReducer'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import MoovieShow from "../../utils/MovieApi"

const Content = () => {
    const { movies } = useSelector((state) => state.content)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true); // для отображения скелета
    const [page, setPage] = useState(1)
    const listendRef = useRef(null)

    useEffect(() => {
        setLoading(true)
        MoovieShow.FetchMovie(page).then(response => {
            dispatch(setMovies(response))
            setLoading(false)
        });
    }, [dispatch, page]);

    const Skeleton = () => (
        <div className="skeleton">
            <div className="skeleton__wrapper-img"></div>
            <div className="skeleton__title"></div>
        </div>
    );

    useEffect(() => {
        const Inter = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setPage((prev) => prev + 1)
                }
            })
        }, { threshold: 0.1 })

        if (listendRef.current) {
            Inter.observe(listendRef.current)
        }

        return () => {
            if (listendRef.current) {
                Inter.unobserve(listendRef.current)
            }
        }
    }, [])

    return (
      
       <> 
         <div className="content">
            {movies.map((prev,index) => (
                <div key={index} className="content__item">
                    <div className="content__wrapper-img">
                        <div className="content__wrapper-control">
                            <i onClick={() => dispatch(setLike(prev.id))} className="fi fi-rs-social-network"></i>
                            <i onClick={() => dispatch(setDislike(prev.id))} className="fi fi-rs-hand"></i>
                            <i
                                className={`fi fi-tr-wishlist-star ${prev.isFavorite ? 'active' : 'active.i'}`}
                                onClick={() => dispatch(setFavorites(prev.id))}
                            ></i>
                        </div>
                        <img className='content__img' src={prev.backdrop_path} alt={prev.title} />
                    </div>
                    <div className="content__title">
                        <span className='content__span'><b>Favorites:</b>{prev.favorites}</span>
                        <span className='content__span'><b>Likes:</b>{prev.likes}</span>
                        <span className='content__span'><b>Title:</b>{prev.title}</span>
                        <span className='content__span'><b>Description:</b>{prev.description}</span>
                    </div>
                </div>
            ))}
           
            <div ref={listendRef}></div>
        </div>
         <div className="sklitton_grid">
         {loading && Array(4).fill().map((_, index) => <Skeleton key={index} />)}
         </div>
       </>
    )
}

export default Content;
