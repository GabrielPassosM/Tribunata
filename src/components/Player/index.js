import "./Player.css"
import { FaTrash } from "react-icons/fa";

const Player = ({ playerInfo, catName, headerColor, onDelete }) => {

    const metricInfo = {
        "Artilheiros": [playerInfo.goals, "gols"],
        "Assistentes": [playerInfo.assists, "assistências"],
        "MVPs": [playerInfo.mvps, "pontos"],
        "Cartões amarelos": [playerInfo.yellow_cards, "amarelos"],
        "Cartões vermelhos": [playerInfo.red_cards, "vermelhos"],
    }[catName]

    return (
        <div className="player">
            <FaTrash size={25} className="delete" onClick={() => onDelete(playerInfo.id)} />
            <div className="playerHeader" style={{ backgroundColor: headerColor }}>
                <img src={playerInfo.image_url} alt="foto do jogador" />
            </div>

            <div className="playerFooter">
                <h4>{playerInfo.name}</h4>
                <h5>{metricInfo[0]} {metricInfo[1]}</h5>
            </div>
        </div>
    )
}

export default Player;