import React from "react";


function SearchBox(props) {
    return(
        <div className="pa1 ma2">
            <input onChange={props.searchChange} className="pa4 ba b-light-green bg-light-green w-30" type="search" placeholder="Search robots"/>
        </div>
    )
}
;
export default SearchBox;