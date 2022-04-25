import Cards from "./Card";
const selectedSong = () => {
    
    const selected_item = JSON.parse(localStorage.getItem('selected_item'));

    return(
        <div>
            <h1>Selected</h1>
            <li>
            <ul className='list' type='none'>
                {
                    selected_item && Object.values(selected_item).map(res => (
                        <Cards 
                        title={res.name}
                        artist={res.artists[0].name}
                        albumImg={res.album.images[0].url}
                        data={res}
                        />
                    ))
                }
            </ul>
            </li>
        </div>
    );
}

export default selectedSong;