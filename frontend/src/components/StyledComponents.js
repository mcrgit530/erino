import { styled } from '@mui/system';
import { IconButton, TextField } from '@mui/material';

// Styled Buttons for Edit and Delete
export const StyledEditButton = styled(IconButton)({
  color: '#1976d2', // Blue color for Edit
  '&:hover': {
    backgroundColor: 'rgba(25, 118, 210, 0.08)', // Light blue hover effect
  },
});

export const StyledDeleteButton = styled(IconButton)({
  color: '#d32f2f', // Red color for Delete
  '&:hover': {
    backgroundColor: 'rgba(211, 47, 47, 0.08)', // Light red hover effect
  },
});

// Styled TextField for inputs
export const StyledTextField = styled(TextField)({
  margin: '8px 0',
  '& .MuiInputBase-root': {
    borderRadius: '8px',
    backgroundColor: '#f4f6f8', // Light background
    '&:hover': {
      backgroundColor: '#e3f2fd', // Light blue background on hover
    },
  },
  '& .MuiFormLabel-root': {
    color: '#1976d2', // Label color
  },
  '& .MuiInputBase-input': {
    padding: '12px 14px',
  },
});
