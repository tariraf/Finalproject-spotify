const startLogin = () =>{
    const handleLogin = () => {
    let client_id = '53c1cff414d4428e8eb8c43f1a612b71';
    let redirect_uri = 'http://localhost:3001/';
    let scope = 'playlist-modify-private';
    let url = 'https://accounts.spotify.com/authorize?' +
        'client_id=' + encodeURIComponent(client_id) +
        '&redirect_uri=' + encodeURIComponent(redirect_uri) +
        '&scope=' + encodeURIComponent(scope) +
        '&response_type=token&show_dialog=true';

    window.location = url;
    let hash = window.location.hash;
    let access_token = hash.substring(hash.indexOf('=') + 1, hash.indexOf('&'));
    localStorage.setItem("token", access_token);
    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default startLogin;


