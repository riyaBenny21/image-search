import React,{useState} from "react";
import './Searchbar.css'

function SearchBar({onSubmit}){

    const[term,setTerm] = useState();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);

    };
    
    return(
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Serach Term</label>
                <input value={term} onChange={handleChange}/>
            </form>
        </div>
    );
}

export default SearchBar;