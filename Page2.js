import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page2 = ({ formData, setFormData, nextPage }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        if (!formData.email || !formData.date || !formData.designation || !formData.experience) {
            toast.error('Please fill in all fields.');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address.');
            return;
        }
        nextPage();
    };

    return (
        <div>
            <h2>User Form Professional Details</h2>
            <div>
                <input className="input" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <input className="input" type="date" name="date" value={formData.date} onChange={handleChange} />
            </div>
            <div>
                <input className="input" type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} />
                <input className="input" type="text" name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} />
            </div>
            <div>
                <button className="button" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default Page2;
