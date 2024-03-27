import React from "react";


function SearchBox({ searchChange }) {
    return(
        <div className="pa2 ma2">
            <input onChange={searchChange} className="pa3 ba b-dark-green bg-dark-green" type="search" placeholder="Search robots"/>
        </div>
    )
}
;
export default SearchBox;