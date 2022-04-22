import '../App.css'
import '../Style/cardstyle.css'
import Songdesc from './Songdesc'
const Cards = ({albumImg, title, artist, url,keyId, data}) => {
    return (
    <div className='card'>
        <div className = 'song-detail'>
        <Songdesc 
            albumImg={albumImg}
            title = { title }
            artist = { artist }
            songUrl={url}
            keyId={keyId}
            data = {data}
        />
        </div>
    </div>
    );
}

export default Cards;