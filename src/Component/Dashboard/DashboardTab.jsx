import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import DashboardCard from "./DashCard";
import {FONT_FAMILY} from "../../Config/Fonts";
import { blue, cyan } from "@mui/material/colors";

const DashboardTab = ({children, tabs = [{label: "", key: 0}], activeTab, updateActiveTab}) => {
    const stylesMap = {
        default: {
            fontSize: "14px",
            borderRadius: "8px",
            padding: 1,
            fontFamily: FONT_FAMILY.primary,
            cursor: "pointer",
            minWidth: "fit-content",
        },

        active: {
            fontWeight: 700,
            color: cyan[600],
            fontFamily: FONT_FAMILY.primary,
            backgroundColor: "#0a0812",
            padding: "6px 20px",
            borderRadius: "30px",
        },

        inactive: {
            fontWeight: 500,
            color: "#fff",
            backgroundColor: blue[300],
            fontFamily: FONT_FAMILY.primary,
            padding: "6px 20px",
            borderRadius: "30px",
        },
    };

    return (
        <Box>
            <DashboardCard>
                <Stack
                    direction="row"
                    alignItems="center"
                    p="10px"
                    borderRadius="50px"
                    gap={2}
                    sx={{
                      overflowX: "auto",
                      backgroundColor: "whitesmoke",
                    }}
                >
                    {tabs?.map((tab, index) => {
                        return (
                            <Box
                                key={index}
                                onClick={() => updateActiveTab(tab.key)}
                                sx={[stylesMap.default, activeTab === tab.key ? stylesMap.active : stylesMap.inactive]}
                            >
                                {tab?.label}
                            </Box>
                        );
                    })}
                </Stack>
            </DashboardCard>
            {children || null}
        </Box>
    );
};

export default DashboardTab;
