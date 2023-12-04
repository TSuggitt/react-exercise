import React, { useState } from 'react'

import "./songs.css"

export default function Songs(){

    

    const songs = [
        {release_year:1969, song_name: "Whole Lotta Love", image_source: "src/assets/images/lzII.jpeg"},
        {release_year:1969, song_name: "No Quarter", image_source: "src/assets/images/hohcover.jpeg"}]

    const [likedSongs, setLikedSongs] = useState([])

    function toggleLike(songName){
        if (likedSongs.includes(songName) === true){
            setLikedSongs(likedSongs.filter((name) => name !== songName));
        }
        else {
            setLikedSongs([...likedSongs, songName])
        }

    }


    return (
        <>
        <div id = "songBody">


       
            <h1> Their Greatest Hits</h1>


            <ul>
                {songs.map((s) => (
                    <li className = "songListItems"> 
                    <span>
                    <img src = {s.image_source} height = "120" />
                    <h3>{s.song_name}</h3>
                    </span>
                     {s.release_year} 
                    <br />
                    <button onClick={() => toggleLike(s.song_name)}>
                    {likedSongs.includes(s.song_name) ? 'Unlike this song' : 'Like this song'}
                    </button>
                    </li>
                )
                )
                }
            </ul>

           

            

        </div>

        </>
    )
}
