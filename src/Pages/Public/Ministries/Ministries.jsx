import Box from "@mui/material/Box";
import React from "react";
import PageHeader from "../../../Component/PageHeader";
import Container from "@mui/material/Container";
import {ministries} from "./static";
import MinistryComponent from "../../../Component/MinistryComponent";
const Ministries = () => {
    return (
        <>
            <PageHeader title="Ministries" breadcrumb="Ministries" />
            <MinistryComponent
                cardData={ministries}
            />
        </>
    );
};

export default Ministries;
