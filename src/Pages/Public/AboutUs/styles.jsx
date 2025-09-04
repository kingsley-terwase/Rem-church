import { COLOR } from "../../../Config/Color";

export const style = {
    loveStyle: {
        backgroundColor: COLOR.primary,
        borderRadius: "50%",
        width: "45px",
        px: "10px",
        py: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {backgroundColor: "gray"},
        cursor: "pointer",
    },
};
