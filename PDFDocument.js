// PDFDocument.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff', 
    paddingVertical: 20,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0', 
    borderRadius: 10,
    width: '80%',
  },
  sectionHeader: {
    fontSize: 20, 
    fontWeight: 'bold',
    backgroundColor: '#3498db',
    color: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginBottom: 10,
    textAlign: 'center', 
  },
  label: {
    marginBottom: 5,
    fontSize: 12, 
  },
});

const PDFDocument = ({ formData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>User Form Details</Text>
          <Text style={styles.label}>Name: {formData.name}</Text>
          <Text style={styles.label}>Address: {formData.address}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>User Personal Details</Text>
          <Text style={styles.label}>Email: {formData.email}</Text>
          <Text style={styles.label}>Date: {formData.date}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>User Status</Text>
          <Text style={styles.label}>Checkbox 1: {formData.checkbox1 ? 'Checked' : 'Unchecked'}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
