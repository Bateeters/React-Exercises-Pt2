import { useState } from "react";

function Form() {
    const [form, setForm] = useState({name: "", email: ""})

    // function to handle the value changes and update the form state
    function handleChange(e) {
        const {name, value} = e.target;
        setForm((prev) => ({...prev, [name]: value }))
    }

    return (
        <>
            <p>{form.name}</p>
            <p>{form.email}</p>
            <form>
                <input type="text" name="name" onChange={handleChange} value={form.name} placeholder="name"/>
                <input type="email" name="email" onChange={handleChange} value={form.email} placeholder="email"/>
            </form>
        </>

    );
}

export default Form;