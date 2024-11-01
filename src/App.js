import { useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';
import Category from './components/Category';
import Footer from './components/Footer';


function App() {

  const [players, setPlayers] = useState([])

  const registerPlayer = (player) => {
    setPlayers([...players, player])
  }

  const categories = [
    {
      name: "Artilheiros",
      primaryColor: "#A6D157",
      secondColor: "#F0F8E2",
    },
    {
      name: "Assistentes",
      primaryColor: "#82CFFA",
      secondColor: "#E8F8FF",
    },
    {
      name: "MVPs",
      primaryColor: "#E06B69",
      secondColor: "#FDE7E8",
    },
    {
      name: "Cartões amarelos",
      primaryColor: "#ffde59",
      secondColor: "#faeaa6",
    },
    {
      name: "Cartões vermelhos",
      primaryColor: "#ff3131",
      secondColor: "#ff7d7d",
    }
  ]

  return (
    <div className="App">
      <Banner />
      <Forms categories={categories.map(cat => cat.name)}  onPlayerRegister={player => registerPlayer(player)} />
      
      {categories.map(cat => <Category 
        key={cat.name} 
        name={cat.name} 
        primaryColor={cat.primaryColor}
        secondColor={cat.secondColor}
        players={players.filter(p => p.category === cat.name)}
      />)}

      <Footer/>

    </div>
  );
}

export default App;
