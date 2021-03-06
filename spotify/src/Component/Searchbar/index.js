import { useState } from 'react';
import './index.css';
import Card from '../Card';
 const Searchbar = () => {
    const [text, setText] = useState();
    const [data, setData] = useState();
    const handleInput = (e) => {
       
        // let inputValue = e.target.value;
        setText(e.target.value);
    }

     const getData = (e) => {
        // const {text} = this.state;
        e.preventDefault();
        fetch(`https://api.spotify.com/v1/search?type=track&include_external=audio&q=${text}&limit=12`, {
            method : 'GET', 
            headers : { 'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`}
        })
        .then((data) => data.json())
        .then((res) => setData(res));
    }

    console.log(data);
   
        return (
            <div className='searchbar'>
            <form>
                <input type="text" 
                placeholder='Search'
                onChange={handleInput}
                />
                <button className='search__btn' type='submit'onClick={getData}>Search</button>
            </form>
            <ul className='Cards' type='none'>
            {
                data && data.tracks.items.map ((res)=>(
                    
                        <li key={res.id}>
                        <Card
                            title={res.name}
                            artist={res.artists[0].name}
                            albumImg={res.album.images[0].url}
                            data={res}
                        />
                        </li>
                    
                ))
            }
            </ul>
        </div>
        );

}

export default Searchbar;