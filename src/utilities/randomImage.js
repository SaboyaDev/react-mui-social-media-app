const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY

export const randomImages = async () => {
	const response = await fetch(
		`https://api.unsplash.com/photos?client_id=${apiKey}`
	)
	const data = await response.json()
	return data
}
