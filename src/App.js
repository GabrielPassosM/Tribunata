import Banner from './components/Banner';
import TextField from './components/TextField';


function App() {
  return (
    <div className="App">
      <Banner />
      <TextField label="Nome"/>
      <TextField label="Cargo"/>
      <TextField label="Imagem"/>
    </div>
  );
}

export default App;
