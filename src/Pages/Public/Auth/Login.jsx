import react, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import HeightIcon from '@mui/icons-material/Height'
import Typography from '@mui/material/Typography'
import { COLOR } from '../../../Config/Color'
import Button from '@mui/material/Button'
import { blue } from '@mui/material/colors'
import { useLogin } from '../../../Hooks/auth'
import { useNavigate } from 'react-router-dom'
import {
  toastSuccess,
  toastErr,
  toastInfo,
  toastWarn
} from '../../../Utilities/alertService'
import CircularProgress from '@mui/material/CircularProgress'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, loading, error } = useLogin()
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)

  const handleTogglePassword = () => {
    setShowPassword(prevPassword => !prevPassword)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10))
    }, 800)
    return () => {
      clearInterval(timer)
    }
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const result = await login(email, password)
      if (result) {
        toastSuccess('Login Successful.')
        navigate('/dashboard')
      } else {
        toastErr(error?.response?.data?.message || error)
      }
    } catch (error) {
      toastErr(error?.response?.data?.message || 'An Unexpected error occurred')
    }
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
                py: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                style={{ width: '80px', objectFit: 'cover' }}
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
              Login
            </Typography>
            <Box
              sx={{
                pt: '1rem'
              }}
            >
              <TextField
                id='custom-textfield'
                label='Email'
                variant='outlined'
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
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
            <Box
              sx={{
                pt: '2rem'
              }}
            >
              <TextField
                id='custom-textfield'
                label='Password'
                type={showPassword ? 'text' : 'password'}
                variant='outlined'
                value={password}
                onChange={e => setPassword(e.target.value)}
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
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton onClick={handleTogglePassword} edge='end'>
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
            <Box
              sx={{
                pt: '2rem'
              }}
            >
              <Button
                sx={{
                  width: '100%',
                  backgroundColor: COLOR.primary,
                  color: '#fff'
                }}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <>
                    Logging in ...
                    <CircularProgress
                      size={'25px'}
                      color='#fff'
                      variant='determinate'
                      value={progress}
                    />
                  </>
                ) : (
                  'Submit'
                )}
              </Button>
            </Box>

            <Stack
              direction={'row'}
              sx={{ justifyContent: 'space-between', alignItems: 'center' }}
            >
              <Box>
                <p style={{ marginTop: '12px' }}>
                  <a
                    href='/'
                    style={{
                      color: blue[400],
                      fontSize: '13px',
                      textDecoration: 'none'
                    }}
                  >
                    Note: Only admins can login
                  </a>
                </p>
              </Box>
              <Box>
                <p style={{ marginTop: '12px' }}>
                  <a
                    href='/forgot-password'
                    style={{
                      color: blue[400],
                      fontSize: '13px',
                      textDecoration: 'none'
                    }}
                  >
                    forgot password?
                  </a>
                </p>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  )
}
