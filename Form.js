// Form.js
import React, { useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import PDFDownloadButton from './PDFDownloadButton';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    date: '',
    checkbox1: false,
  });
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
  };

  const submitForm = async () => {
    
  };

  return (
    <div id="form-container">
      {page === 1 && <Page1 formData={formData} setFormData={setFormData} nextPage={nextPage} />}
      {page === 2 && <Page2 formData={formData} setFormData={setFormData} nextPage={nextPage} />}
      {page === 3 && <Page3 formData={formData} setFormData={setFormData} submitForm={submitForm} />}
      {page === 3 && <PDFDownloadButton formData={formData} />} {/* Render download button after completing the form */}
    </div>
  );
};

export default Form;
