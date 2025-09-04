import React, { useEffect, useState } from 'react'
import {
  Box,
  Stack,
  TextField,
  Typography,
  Button,
  CircularProgress,
  InputAdornment,
  IconButton,
  Fade,
  Paper,
  Container,
  Divider,
  Link,
  alpha,
  useTheme,
  useMediaQuery
} from '@mui/material'
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Login as LoginIcon,
  Security,
  AdminPanelSettings
} from '@mui/icons-material'
import { useLogin } from '../../../Hooks/auth'
import { useNavigate } from 'react-router-dom'
import {
  toastSuccess,
  toastErr,
  toastInfo,
  toastWarn
} from '../../../Utilities/alertService'
import { COLOR } from '../../../Config/Color'
import { FONT_FAMILY } from '../../../Config/Fonts'



export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  const { login, loading, error } = useLogin()
  const navigate = useNavigate()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (loading) {
      const timer = setInterval(() => {
        setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10))
      }, 200)
      return () => clearInterval(timer)
    }
  }, [loading])

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      toastWarn('Please fill in all required fields')
      return
    }

    try {
      const result = await login(email, password)
      if (result) {
        toastSuccess('Welcome back! Login successful.')
        navigate('/dashboard')
      } else {
        toastErr(error?.response?.data?.message || 'Login failed. Please try again.')
      }
    } catch (error) {
      toastErr(error?.response?.data?.message || 'An unexpected error occurred')
    }
  }

  const isFormValid = email && password && !loading

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, 
          ${alpha('#667eea', 0.1)} 0%, 
          ${alpha('#764ba2', 0.1)} 25%, 
          ${alpha('#f093fb', 0.1)} 50%, 
          ${alpha('#f5576c', 0.1)} 75%, 
          ${alpha('#4facfe', 0.1)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: { xs: '200px', md: '350px' },
          height: { xs: '200px', md: '350px' },
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.3,
          animation: 'float 6s ease-in-out infinite'
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: { xs: '150px', md: '300px' },
          height: { xs: '150px', md: '300px' },
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.3,
          animation: 'float 8s ease-in-out infinite reverse'
        }}
      />

      <Container maxWidth="sm">
        <Fade in={isVisible} timeout={800}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: `0 20px 40px ${alpha('#000', 0.1)}`,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Header Section */}
            <Stack spacing={1} alignItems="center" sx={{ mb: 4 }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box component='img' src='/Logo/Rem.png' sx={{ width: '100%', height: 'auto' }} />
              </Box>

              <Stack spacing={1} alignItems="center">
                <Typography
                  variant="h4"
                  fontWeight="700"
                  sx={{
                    fontFamily: FONT_FAMILY.secondary,
                    background: COLOR.primary,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textAlign: 'center'
                  }}
                >
                  Welcome Back
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                  sx={{ maxWidth: '300px' }}
                >
                  Sign in to access your admin dashboard
                </Typography>
              </Stack>
            </Stack>

            {/* Form Section */}
            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    )
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: alpha('#f8fafc', 0.8),
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#f8fafc',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: COLOR.primary
                        }
                      },
                      '&.Mui-focused': {
                        backgroundColor: '#fff',
                        boxShadow: `0 0 0 2px ${alpha('#667eea', 0.1)}`,
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: COLOR.primary,
                          borderWidth: '2px'
                        }
                      }
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: COLOR.primary
                    }
                  }}
                />

                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="outlined"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePassword}
                          edge="end"
                          sx={{
                            color: 'text.secondary',
                            '&:hover': { color: COLOR.primary }
                          }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: alpha('#f8fafc', 0.8),
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#f8fafc',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: COLOR.primary
                        }
                      },
                      '&.Mui-focused': {
                        backgroundColor: '#fff',
                        boxShadow: `0 0 0 2px ${alpha('#667eea', 0.1)}`,
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: COLOR.primary,
                          borderWidth: '2px'
                        }
                      }
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: COLOR.primary
                    }
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={!isFormValid}
                  startIcon={loading ? null : <LoginIcon />}
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    background: COLOR.primary,
                    boxShadow: `0 8px 16px ${alpha('#667eea', 0.3)}`,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #0b62e6ff 0%, #1c3daaff 100%)',
                      boxShadow: `0 12px 24px ${alpha('#667eea', 0.4)}`,
                      transform: 'translateY(-2px)'
                    },
                    '&:disabled': {
                      background: 'linear-gradient(135deg, #cbd5e0 0%, #a0aec0 100%)',
                      boxShadow: 'none',
                      transform: 'none'
                    }
                  }}
                >
                  {loading ? (
                    <Stack direction="row" spacing={2} alignItems="center">
                      <CircularProgress
                        size={20}
                        sx={{ color: 'white' }}
                        variant="determinate"
                        value={progress}
                      />
                      <Typography>Signing in...</Typography>
                    </Stack>
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </Stack>
            </Box>

            {/* Footer Section */}
            <Box sx={{ mt: 4 }}>
              <Divider sx={{ my: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  Need Help?
                </Typography>
              </Divider>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Security sx={{ fontSize: 16, color: 'text.secondary' }} />
                  <Link
                    href="/"
                    underline="hover"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                      fontSize: 13,
                      transition: 'color 0.3s ease',
                      '&:hover': {
                        color: COLOR.primary,
                      }
                    }}
                  >
                    Admin Access Only. Go back to Home
                  </Link>
                </Stack>

                <Link
                  href="/forgot-password"
                  underline="hover"
                  sx={{
                    color: COLOR.primary,
                    fontWeight: 500,
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: COLOR.primary,
                    }
                  }}
                >
                  Forgot Password?
                </Link>
              </Stack>
            </Box>
          </Paper>
        </Fade>
      </Container>

      {/* CSS Keyframes for animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}
      </style>
    </Box>
  )
}