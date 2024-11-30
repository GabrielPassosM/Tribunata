import axios from "axios";
import { showErrorModal, showSuccessModal } from "./utils/modalUtils";
import { unexpectedErrorMsg } from "./consts.js"


const apiUrl = process.env.REACT_APP_API_URL;


export const fetchPlayers = async () => {
  try {
    const response = await axios.get(`${apiUrl}/players`)
    return response.data
  } catch(error) {
    let errorMsg = unexpectedErrorMsg
    if (error.status < 500) {
      errorMsg = error.response?.data?.detail ?? unexpectedErrorMsg
    }
    showErrorModal({text: errorMsg})
  }
}

export const apiDeletePlayer = async (playerId) => {
  try {
    const response = await axios.delete(`${apiUrl}/player/${playerId}`)
    showSuccessModal({title: "Jogador deletado com sucesso"})
    return response.data
  } catch(error) {
    let errorMsg = unexpectedErrorMsg
    if (error.status < 500) {
      errorMsg = error.response?.data?.detail ?? unexpectedErrorMsg
    }
    showErrorModal({text: errorMsg})
  }
}

export const apiCreatePlayer = async (playerInfo) => {
  try {
    const response = await axios.post(`${apiUrl}/player`, playerInfo)
    showSuccessModal({title: "Jogador cadastrado com sucesso"})
    return response.data
  } catch(error) {
    let errorMsg = unexpectedErrorMsg
    if (error.status < 500) {
      errorMsg = error.response?.data?.detail ?? unexpectedErrorMsg
    }
    showErrorModal({text: errorMsg})
  }
}

export const apiUpdatePlayer = async (playerInfo) => {
  try {
    const response = await axios.put(`${apiUrl}/player/${playerInfo.playerId}`, playerInfo)
    showSuccessModal({title: "Jogador atualizado com sucesso"})
    return response.data
  } catch(error) {
    let errorMsg = unexpectedErrorMsg
    if (error.status < 500) {
      errorMsg = error.response?.data?.detail ?? unexpectedErrorMsg
    }
    showErrorModal({text: errorMsg})
  }
}
