import {useState} from "react";
import {useRef} from "react";

export default function SearchBar({expanded}){
    const [isExpanded, setIsExpandedState] = useState(false);
    //const searchBoxRef = useRef(null);

    function expandSearchField(e){
        //searchBoxRef.current.style.display = "block";
        //searchBoxRef.current.style.width = "10em";
        setIsExpandedState(true);
    }

    return (
        <div className="search-bar">
            <form>
                <input type="search" placeholder="Search..."/>
{/*                {isExpanded ? <input type="search" placeholder="Search..."/> :
                    <input type="search" placeholder="Search..."/>
                }*/}
            </form>
            <button className="search-button inactive" name="open-search" onClick={expandSearchField}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1.75em" viewBox="0 -960 960 960" width="1.75em" fill="lightgray">
                    <path
                        d="M794-96 525.787-364Q496-341.077 457.541-328.038 419.082-315 373.438-315q-115.311 0-193.875-78.703Q101-472.406 101-585.203T179.703-776.5q78.703-78.5 191.5-78.5T562.5-776.356Q641-697.712 641-584.85q0 45.85-13 83.35-13 37.5-38 71.5l270 268-66 66ZM371.441-406q75.985 0 127.272-51.542Q550-509.083 550-584.588q0-75.505-51.346-127.459Q447.309-764 371.529-764q-76.612 0-128.071 51.953Q192-660.093 192-584.588t51.311 127.046Q294.623-406 371.441-406Z"/>
                </svg>
            </button>
        </div>
    )
}