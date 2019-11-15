import spotifyApi from './spotify';

export function redirectToSpotify() {
  const clientId = 'de3ee428dad24e34895545d6a8e697e8';
  const spotifyUrl = 'https://accounts.spotify.com/authorize';
  const redirectUrl = 'http://localhost:3322/login/callback/';
  const scope =
    'user-follow-read user-read-recently-played user-top-read user-library-read user-read-currently-playing user-read-playback-state user-modify-playback-state playlist-read-collaborative playlist-read-private';
  const fullString = `${spotifyUrl}?client_id=${encodeURIComponent(
    clientId
  )}&response_type=token&redirect_uri=${encodeURIComponent(
    redirectUrl
  )}&scope=${encodeURIComponent(scope)}`;
  window.location.href = fullString;
}

function getHashValue(hash) {
  return hash.split('=')[1];
}

export function loginToSpotify(hash) {
  const hashArr = hash.substr(1).split('&');
  const accessToken = getHashValue(hashArr[0]);
  return new Promise((resolve, reject) => {
    window.localStorage.setItem('spotifyAccessToken', accessToken);
    spotifyApi.setAccessToken(accessToken);
    return resolve();
  });
}
