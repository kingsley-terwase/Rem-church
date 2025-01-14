import React, { useState, useMemo } from "react";
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
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { alpha } from "@mui/material/styles";
import { FONT_FAMILY } from "../../../Config/Fonts";
import { green, red } from "@mui/material/colors";
import { initialMinistries } from "./static";

export default function MinistryTable() {
    const [ministries, setMinistries] = useState(initialMinistries);
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [newMinistry, setNewMinistry] = useState({
        name: "",
        description: "",
        date: "",
    });

    const handleChangePage = (_, newPage) => setPage(newPage);

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };

    const handleAddMinistry = () => {
        if (newMinistry.name && newMinistry.date && newMinistry.description) {
            setMinistries((prev) => [
                ...prev,
                { ...newMinistry, id: prev.length ? prev[prev.length - 1].id + 1 : 1 },
            ]);
            setNewMinistry({ name: "", description: "", date: "" });
        }
    };

    const handleDeleteSelected = () => {
        setMinistries((prev) => prev.filter((ministry) => !selected.includes(ministry.id)));
        setSelected([]);
    };

    const handleDeleteMinistry = (id) => {
        setMinistries((prev) => prev.filter((ministry) => ministry.id !== id));
    };

    const handleEditMinistry = (id) => {
        const editedMinistry = prompt("Edit ministry name:");
        if (editedMinistry) {
            setMinistries((prev) =>
                prev.map((ministry) => (ministry.id === id ? { ...ministry, name: editedMinistry } : ministry))
            );
        }
    };

    const displayedMinistries = useMemo(() => {
        return ministries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [ministries, page, rowsPerPage]);

    return (
        <Box sx={{ width: "100%" }}>
            <Toolbar
                sx={{
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 },
                    ...(selected.length > 0 && {
                        bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                    }),
                }}
            >
                <Typography sx={{ flex: "1 1 100%", fontFamily: FONT_FAMILY.primary }} variant="h6">
                    Ministry
                </Typography>
                {selected.length > 0 ? (
                    <Tooltip title="Delete Selected">
                        <IconButton onClick={handleDeleteSelected}>
                            <DeleteOutlineOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Add Ministry">
                        <IconButton onClick={handleAddMinistry}>
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
                            <TableCell>Description</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {displayedMinistries.map((ministry, index) => (
                            <TableRow
                                key={ministry.id}
                                hover
                                selected={selected.includes(ministry.id)}
                                sx={{ fontFamily: FONT_FAMILY.primary }}
                            >
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{ministry.name}</TableCell>
                                <TableCell>{ministry.description}</TableCell>
                                <TableCell>{ministry.date}</TableCell>
                                <TableCell>
                                    <Tooltip title="Edit">
                                        <IconButton onClick={() => handleEditMinistry(ministry.id)}>
                                            <EditOutlinedIcon sx={{ color: green[600] }} />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <IconButton onClick={() => handleDeleteMinistry(ministry.id)}>
                                            <DeleteOutlineOutlinedIcon sx={{ color: red[600] }} />
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
                count={ministries.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    );
}
