import '../App.css';
import React from 'react';
import Button from './Button';
const Songdesc = ({ title, artist, albumImg, keyId, data}) => {
    return (
    <div className = "song-desc" key={keyId}>
      <img src = { albumImg }/>
      <h3> { title } </h3> 
      <p> <span className = 'by'> by </span>{artist}</p>
      <Button item={data} songId={keyId} />
    </div>
    );
};

export default Songdesc;