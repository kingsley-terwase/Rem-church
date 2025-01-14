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
import {initialChurches} from "./static";

export default function ChurchTable() {
    const [churches, setChurches] = useState(initialChurches);
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [newChurch, setNewChurch] = useState({
        name: "",
        members: "",
        region: "",
        date: "",
    });

    const handleChangePage = (_, newPage) => setPage(newPage);

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };

    const handleAddChurch = () => {
        if (newChurch.name && newChurch.date && newChurch.members && newChurch.region) {
            setChurches((prev) => [...prev, {...newChurch, id: prev.length ? prev[prev.length - 1].id + 1 : 1}]);
            setNewChurch({name: "", date: "", attendees: ""});
        }
    };

    const handleDeleteSelected = () => {
        setChurches((prev) => prev.filter((church) => !selected.includes(church.id)));
        setSelected([]);
    };

    const handleDeleteChurch = (id) => {
        setChurches((prev) => prev.filter((church) => church.id !== id));
    };

    const handleEditChurch = (id) => {
        const editedChurch = prompt("Edit church name:");
        if (editedChurch) {
            setChurches((prev) => prev.map((church) => (church.id === id ? {...church, name: editedChurch} : church)));
        }
    };

    const displayedChurches = useMemo(() => {
        return churches.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [churches, page, rowsPerPage]);

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
                    Church
                </Typography>
                {selected.length > 0 ? (
                    <Tooltip title="Delete Selected">
                        <IconButton onClick={handleDeleteSelected}>
                            <DeleteOutlineOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Add Church">
                        <IconButton onClick={handleAddChurch}>
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
                            <TableCell>Members</TableCell>
                            <TableCell>Region</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {displayedChurches.map((church, index) => (
                            <TableRow
                                key={church.id}
                                hover
                                selected={selected.includes(church.id)}
                                sx={{fontFamily: FONT_FAMILY.primary}}
                            >
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{church.name}</TableCell>
                                <TableCell>{church.members}</TableCell>
                                <TableCell>{church.region}</TableCell>
                                <TableCell>{church.date}</TableCell>
                                <TableCell>
                                    <Tooltip title="Edit">
                                        <IconButton onClick={() => handleEditChurch(church.id)}>
                                            <EditOutlinedIcon sx={{color: green[600]}} />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <IconButton onClick={() => handleDeleteChurch(church.id)}>
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
                count={churches.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    );
}
