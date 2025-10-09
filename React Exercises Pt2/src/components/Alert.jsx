function Alert({type = "info", children}) { // initializing the component, using "type" to determine what color the Alert shows as
    const colors = { // List of instances the alert can be used as with matching colors.
        info: "lightblue",
        warning: "goldenrod",
        danger: "tomato"
    };

    return (
        <div style={{ // styling the div the Alert is shown in
            backgroundColor: colors[type], // this is where we utilize the "type" prop to determine color
            color: "white",
            padding: "10px",
            borderRadius: "15px"
        }}>
            {// we pull in all the content between the Alert open and closing tags (text and HTML tags).
            }
            {children} 
        </div>
    )
}

export default Alert