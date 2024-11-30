import Player from "../Player"
import "./Category.css"
import hexToRgba from 'hex-to-rgba';

const Category = ({ players, color, name, onDelete, onUpdate }) => {

    const metricKey = {
        "Artilheiros": "goals",
        "Assistentes": "assists",
        "MVPs": "mvps",
        "Cartões amarelos": "yellow_cards",
        "Cartões vermelhos": "red_cards",
    }[name]

    const metricLabel = {
        "goals": "gols",
        "assists": "assistências",
        "mvps": "pontos",
        "yellow_cards": "amarelos",
        "red_cards": "vermelhos",
    }[metricKey]

    const sortedPlayers = players
    .slice()
    .sort((a, b) => b[metricKey] - a[metricKey])

    return (
        players.length > 0 && <section className="category" style={{ backgroundColor: hexToRgba(color, 0.4) }}>
            <h3 style={{borderColor: color}} >{name}</h3>
            <div className="players">
                {sortedPlayers.map(p => {
                    return <Player 
                        key={p.id}
                        playerInfo={p}
                        metricInfo={[p[metricKey], metricLabel]}
                        headerColor={color} 
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                    />
                })}
            </div>
        </section>
    )
}

export default Category