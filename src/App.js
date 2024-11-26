import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';
import Category from './components/Category';
import Footer from './components/Footer';
import { fetchPlayers, apiDeletePlayer } from './apiService';
import { showErrorModal, showConfirmationModal } from './utils/modalUtils';


function App() {

  const [players, setPlayers] = useState([])

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

  const positions = [
    {
      name: "Goleiro",
      value: "goalkeeper"
    },
    {
      name: "Zagueiro",
      value: "defender",
    },
    {
      name: "Meio-campo",
      value: "midfielder",
    },
    {
      name: "Atacante",
      value: "forward",
    }
  ]

  useEffect(() => {
    fetchPlayers()
      .then((data) => setPlayers(data))
      .catch((error) => 
        showErrorModal({text: "Não foi possível buscar os jogadores. Por favor, tente novamente"})
      )
  }, [])

  const registerPlayer = (player) => {
    setPlayers([...players, player])
  }

  async function deletePlayer(id) {
    const confirmed = await showConfirmationModal()
    if (confirmed) {
      apiDeletePlayer(id)
      setPlayers(players.filter(p => p.id !== id))
    }
  }

  return (
    <div className="App">
      <Banner />
      <Forms positions={positions} onPlayerRegister={player => registerPlayer(player)} />
      
      {categories.map(cat => 
        <Category 
          key={cat.name} 
          name={cat.name} 
          color={cat.color}
          players={players}
          onDelete={deletePlayer}
        />
      )}

      <Footer/>

    </div>
  );
}

export default App;
