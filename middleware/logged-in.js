import spotifyApi from '@/tools/spotify';
// import { redirectToSpotify } from '@/tools/auth.js';
export default function({ app, redirect }) {
  if (window.localStorage.getItem('spotifyAccessToken') === undefined) {
    return redirect('/login');
  } else {
    return spotifyApi
      .getMe()
      .then((x) => {
        window.localStorage.setItem('displayName', x.display_name);
        window.localStorage.setItem('profilePicture', x.images[0].url);
      })
      .catch((error) => {
        if (error.status === 401) {
          return redirect('/login');
        } else {
          console.error(error);
        }
      });
  }
}
