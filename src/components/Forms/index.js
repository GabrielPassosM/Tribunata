import { useState } from "react"
import Button from "../Button"
import Dropdown from "../Dropdown"
import TextField from "../TextField"
import NumberField from "../NumberField"
import { AppPositions } from "../../consts.js"
import "./Forms.css"

const Forms = ({ onFormsSubmit, action, onClose, currentValues = {} }) => {

    const [position, setPosition] = useState(currentValues.position || AppPositions[0].value)
    const [name, setName] = useState(currentValues.name || "")
    const [imageUrl, setImage] = useState(currentValues.image_url || "")
    const [goals, setGoals] = useState(currentValues.goals || 0)
    const [assists, setAssists] = useState(currentValues.assists || 0)
    const [mvps, setMvps] = useState(currentValues.mvps || 0)
    const [yellowCards, setYellowCards] = useState(currentValues.yellow_cards || 0)
    const [redCards, setRedCards] = useState(currentValues.red_cards || 0)

    const onSave = (event) => {
        event.preventDefault()
        onFormsSubmit({
            position,
            name,
            image_url: imageUrl,
            goals,
            assists,
            mvps,
            yellow_cards: yellowCards,
            red_cards: redCards,
            playerId: currentValues.id
        })
        setPosition(AppPositions[0].value)
        setName("")
        setImage("")
        setGoals(0)
        setAssists(0)
        setMvps(0)
        setYellowCards(0)
        setRedCards(0)
    }

    const title = action === "create" ? "Cadastrar Jogador" : "Atualizar Jogador"
    const buttonLabel = action === "create" ? "Cadastrar" : "Atualizar"

    return (
        <section className="forms">
            <form onSubmit={onSave}>
                <h2>{ title }</h2>
                <Dropdown
                    required={true}
                    label="Posição"
                    itens={AppPositions}
                    selectValue={position}
                    setSelectValue={value => setPosition(value)}
                />
                <TextField 
                    required={true}
                    label="Nome"
                    placeholder="Digite o nome"
                    inputValue={name}
                    setInputValue={value => setName(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    inputValue={imageUrl}
                    setInputValue={value => setImage(value)}
                />
                <div className="number-box">
                    <NumberField
                        label="Gols"
                        inputValue={goals}
                        setInputValue={value => setGoals(value)}
                    />
                    <NumberField
                        label="Assistências"
                        inputValue={assists}
                        setInputValue={value => setAssists(value)}
                    />
                    <NumberField
                        label="Pontos MVP"
                        inputValue={mvps}
                        setInputValue={value => setMvps(value)}
                    />
                    <NumberField
                        label="Cartões amarelos"
                        inputValue={yellowCards}
                        setInputValue={value => setYellowCards(value)}
                    />
                    <NumberField
                        label="Cartões vermelhos"
                        inputValue={redCards}
                        setInputValue={value => setRedCards(value)}
                    />
                </div>

                <div className="form-buttons-container">
                    { action === "update" &&
                        <div className="close-form-button" onClick={onClose}>
                            <Button>
                                Cancelar
                            </Button>
                        </div>
                    }

                    <div className="submit-form-button">
                        <Button>
                            { buttonLabel }
                        </Button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Forms