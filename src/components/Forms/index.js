import { useState } from "react"
import Button from "../Button"
import Dropdown from "../Dropdown"
import TextField from "../TextField"
import "./Forms.css"

const Forms = (props) => {

    const categories = [
        "Artilheiros",
        "Assistentes",
        "MVPs",
        "Cartões amarelos",
        "Cartões vermelhos"
    ]

    const [category, setCategory] = useState(categories[0])
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [quantity, setQuantity] = useState("")

    const onSave = (event) => {
        event.preventDefault()
        props.onPlayerRegister({
            category,
            name,
            image,
            quantity
        })
    }

    return (
        <section className="forms">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para cadastrar o jogador na categoria</h2>
                <Dropdown
                    required={true}
                    label="Categoria"
                    itens={categories}
                    selectValue={category}
                    setSelectValue={value => setCategory(value)}
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