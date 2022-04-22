import { useState } from "react";
import Searchbar from "../../Component/Searchbar";
const Home = ()=> {
    if (localStorage.getItem('selected_item') === null){
        localStorage.setItem('selected_item', JSON.stringify({}));
    }
    return(
        <div>
            <Searchbar />
        </div>
    );
}

export default Home;