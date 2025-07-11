import React from 'react'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import PeopleIcon from '@mui/icons-material/People'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import EventIcon from '@mui/icons-material/Event'
import ChurchIcon from '@mui/icons-material/Church'
import { FONT_FAMILY } from '../../Config/Fonts'

const cards = [
  {
    title: 'Total Members',
    value: '1,230',
    icon: <PeopleIcon fontSize='large' sx={{ color: '#fff' }} />,
    color: 'green'
  },
  {
    title: 'Total Donations',
    value: '$54,000',
    icon: <VolunteerActivismIcon fontSize='large' sx={{ color: '#fff' }} />,
    color: '#000'
  },
  {
    title: 'Upcoming Events',
    value: '8 Events',
    icon: <EventIcon fontSize='large' sx={{ color: '#fff' }} />,
    color: 'orange'
  },
  {
    title: 'Active Ministries',
    value: '14 Ministries',
    icon: <ChurchIcon fontSize='large' sx={{ color: '#fff' }} />,
    color: 'darkred'
  }
]

const DashboardCards = () => {
  const theme = useTheme()

  return (
    <Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr',
            lg: '1fr 1fr 1fr 1fr',
            xl: '1fr 1fr 1fr 1fr'
          },
          gap: 2
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#fff',
              borderRadius: 2,
              py: 2,
              boxShadow: theme.shadows[3],
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: theme.shadows[6],
                transform: 'translateY(-4px)'
              }
            }}
          >
            <Stack spacing={0.1}>
              <Box sx={{ px: 2 }}>
                <Box
                  sx={{
                    width: '15px',
                    height: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 40,
                    p:3,
                    backgroundColor: card.color,
                    color: theme.palette.text.primary
                  }}
                >
                  {React.cloneElement(card.icon, { fontSize: 'medium' })}
                </Box>
              </Box>

              <Box sx={{ px: 2 }}>
                <Typography variant='subtitle2' color='text.secondary'>
                  {card.title}
                </Typography>
                <Typography variant='h6' fontWeight='600'>
                  {card.value}
                </Typography>
              </Box>

              <Divider />
              <Box sx={{ pt: 1, px: 2 }}>
                <Button
                  variant='text'
                  size='small'
                  sx={{
                    backgroundColor: '#E3F2FD',
                    fontFamily: FONT_FAMILY.primary,
                    display: 'inline-block',
                    alignSelf: 'flex-start',
                    textTransform: 'capitalize',
                    fontWeight: 600,
                    fontSize: '12px',
                    borderRadius: '40px',
                    px: 1,
                    py: '0.1'
                  }}
                >
                  View details
                </Button>
              </Box>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default DashboardCards
