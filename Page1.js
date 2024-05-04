import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page1 = ({ formData, setFormData, nextPage }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        if (!formData.name || !formData.occupation || !formData.age || !formData.address || !formData.contact) {
            toast.error('Please fill in all fields.');
            return;
        }

        // Age validation
        const age = parseInt(formData.age);
        if (isNaN(age) || age <= 18 || age >= 100) {
            toast.error('Please enter a valid age between 18 and 100.');
            return;
        }

        // Contact number validation
        const contactRegex = /^\d{10}$/;
        if (!contactRegex.test(formData.contact)) {
            toast.error('Please enter a valid 10-digit contact number.');
            return;
        }
        nextPage();
    };

    return (
        <div>
            <h2>User Form Personal Details</h2>
            <div style={{ marginBottom: '10px' }}>
                <input className="input" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} style={{ margin: '5px', padding: '5px' }} />
                <input className="input" type="text" name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} style={{ margin: '5px', padding: '5px' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <input className="input" type="text" name="age" placeholder="Age" value={formData.age} onChange={handleChange} style={{ margin: '5px', padding: '5px' }} />
                <input className="input" type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} style={{ margin: '5px', padding: '5px' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <input className="input" type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} style={{ margin: '5px', padding: '5px' }} />
            </div>
            <div>
                <button className="button" onClick={handleNext} style={{ margin: '5px', padding: '5px' }}>Next</button>
            </div>
        </div>
    );
};

export default Page1;
