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
            <p>Name: {form.name}</p>
            <p>Email: {form.email}</p>
            <form>
                <input type="text" name="name" onChange={handleChange} value={form.name} placeholder="name"/>
                <input type="email" name="email" onChange={handleChange} value={form.email} placeholder="email"/>
            </form>
        </>

    );
}

export default Form;