import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";



export const cards = [
  {
      icon: <LocationOnIcon sx={{fontSize: 50, color: "white"}} />,
      title: "Our Location",
      description: "123 Main Street, City, Country",
  },
  {
      icon: <EmailIcon sx={{fontSize: 50, color: "white"}} />,
      title: "Email Us",
      description: "contact@domain.com",
  },
  {
      icon: <HeadsetMicIcon sx={{fontSize: 50, color: "white"}} />,
      title: "Call Us",
      description: "+123 456 7890",
  },
];