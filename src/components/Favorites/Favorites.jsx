import React from 'react'
import "./Favorites.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../redux/favsReducer';

const Favorites = () => {
    const favorites = useSelector((state) => state.favs.favorites);
    const dispatch = useDispatch();

    return (
        <div className='favs'>
            <h1>Your favorite products</h1>
            {favorites?.map((item) => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 25)}</p>
                    <div className="price">
                        ${item.price}
                    </div>
                </div>
                <DeleteOutlinedIcon 
                    className='delete'
                    onClick={() => dispatch(removeItem(item.id))} />
            </div>
            ))}
        </div>
    )
}

export default Favorites