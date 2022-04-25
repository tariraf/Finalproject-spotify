import { useState, useEffect } from "react";
const Form = ()=> {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [userId, setUserId] = useState();
    const [playlist, setPlaylist] = useState([]);
    const [playlistId, setPlaylistID] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleDesc = (e) => {
        setDescription(e.target.value);
    }

    const getUserId = () => {
        fetch(`https://api.spotify.com/v1/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(user => setUserId(user.id));
    }

    const getPlaylist = async () => {
       
        const data = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                "name": `${name}`,
                "description": `${description}`,
                "public": false
            })
        })
        .then(res => res.json())
        // .then(Playlist => {
        //     setPlaylist(Playlist)
        //     // if(data.id !== undefined){
        //     // return data.id;
        //     // }
        // })

        return data;
        
    }

    const addItemsToPlaylist = async (id)=> {
        const uri = []

        const selected_item = JSON.parse(localStorage.getItem('selected_item'));
        console.log("selected item ",selected_item);

        const trackID = Object.values(selected_item);
        console.log('trackID',trackID);

        for (let index = 0; index < trackID.length; index++) {
            uri.push(trackID[index].uri);
        }

        console.log(uri)
        await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                'uris': uri
                ,
                'position': 0
            })
        })
            .then(res => res.json())
    }

    console.log(playlistId);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        getPlaylist().then((data) => {
                console.log(data.id);
                addItemsToPlaylist(data.id).then(res => console.log(res))
                // let arr = []
                let selected_item = JSON.parse(localStorage.getItem('selected_item'));

                let musikItem = JSON.parse(localStorage.getItem('musikItem'));

                let obj = Object.values(selected_item);

                let musik = { obj };

                musikItem[playlist] = musik;
                // arr.push(Object.values(selected_item));

                localStorage.setItem('musikItem', JSON.stringify(musikItem));
        }
        )
        // .then(
            
        //         localStorage.setItem('selected_item', JSON.stringify({}))
        //         // window.location.reload()
            
        // )


    }



    useEffect(() => {
        getUserId()
    }, []);

    return(
        <div>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Title : </label>
                    <input type="text" name='name' id='name' minLength='10' required onChange={handleName} /> <br />
                    <label htmlFor="description">Description : </label>
                    <input type="text" name="description" required minLength='10' onChange={handleDesc} /> <br />
                    <input type="submit" value='submit' className='form-btn' />
                </form>

                <div className='playlist'>
                    <h2>Playlist</h2>
                    <ul type='none'>
                        {
                            playlist && playlist.map(value => (
                                <li key={value.id}>
                                    <h3>{value.name}</h3>
                                    <p>{value.description}</p>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
             </div>
        </div>
    );
}

export default Form;