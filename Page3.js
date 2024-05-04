import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page3 = ({ formData, setFormData, submitForm }) => {
    const handleCheckChange = (e) => {
        if (formData.checkbox) {
            toast.error('Please Agree to our conditions.');
            return;
        }
        setFormData({ ...formData, [e.target.name]: e.target.checked });
    };

    const handleChange = (e) => {
        if (!formData.role || !formData.description) {
            toast.error('Please fill in all fields.');
            return;
        }
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        submitForm();
    };

    return (
        <div>
            <h2>User Submission Details</h2>
            <div>
                <input className="input" type="text" name="role" placeholder="Job Role" value={formData.role} onChange={handleChange} />
                <input className="input" type="text" name="description" placeholder="Job Description" value={formData.description} onChange={handleChange} />
            </div>
            <label>
                <input type="checkbox" name="checkbox1" checked={formData.checkbox1} onChange={handleCheckChange} />
                I Agree to the terms and conditions
            </label>
            <div>
                <button className="button" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Page3;
