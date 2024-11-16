import { styled } from '@mui/system';
import { IconButton, TextField } from '@mui/material';

export const StyledEditButton = styled(IconButton)({
  color: '#1976d2', 
  '&:hover': {
    backgroundColor: 'rgba(25, 118, 210, 0.08)', 
  },
});

export const StyledDeleteButton = styled(IconButton)({
  color: '#d32f2f', 
  '&:hover': {
    backgroundColor: 'rgba(211, 47, 47, 0.08)', 
  },
});

export const StyledTextField = styled(TextField)({
  margin: '8px 0',
  '& .MuiInputBase-root': {
    borderRadius: '8px',
    backgroundColor: '#f4f6f8',
    '&:hover': {
      backgroundColor: '#e3f2fd',
    },
  },
  '& .MuiFormLabel-root': {
    color: '#1976d2', 
  },
  '& .MuiInputBase-input': {
    padding: '12px 14px',
  },
});
