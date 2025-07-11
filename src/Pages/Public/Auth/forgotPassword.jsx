import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { COLOR } from '../../../Config/Color'
import Button from '@mui/material/Button'
import { blue } from '@mui/material/colors'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { useForgotPassword } from '../../../Hooks/auth'

export const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const { forgotPassword, loading } = useForgotPassword()

  const handleSubmit = () => {
    if (!email) return alert('Please enter your email')
    forgotPassword(email)
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          width: '100vw',
          height: '100vh',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '15%',
            width: '400px',
            height: '400px',
            background: 'linear-gradient(to bottom right, #4682B4, #87CEFA)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            opacity: 0.7
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            right: '10%',
            width: '400px',
            height: '400px',
            background: 'linear-gradient(to bottom right, #FFC0CB, #FF69B4)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            opacity: 0.7
          }}
        />

        <Stack
          direction='row'
          sx={{ justifyContent: 'center', py: '8rem', alignItems: 'center' }}
        >
          <Box
            sx={{
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '3rem 2rem',
              borderRadius: '16px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Box
              sx={{
                py: '0.6rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                style={{ width: '70px', objectFit: 'cover' }}
                src='/Logo/Rem.png'
                alt='Logo'
              />
            </Box>
            <Typography
              variant='h6'
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex'
              }}
              color='initial'
            >
              Forgot your Password?
            </Typography>
            <Typography
              variant='subtitle2'
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex'
              }}
              color='gray'
            >
              Enter your email to reset it
            </Typography>
            <Box sx={{ pt: '1rem' }}>
              <Typography variant="subtitle2" color="initial">Email</Typography>
              <TextField
                variant='outlined'
                placeholder='Enter your email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  width: '400px',
                  '& .MuiInputBase-root': {
                    borderRadius: '4px'
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#4CAF50'
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#388E3C'
                  },
                  '& .MuiInputLabel-root': {
                    color: '#757575'
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#4CAF50'
                  },
                  '& .MuiInputBase-input': {
                    padding: '10px 10px',
                    fontSize: '14px'
                  }
                }}
              />
            </Box>

            <Box sx={{ pt: '1rem' }}>
              <Button
                onClick={handleSubmit}
                disabled={loading}
                sx={{
                  width: '100%',
                  py: '0.5rem',
                  backgroundColor: COLOR.primary,
                  color: '#fff'
                }}
              >
                {loading ? 'Sending...' : 'Confirm'}
              </Button>
            </Box>

            <p style={{ marginTop: '12px' }}>
              <a
                href='/login'
                style={{
                  color: blue[500],
                  fontSize: '14px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none'
                }}
              >
                <KeyboardBackspaceIcon /> Return back to Login
              </a>
            </p>
          </Box>
        </Stack>
      </Box>
    </>
  )
}
