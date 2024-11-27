import { useState } from "react"
import Button from "../Button"
import Dropdown from "../Dropdown"
import TextField from "../TextField"
import NumberField from "../NumberField"
import "./Forms.css"
import { v4 as uuidv4 } from 'uuid';

const Forms = ({ positions, onPlayerRegister }) => {

    const [position, setPosition] = useState(positions[0].value)
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [goals, setGoals] = useState(0)
    const [assists, setAssists] = useState(0)
    const [mvps, setMvps] = useState(0)
    const [yellowCards, setYellowCards] = useState(0)
    const [redCards, setRedCards] = useState(0)

    const onSave = (event) => {
        event.preventDefault()
        onPlayerRegister({
            id: uuidv4(),
            position,
            name,
            image,
            goals,
            assists,
            mvps,
            yellow_cards: yellowCards,
            red_cards: redCards
        })
        setPosition(positions[0])
        setName("")
        setImage("")
        setGoals(0)
    }

    return (
        <section className="forms">
            <form onSubmit={onSave}>
                <h2>Cadastrar Jogador</h2>
                <Dropdown
                    required={true}
                    label="Posição"
                    itens={positions}
                    selectValue={position.value}
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
                    inputValue={image}
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
                <div className="form-button">
                    <Button>
                        Cadastrar
                    </Button>
                </div>
            </form>
        </section>
    )
}

export default Forms