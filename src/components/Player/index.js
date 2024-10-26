import "./Player.css"

const Player = ({ name, image, quantity}) => {
    return (
        <div className="player">
            <div className="header">
                <img src={image} alt="foto do jogador" />
            </div>

            <div className="footer">
                <h4>{name}</h4>
                <h5>{quantity}</h5>
            </div>
        </div>
    )
}

export default Player;