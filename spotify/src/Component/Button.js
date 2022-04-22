import React, { useState } from "react";
import '../App.css';
import '../Style/cardstyle.css'


const Button = ({ item, songId }) => {
    const [select, setSelect] =  useState(false);
    const [count, setCount] = useState(-1);

    const handleCount = ()=>{
        setCount(count++);
    }

    const handleSelect = () => {
        setSelect(!select);
        setCount();
        let current_selected = JSON.parse(localStorage.getItem('selected_item'));
        if (!select){
            current_selected[item.id] = item;
        }
        else{
            delete current_selected[item.id];
        }
        localStorage.setItem('selected_item',JSON.stringify(current_selected));
    }

    

    return (
    <div>
        <button className="mybtn"  onClick={handleSelect}>
            {select ? 'Deselect' : 'Select'}
        </button>
    </div>
    );
    
}

export default Button;