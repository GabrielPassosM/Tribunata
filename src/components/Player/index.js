import "./Player.css"
import { FaTrash } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Player = ({ id, favorite, name, image, quantity, headerColor, onDelete, onFavorite }) => {

    const propsFavorite = {
        size: 25,
        onClick: () => onFavorite(id)
    }

    return (
        <div className="player">
            <FaTrash size={25} className="delete" onClick={() => onDelete(id)} />
            <div className="playerHeader" style={{ backgroundColor: headerColor }}>
                <img src={image} alt="foto do jogador" />
            </div>

            <div className="playerFooter">
                <h4>{name}</h4>
                <h5>{quantity}</h5>
                <div className="favorite">
                    {favorite 
                        ? <FaHeart {...propsFavorite} color="red" /> 
                        : <FaRegHeart {...propsFavorite} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Player;