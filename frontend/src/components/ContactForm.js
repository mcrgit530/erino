import React from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { StyledTextField } from './StyledComponents';

const ContactForm = ({ formData, onInputChange, onSubmit, editingContact }) => {
  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={onInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={onInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={onInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={onInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            label="Company"
            name="company"
            value={formData.company}
            onChange={onInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            label="Job Title"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={onInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {editingContact ? 'Update' : 'Add'} Contact
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
