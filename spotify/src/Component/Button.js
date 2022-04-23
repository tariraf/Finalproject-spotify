import React, { useState } from "react";
import '../App.css';
import '../Style/cardstyle.css'


const Button = ({ item, songId }) => {
    const [select, setSelect] =  useState(
        ()=>{
            let current_selected = JSON.parse(localStorage.getItem('selected_item'))
            if (current_selected[item.id]===undefined) {
                return false;
            }else{
                return true;
            }
        }
    );

    const handleSelect = () => {
        setSelect(!select);
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