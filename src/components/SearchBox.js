import React from "react";


function SearchBox(props) {
    return(
        <div className="pa2 ma2">
            <input onChange={props.searchChange} className="pa3 ba b-light-green bg-light-green" type="search" placeholder="Search robots"/>
        </div>
    )
}
;
export default SearchBox;