// PDFDownloadButton.js
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';

const PDFDownloadButton = ({ formData }) => {
  return (
    <PDFDownloadLink document={<PDFDocument formData={formData} />} fileName="form.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download PDF'
      }
    </PDFDownloadLink>
  );
};

export default PDFDownloadButton;
