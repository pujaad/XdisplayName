import React, { useState } from "react"; 

const DisplayName = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: ""
    });
    const [fullName, setFullName] = useState(""); 

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setFullName(`${form.firstName} ${form.lastName}`);
    };

    return (
        <div>
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName" 
                    name="firstName" 
                    required
                    value={form.firstName}
                    onChange={handleChange} 
                />
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName" 
                    name="lastName" 
                    required
                    value={form.lastName}
                    onChange={handleChange} 
                />
                <button type="submit">Submit</button>
            </form>
            {fullName && <p>Full Name: {fullName}</p>}
        </div>
    );
}

export default DisplayName;
