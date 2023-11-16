const SPOTIFY_CLIENT_ID=''
const SPOTIFY_CLIENT_SECRET=''
const SPOTIFY_REFRESH_TOKEN=""

const client_id = SPOTIFY_CLIENT_ID;
const client_secret = SPOTIFY_CLIENT_SECRET;
const refresh_token = SPOTIFY_REFRESH_TOKEN;

const basic = btoa(`${client_id}:${client_secret}`);
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=refresh_token&refresh_token=${refresh_token}`
  });
  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  .then(response => {
    if (response.ok) {
      if (response.status === 200) {
          return response.json();
      }
      return {}
    };
    throw new Error('Request Failed!');

  }, networkError => {
    console.log(networkError.message);
  })
  .then((jsonResponse:any) => {
      if (!jsonResponse.item) {
        return {}
      };
      let track = jsonResponse.item
      return {
        id: track.id,
        title: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
        songUrl: track.external_urls.spotify
      };
  }).catch();
};


type TopTrackParams = {
  limit?: number,
  offset?: number,
  time_range?: string
}
export const getTopTracks = async (params: TopTrackParams) => {
  if (!params.limit) {params.limit = 20}
  if (!params.offset) {params.offset = 0}
  if (!params.time_range) {params.time_range = 'medium_term'}
  const url = `${TOP_TRACKS_ENDPOINT}?time_range=${params.time_range}&limit=${params.limit}&offset=${params.offset}`

  const  {access_token} = await getAccessToken();

  return await fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  }).then(response => {
    if (response.ok) {
      return response.json();
    };
    throw new Error('Request Failed!');

  }, networkError => {
    console.log(networkError.message);
  }).then(jsonRespone => {
    if (!jsonRespone.items) {
      return [];
    };
    return jsonRespone.items.map((track:any) => ({
      id: track.id,
      title: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
      songUrl: track.external_urls.spotify
    }));
  });
};
