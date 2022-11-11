import React from 'react';
import { debounce } from './commonFunction';
import './Main.css';
import { Circles } from "react-loader-spinner";

function Main() {
  const [loaderStatus, setLoader] = React.useState(false);
  const [songsListing, setSongListing] = React.useState([]);

  const fetchSongsRequest = (searchText) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5553d8af1bmshe10a4b0fe19d210p11f060jsnaa04031cc01a',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    };
    
    fetch(`https://shazam.p.rapidapi.com/search?term=${searchText}&locale=en-US&offset=0&limit=5`, options)
      .then(response => response.json())
      .then((response) => {
        console.log(response?.artists?.hits)
        setLoader(false);
        setSongListing(response?.artists?.hits);
      }).catch(err => console.error(err));
  }

  const getSongList = debounce(fetchSongsRequest, 500);

  const inputChange = (event) => {
    const searchText = event?.target?.value;
    if (searchText.length >= 3) {
      setLoader(true);
      getSongList(searchText);
    }
  }

  return (
    <div>
      <div className='inputContainer'>
        <input type="text" onChange={inputChange}/>
        <button>Search</button>
      </div>
      <div className='container'>
        {!loaderStatus && !!songsListing?.length && <table>
          <tr>
            <td>
              Logo
            </td>
            <td>
              Artist Name
            </td>
            <td>
              Song Url
            </td>
          </tr>
          {songsListing?.length ? songsListing?.map((item) => {
            return (
              <tr key={item?.artist?.adamid}>
                <td className='imgContainer'>
                  <img
                    className='imgB'
                    src={item?.artist?.avatar}
                    alt={item?.artist?.adamid}
                  />
                </td>
                <td>{item?.artist?.name}</td>
                <td><a href={item?.artist?.weburl}>{item?.artist?.weburl}</a></td>
              </tr>
            );
          }) : 
          <tr>
            No items found
          </tr>
          }
        </table>}
      </div>
        {loaderStatus &&
          <div className='loaderClass'>
            <Circles
              color="rgb color"
            />
          </div>
        }
    </div>
  );
}

export default Main;
