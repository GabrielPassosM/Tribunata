import Button from "../Button"
import Dropdown from "../Dropdown"
import TextField from "../TextField"
import "./Forms.css"

const Forms = () => {

    const categories = [
        "Artilheiros",
        "Assistentes",
        "MVPs",
        "Cartões amarelos",
        "Cartões vermelhos"
    ]

    return (
        <section className="forms">
            <form>
                <h2>Preencha os dados para cadastrar o jogador na categoria</h2>
                <Dropdown label="Categoria" itens={categories} />
                <TextField label="Nome" placeholder="Digite o seu nome"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <TextField label="Quantidade" placeholder="Digite a quantidade para a categoria" />
                <Button>
                    Cadastrar
                </Button>
            </form>
        </section>
    )
}

export default Forms