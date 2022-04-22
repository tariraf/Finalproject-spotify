import { useState } from "react";
import Searchbar from "../../Component/Searchbar";
import SelectedSong from "../../Component/selectedSong";

const Home = ()=> {
    if (localStorage.getItem('selected_item') === null){
        localStorage.setItem('selected_item', JSON.stringify({}));
    }
    return(
        <div>
            <Searchbar />
            <SelectedSong />
        </div>
    );
}

export default Home;