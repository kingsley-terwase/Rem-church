import CopyAllSharpIcon from "@mui/icons-material/CopyAllSharp";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import UpdateIcon from '@mui/icons-material/Update';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WarningIcon from '@mui/icons-material/Warning';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ChurchIcon from '@mui/icons-material/Church';
import GroupIcon from '@mui/icons-material/Group';

export const DashCardData = [
    {
        icon: <EventNoteIcon />,
        label: "Events Details",
        title: "223",
        dateIcon: <CalendarMonthIcon sx={{fontSize: "22px", color: "gray"}} />,
        labelDate: "Last month",
    },
    {
        icon: <AccountBalanceWalletIcon />,
        label: "Our Finances",
        title: "$2,000,000.00",
        dateIcon: <UpdateIcon sx={{fontSize: "22px", color: "gray"}} />,
        labelDate: "2hrs ago",
    },
    {
        icon: <ChurchIcon />,
        label: "Our Churches",
        title: "252...",
        dateIcon: <LocalOfferIcon sx={{fontSize: "22px", color: "gray"}} />,
        labelDate: "Track from Github",
    },
    {
        icon: <GroupIcon />,
        label: "Our ministries",
        title: "6",
        dateIcon: <WarningIcon sx={{fontSize: "22px", color: "gray"}} />,
        labelDate: "Last month",
    },
];
