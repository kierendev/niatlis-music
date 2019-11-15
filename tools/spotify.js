const SpotifyWebApi = require('spotify-web-api-js');
const spotifyApi = new SpotifyWebApi();

const accessToken = window.localStorage.getItem('spotifyAccessToken');
if (accessToken !== undefined) {
  spotifyApi.setAccessToken(accessToken);
}
export default spotifyApi;
