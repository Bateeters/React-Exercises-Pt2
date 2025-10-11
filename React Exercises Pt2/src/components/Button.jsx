function Button({type="primary", onClick, children}) {
    return (
        <button 
        className={`btn btn-`+ type}
        onClick={onClick}>
            {children}
        </button>
    )
}

export default Button