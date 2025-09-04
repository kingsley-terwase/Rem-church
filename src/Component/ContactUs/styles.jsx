import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { COLOR } from '../../Config/Color';

export const StyledSection = styled(Box)(({ theme }) => ({
  backgroundColor: 'whitesmoke',
  minHeight: '100%',  
  padding: theme.spacing(8, 0),

}));

export const ContactCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'all 0.3s ease-in-out',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  }
}));

export const ContactForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: theme.spacing(2),
}));

export const IconWrapper = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  backgroundColor: COLOR.primary,
  margin: '0 auto 16px',
  '& svg': {
    fontSize: '24px'
  }
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: COLOR.primary,
  color: 'white',
  padding: theme.spacing(1.5, 4),
  borderRadius: theme.spacing(3),
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: COLOR.primary,
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
  }
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
    '&:hover fieldset': {
      borderColor: '#667eea'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#667eea'
    }
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#667eea'
  }
}));