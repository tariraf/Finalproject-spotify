import { useState } from "react";
import Searchbar from "../../Component/Searchbar";
import SelectedSong from "../../Component/selectedSong";
import Form from "../../Component/Form";

const Home = ()=> {
    if (localStorage.getItem('selected_item') === null){
        localStorage.setItem('selected_item', JSON.stringify({}));
    }
    if (localStorage.getItem('musikItem') === null){
        localStorage.setItem('musikItem', JSON.stringify({}));
    }
    
    return(
        <div>
            <Searchbar />
            <SelectedSong />
            <Form />
        </div>
    );
}

export default Home;