import "./Player.css"

const Player = ({ name, image, quantity, headerColor, onDelete }) => {
    return (
        <div className="player">
            <div className="delete" onClick={onDelete}>deletar</div>
            <div className="playerHeader" style={{ backgroundColor: headerColor }}>
                <img src={image} alt="foto do jogador" />
            </div>

            <div className="playerFooter">
                <h4>{name}</h4>
                <h5>{quantity}</h5>
            </div>
        </div>
    )
}

export default Player;