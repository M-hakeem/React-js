async function trackSearch(artist_name) {
  try {
    const url = `${CORS}/${MUSIX_MATCH_BASE_URL}/track.search?q_artist=${artist_name}&apikey=${API}`;

    const response = await fetch(url);

    const data = await response.json();

    console.log(data.message.body);
    console.log(data.message.body.track_list);

    const tracks = data.message.body.track_list;

    tracks.forEach((track) => {
      console.log(track.track.track_name);
    });
  } catch (err) {
    throw err;
  }
}
trackSearch("davido");
