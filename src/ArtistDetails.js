import React from 'react';
import { useParams } from "react-router-dom";

function ArtistDetails() {
  let { artistId } = useParams();

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5553d8af1bmshe10a4b0fe19d210p11f060jsnaa04031cc01a',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  
  fetch(`https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=${artistId}&locale=en-US`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  
  return (
    <div>
      dheeraj
    </div>
  );
}

export default ArtistDetails;
