import React, {useState, useMemo} from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {alpha} from "@mui/material/styles";
import {FONT_FAMILY} from "../../../Config/Fonts";
import {green, red} from "@mui/material/colors";
import { initialEvents } from "./static";

export default function ChurchEventsTable() {
    const [events, setEvents] = useState(initialEvents);
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [newEvent, setNewEvent] = useState({
        name: "",
        date: "",
        attendees: "",
    });

    const handleSelectAll = (event) => {
        setSelected(event.target.checked ? events.map((event) => event.id) : []);
    };

    const handleRowClick = (id) => {
        setSelected((prev) => (prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]));
    };

    const handleChangePage = (_, newPage) => setPage(newPage);

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };

    const handleAddEvent = () => {
        if (newEvent.name && newEvent.date && newEvent.attendees) {
            setEvents((prev) => [...prev, {...newEvent, id: prev.length ? prev[prev.length - 1].id + 1 : 1}]);
            setNewEvent({name: "", date: "", attendees: ""});
        }
    };

    const handleDeleteSelected = () => {
        setEvents((prev) => prev.filter((event) => !selected.includes(event.id)));
        setSelected([]);
    };

    const handleDeleteEvent = (id) => {
        setEvents((prev) => prev.filter((event) => event.id !== id));
    };

    const handleEditEvent = (id) => {
        const editedEvent = prompt("Edit event name:");
        if (editedEvent) {
            setEvents((prev) => prev.map((event) => (event.id === id ? {...event, name: editedEvent} : event)));
        }
    };

    const displayedEvents = useMemo(() => {
        return events.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [events, page, rowsPerPage]);

    return (
        <Box sx={{width: "100%"}}>
            <Toolbar
                sx={{
                    pl: {sm: 2},
                    pr: {xs: 1, sm: 1},
                    ...(selected.length > 0 && {
                        bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                    }),
                }}
            >
                <Typography sx={{flex: "1 1 100%", fontFamily: FONT_FAMILY.primary}} variant="h6">
                    Church Events
                </Typography>
                {selected.length > 0 ? (
                    <Tooltip title="Delete Selected">
                        <IconButton onClick={handleDeleteSelected}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Add Event">
                        <IconButton>
                            <AddCircleIcon />
                        </IconButton>
                    </Tooltip>
                )}
            </Toolbar>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Attendees</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {displayedEvents.map((event, index) => (
                            <TableRow
                                key={event.id}
                                hover
                                selected={selected.includes(event.id)}
                                sx={{fontFamily: FONT_FAMILY.primary}}
                            >
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{event.name}</TableCell>
                                <TableCell>{event.date}</TableCell>
                                <TableCell>{event.attendees}</TableCell>
                                <TableCell>
                                    <Tooltip title="Edit">
                                        <IconButton onClick={() => handleEditEvent(event.id)}>
                                            <EditOutlinedIcon sx={{color: green[600]}} />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <IconButton onClick={() => handleDeleteEvent(event.id)}>
                                            <DeleteOutlineOutlinedIcon sx={{color: red[600]}} />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                count={events.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    );
}
