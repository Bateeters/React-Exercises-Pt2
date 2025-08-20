import { useState } from "react";
import "../css/ValidatedForm.css"

function ValidatedForm() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Thank you ${firstName} ${lastName}, we will contact you at ${email} or by phone if entered.`)
    }

    const isFormValid = 
        firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        email.includes("@");

    return(
        <div>
            <h3>8. Form Validation</h3>
            <h5>Goal: Create a form that validates user input.</h5>
            <p>Steps:</p>
            <ol>
                <li>Create a component called ValidatedForm.</li>
                <li>Track form fields with useState.</li>
                <li>On submit, check for validity (e.g. email includes @).</li>
                <li>Show validation messages near fields.</li>
                <li>Disable the submit button if invalid.</li>
            </ol>
            <br />
            <p>Exercise Solution:</p>
            <div>
                <form action="" onSubmit={handleSubmit} className="d-flex flex-column">
                    <p>* Denotes Required Fields</p>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column name-field">
                            <label htmlFor="first-name">First Name *</label>
                            <input type="text" required id="first-name" placeholder="First Name" value={firstName} onChange = {(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className="d-flex flex-column name-field">
                            <label htmlFor="first-name">Last Name *</label>
                            <input type="text" required id="last-name" placeholder="Last Name" value={lastName} onChange = {(e) => setLastName(e.target.value)}/>
                        </div>
                    </div>
                    <label htmlFor="email-input">Email *</label>
                    <input type="email" required id="email-input" placeholder="Email" value={email} onChange = {(e) => setEmail(e.target.value)}/>
                    <label htmlFor="phone-number">Phone Number</label>
                    <input type="telephone" id="phone-number" placeholder="Phone Number" value={phoneNumber} onChange = {(e) => setPhoneNumber(e.target.value)}/>
                    <button type="submit" disabled={!isFormValid}>Submit</button>
                </form>
            </div>
            <br /><br />

        </div>
    )
}

export default ValidatedForm