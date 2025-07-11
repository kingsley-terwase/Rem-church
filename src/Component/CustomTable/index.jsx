import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TablePagination from '@mui/material/TablePagination'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined'

const demoEvents = [
  { id: 1, name: 'Sunday Service', date: '2025-04-06', attendees: 120, status: 'pending' },
  { id: 2, name: 'Youth Fellowship', date: '2025-04-08', attendees: 45, status: 'approved' },
  { id: 3, name: 'Choir Practice', date: '2025-04-10', attendees: 30, status: 'rejected' },
  { id: 4, name: 'Bible Study', date: '2025-04-12', attendees: 60, status: 'approved' },
  { id: 5, name: 'Community Outreach', date: '2025-04-14', attendees: 80, status: 'pending' },
  { id: 6, name: 'Prayer Night', date: '2025-04-16', attendees: 40, status: 'rejected' },
  { id: 7, name: 'Sunday School', date: '2025-04-20', attendees: 90, status: 'approved' }
]

export default function CustomTable() {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (_, newPage) => setPage(newPage)
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10))
    setPage(0)
  }

  const getStatusInfo = (status) => {
    switch (status) {
      case 'approved':
        return { label: 'Approved', color: 'success', icon: <CheckCircleOutlineIcon fontSize="small" /> }
      case 'rejected':
        return { label: 'Rejected', color: 'error', icon: <CancelOutlinedIcon fontSize="small" /> }
      default:
        return { label: 'Pending', color: 'warning', icon: <HourglassEmptyOutlinedIcon fontSize="small" /> }
    }
  }

  const displayedEvents = demoEvents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <Box sx={{ width: '100%', my: 3, backgroundColor: '#fff', borderRadius: '20px', p: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight:'600', mb: 1 }}>
        All Events
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Attendees</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedEvents.map((event, index) => {
              const statusInfo = getStatusInfo(event.status)
              return (
                <TableRow key={event.id}>
                  <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell>{event.name}</TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>{event.attendees}</TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{borderRadius: '30px', px:0.8, py:0.2}}
                      color={statusInfo.color}
                      startIcon={statusInfo.icon}
                    >
                      {statusInfo.label}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary">
                      <VisibilityOutlinedIcon />
                    </IconButton>
                    <IconButton color="error">
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={demoEvents.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  )
}
