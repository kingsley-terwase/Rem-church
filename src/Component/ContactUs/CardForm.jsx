import React, { useState } from 'react'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Fade from '@mui/material/Fade'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import { ContactForm, StyledButton, StyledTextField } from './styles'
import {
  Building24Regular,
  Heart24Regular,
  Mail24Regular,
  Person24Regular,
  Phone24Regular,
  Send24Regular
} from '@fluentui/react-icons'

const CardForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setShowSuccess(true)

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setShowSuccess(false)
    }, 3000)
  }

  return (
    <>
      <Grid item xs={12} lg={7}>
        <Fade in timeout={800}>
          <ContactForm elevation={0}>
            <Box display='flex' alignItems='center' mb={3}>
              <Heart24Regular style={{ marginRight: 8, color: '#667eea' }} />
              <Typography variant='h5' fontWeight={600}>
                Send Us a Message
              </Typography>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {showSuccess && (
              <Alert severity='success' sx={{ mb: 3 }}>
                Thank you for your message! Well get back to you soon.
              </Alert>
            )}

            <Box component='form' onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label='Full Name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Person24Regular style={{ color: '#666' }} />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label='Email Address'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Mail24Regular style={{ color: '#666' }} />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label='Phone Number'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Phone24Regular style={{ color: '#666' }} />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label='Subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Building24Regular style={{ color: '#666' }} />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label='Your Message'
                    name='message'
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us how we can help you or what you'd like to know more about..."
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box textAlign='center' mt={2}>
                    <StyledButton
                      type='submit'
                      size='large'
                      startIcon={<Send24Regular />}
                    >
                      Send Message
                    </StyledButton>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </ContactForm>
        </Fade>
      </Grid>
    </>
  )
}

export default CardForm
