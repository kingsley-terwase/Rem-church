import Box from "@mui/material/Box";
import React from "react";
import PageHeader from "../../../Component/PageHeader";
import MinistryComponent from "../../../Component/MinistryComponent";
import {cardData} from "./static";

const DepartmentsPage = () => {
    return (
        <>
            <PageHeader title="Departments" breadcrumb="Departments" />
            <Box>
                <MinistryComponent cardData={cardData} />
            </Box>
        </>
    );
};

export default DepartmentsPage;
