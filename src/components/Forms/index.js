import TextField from "../TextField"
import "./Forms.css"

const Forms = () => {
    return (
        <section className="forms">
            <form>
                <h2>Preencha os dados para criar o cadastro da pessoa</h2>
                <TextField label="Nome" placeholder="Digite o seu nome"/>
                <TextField label="Cargo" placeholder="Digite o seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
    )
}

export default Forms