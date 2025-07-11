import Grid from '@mui/material/Grid';
import React from 'react'
import Fade from '@mui/material/Fade';
import { ContactCard, IconWrapper } from './styles';
import Typography from '@mui/material/Typography';
import {
  Location24Regular,
  Phone24Regular,
  Mail24Regular,
  Clock24Regular,
} from '@fluentui/react-icons';
import CardContent from '@mui/material/CardContent';
const InfoCards = () => {
  const contactInfo = [
    {
      icon: <Location24Regular />,
      title: 'Visit Us',
      content: '123 Faith Street',
      subcontent: 'Downtown, ST 12345',
      subtext: 'Come worship with us'
    },
    {
      icon: <Phone24Regular />,
      title: 'Call Us',
      content: '(555) 123-4567',
      subcontent: '',
      subtext: 'Monday - Friday, 9AM - 5PM'
    },
    {
      icon: <Mail24Regular />,
      title: 'Email Us',
      content: 'hello@gracechurch.org',
      subcontent: '',
      subtext: 'Well respond within 24 hours'
    },
    {
      icon: <Clock24Regular />,
      title: 'Service Times',
      content: 'Sunday: 9:00 AM & 11:00 AM',
      subcontent: 'Wednesday: 7:00 PM',
      subtext: 'All are welcome'
    }
  ];
  
  return (
    <>
        <Grid item xs={12} lg={5}>
          <Grid container spacing={3}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} lg={12} key={index}>
                <Fade in timeout={600 + index * 200}>
                <ContactCard>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <IconWrapper>
                      {info.icon}
                    </IconWrapper>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {info.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      sx={{ mb: 1 }}
                    >
                      {info.content}
                    </Typography>
                    {info.subcontent && (
                      <Typography
                        variant="body1"
                        color="text.primary"
                        sx={{ mb: 1 }}
                      >
                        {info.subcontent}
                      </Typography>
                    )}
                    <Typography variant="body2" color="text.secondary">
                      {info.subtext}
                    </Typography>
                  </CardContent>
                </ContactCard>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default InfoCards
