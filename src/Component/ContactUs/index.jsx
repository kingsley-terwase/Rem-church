import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import InfoCards from './InfoCards'
import { StyledSection } from './styles'
import CardForm from './CardForm'
import { FONT_FAMILY } from '../../Config/Fonts'

export default function ContactUs () {
  return (
    <StyledSection>
      <Container maxWidth='lg'>
        <Box textAlign='center' mb={8}>
          <Typography
            variant='h5'
            sx={{
              fontWeight: 700,
              fontFamily: FONT_FAMILY.tertiary,
              mb: 2
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              fontFamily: FONT_FAMILY.tertiary,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            We'd love to hear from you. Whether you have questions about our
            services, want to get involved, or just want to say hello, we're
            here for you.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <InfoCards />
          <CardForm />
        </Grid>

        <Box textAlign='center' mt={8}>
          <Typography variant='body1' color='text.secondary'>
            Can't find what you're looking for? Feel free to reach out to us
            directly. We're here to serve our community and answer any questions
            you may have.
          </Typography>
        </Box>
      </Container>
    </StyledSection>
  )
}
