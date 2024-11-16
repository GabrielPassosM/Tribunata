import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';
import Category from './components/Category';
import Footer from './components/Footer';


function App() {

  const [players, setPlayers] = useState([])

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    fetch(`${apiUrl}/players`)
      .then(response => response.json())
      .then(data => {
        setPlayers(data)
      })
  }, [])

  const registerPlayer = (player) => {
    setPlayers([...players, player])
  }

  const categories = [
    {
      name: "Artilheiros",
      color: "#A6D157",
    },
    {
      name: "Assistentes",
      color: "#82CFFA",
    },
    {
      name: "MVPs",
      color: "#E06B69",
    },
    {
      name: "Cartões amarelos",
      color: "#ffde59",
    },
    {
      name: "Cartões vermelhos",
      color: "#ff3131",
    }
  ]

  function deletePlayer(id) {
    setPlayers(players.filter(p => p.id !== id))
  }

  function changeFavorite(id) {
    setPlayers(players.map(p => {
      if (p.id === id) {
        p.favorite = !p.favorite
      }
      return p
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Forms categories={categories.map(cat => cat.name)}  onPlayerRegister={player => registerPlayer(player)} />
      
      {categories.map(cat => 
        <Category 
          key={cat.name} 
          name={cat.name} 
          color={cat.color}
          players={players}
          onDelete={deletePlayer}
          onFavorite={changeFavorite}
        />
      )}

      <Footer/>

    </div>
  );
}

export default App;
