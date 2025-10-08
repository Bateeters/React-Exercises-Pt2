import { useState } from "react";

function ListGroup({items, heading}) {
    // initialize our state and start it at “-1” so none of the items are highlighted 
    // (0 would highlight the first as it goes by index)
    const [selectedIndex, setSelectedIndex] = useState(-1);  
    return (
	    <>
		    <h3>{heading}</h3>
		    {items.length === 0 && <p>No item found</p>}
            <ul className='list-group'>
                {items.map((item, id) => (
                    <li key={id} 

                    // check to see what the selectedIndex state is, 
                    // if it matches the element’s id, apply the “highlight” class, 
                    // if not, just “list-item” class
                    className={ selectedIndex === id ? 'list-item highlight' : 'list-item'}    

                    // on click, update selectedIndex state to the element’s id
                    onClick={() => {setSelectedIndex(id)}} 
                    >
                        {item}
                    </li>
                ))}
		    </ul>
	    </>
    )
}

export default ListGroup
