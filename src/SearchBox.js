import React from "react";


function SearchBox({ searchChange }) {
    return(
        <div className="pa3">
            <input onChange={searchChange} className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Search robots"/>
        </div>
    )
}
;
export default SearchBox;