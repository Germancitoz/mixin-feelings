import playlistjson from '../data/playlist.json'
import { ErrorMessageSpotify, Playlist } from '../types'

const RAPIDAPI_KEY = import.meta.env.PUBLIC_RAPIDAPI_KEY
const RAPIDAPI_HOST = import.meta.env.PUBLIC_RAPIDAPI_HOST

function getRandomPlaylistId(feeling: string) {
	const playlists = playlistjson[feeling].map((playlist) => playlist.name)

	const randomPlaylists = playlists
		.sort(() => 0.5 - Math.random())
		.reduce((ac, cc) => {
			if (ac.length === 3) return [...ac]
			if (ac.includes(cc)) {
				return [...ac]
			}
			return [...ac, cc]
		}, [])

	return playlistjson[feeling]
		.filter((playlist) => randomPlaylists.includes(playlist.name))
		.map((playlist) => playlist.id)
}

export async function getPlaylistsByFeeling(feeling: string): Promise<Playlist[] | null> {
	try {
		const randomPlaylistId = getRandomPlaylistId(feeling)
		const requests = randomPlaylistId.map((id) => {
			return fetch(`/api/spotify/playlists/${id}`)
		})

		const response = await Promise.all(requests)
		const data = await Promise.all(response.map((res) => res.json()))

		checkingErrorByKey(data as ErrorMessageSpotify[])

		return data
	} catch (error) {
		console.log(error)
		return null
	}
}

function checkingErrorByKey(data: ErrorMessageSpotify[]) {
	const existError = data.find(
		(playlist: Partial<ErrorMessageSpotify>) =>
			playlist?.message === 'You are not subscribed to this API.' ||
			playlist?.message === 'Too many requests'
	)
	if (existError) throw new Error(data[0].message)
}
