import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';
import Category from './components/Category';
import Footer from './components/Footer';
import { fetchPlayers, apiDeletePlayer, apiCreatePlayer, apiUpdatePlayer } from './apiService';
import { showErrorModal, showConfirmationModal } from './utils/modalUtils';
import { AppCategories } from "./consts.js"


function App() {

  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetchPlayers()
      .then((data) => setPlayers(data))
      .catch((error) => 
        showErrorModal({text: "Não foi possível buscar os jogadores. Por favor, tente novamente"})
      )
  }, [])

  const registerPlayer = async (playerInfo) => {
    const player = await apiCreatePlayer(playerInfo)
    setPlayers([...players, player])
  }

  const updatePlayer = async (playerInfo) => {
    const updatedPlayer = await apiUpdatePlayer(playerInfo)
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === updatedPlayer.id ? updatedPlayer : player
      )
    );
  }

  async function deletePlayer(id) {
    const confirmed = await showConfirmationModal()
    if (confirmed) {
      await apiDeletePlayer(id)
      setPlayers(players.filter(p => p.id !== id))
    }
  }

  return (
    <div className="App">
      <Banner />
      <Forms onFormsSubmit={player => registerPlayer(player)} action="create" />
      
      {AppCategories.map(cat => 
        <Category 
          key={cat.name} 
          name={cat.name} 
          color={cat.color}
          players={players}
          onDelete={deletePlayer}
          onUpdate={updatePlayer}
        />
      )}

      <Footer/>

    </div>
  );
}

export default App;
