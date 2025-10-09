function Alert({type = "info", children}) {
    const colors = {
        info: "lightblue",
        warning: "goldenrod",
        danger: "tomato"
    };

    return (
        <div style={{
            backgroundColor: colors[type],
            color: "white",
            padding: "10px",
            borderRadius: "15px"
        }}>
            {children}
        </div>
    )
}

export default Alert