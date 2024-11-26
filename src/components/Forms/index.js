import { useState } from "react"
import Button from "../Button"
import Dropdown from "../Dropdown"
import TextField from "../TextField"
import "./Forms.css"
import { v4 as uuidv4 } from 'uuid';

const Forms = ({ positions, onPlayerRegister }) => {

    const [position, setPosition] = useState(positions[0])
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [quantity, setQuantity] = useState("")

    const onSave = (event) => {
        event.preventDefault()
        onPlayerRegister({
            id: uuidv4(),
            position,
            name,
            image,
            quantity
        })
        setPosition(positions[0])
        setName("")
        setImage("")
        setQuantity("")
    }

    return (
        <section className="forms">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para cadastrar o jogador</h2>
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
                <TextField
                    required={true}
                    label="Quantidade"
                    placeholder="Digite a quantidade para a categoria" 
                    inputValue={quantity}
                    setInputValue={value => setQuantity(value)}
                />
                <Button>
                    Cadastrar
                </Button>
            </form>
        </section>
    )
}

export default Forms