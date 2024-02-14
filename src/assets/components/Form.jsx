import React, { useState } from 'react';
import Display from './Display';

const Form = () => {
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
      
       let existingData = localStorage.setItem('formData' , JSON.stringify(formData));
       existingData.append( Math.random());
    
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                />
                <br />

                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                />
                <br />

                <button type="submit">Submit</button>
            </form>
            <Display name = {formData.firstName}/>
        </div>

       
    );
};

export default Form;
