const apiUrl = process.env.REACT_APP_API_URL;

export const fetchPlayers = async () => {
  const response = await fetch(`${apiUrl}/players`);
  if (!response.ok) {
    throw new Error('Failed to fetch players');
  }
  return response.json();
};
