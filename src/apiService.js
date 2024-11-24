import axios from "axios";
import { showErrorModal } from "./utils/modalUtils";
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
