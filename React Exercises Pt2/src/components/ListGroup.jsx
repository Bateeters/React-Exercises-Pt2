import { useState } from "react";

function ListGroup({items, heading, onSelectItem}) { // define the props, or arguments if thinking in terms of functions, needed for component
    
    // initialize our state and start it at “-1” so none of the items are highlighted 
    // (0 would highlight the first as it goes by index)
    const [selectedIndex, setSelectedIndex] = useState(-1);  
    
    return (
	    <> { // use the passed "heading" and "items" to dynamically render/display
            }
		    <h3>{heading}</h3> 
		    {items.length === 0 && <p>No item found</p>}
            <ul className='list-group'>
                {items.map((item, id) => (
                    <li key={id} 
                        className={ selectedIndex === id ? 'list-item highlight' : 'list-item'}    
                        onClick={() => {
                            setSelectedIndex(id);
                            onSelectItem(item);
                        }} 
                    >
                        {item}
                    </li>
                ))}
		    </ul>
	    </>
    )
}

export default ListGroup
