import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

export const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export const AboutUsData = [
    {
        label: "Place of Heaven",
        desc: "In REM you will feel divinity, piety, goodness, faith or right beliefs.",
        icon: <FavoriteBorderOutlinedIcon sx={{color: "#fff"}} />,
    },
    {
        label: "Bible Study",
        desc: "Learn the Bible enhance your wisdom, give you boldness about your faith.",
        icon: <AutoStoriesOutlinedIcon sx={{color: "#fff"}} />,
    },
];

export const cardData = [
    {
        id: "1",
        image: "/Images/church_7.png",
        title: "Youth Ministry",
        description:
            "Children’s ministry is the most important ministry in our church. This ministry helps kids learn about the Lord Jesus and how to start a personal relationship with Him.",
        actions: [{label: "Read More", variant: "contained"}],
    },
    {
        id: "2",
        image: "/Images/church_4.png",
        title: "Children Ministry",
        description:
            "Children’s ministry is the most important ministry in our church. This ministry helps kids learn about the Lord Jesus and how to start a personal relationship with Him.",
        actions: [{label: "Read More", variant: "contained"}],
    },
    {
        id: "3",
        image: "/Images/church_9.png",
        title: "Teenagers Ministry",
        description:
            "Children’s ministry is the most important ministry in our church. This ministry helps kids learn about the Lord Jesus and how to start a personal relationship with Him.",
        actions: [{label: "Read More", variant: "contained"}],
    },
    {
        id: "4",
        image: "/Images/church_8.png",
        title: "Women Ministry",
        description:
            "Children’s ministry is the most important ministry in our church. This ministry helps kids learn about the Lord Jesus and how to start a personal relationship with Him.",
        actions: [{label: "Read More", variant: "contained"}],
    },
    {
        id: "5",
        image: "/Images/church_1.png",
        title: "Prayer Ministry",
        description:
            "Children’s ministry is the most important ministry in our church. This ministry helps kids learn about the Lord Jesus and how to start a personal relationship with Him.",
        actions: [{label: "Read More", variant: "contained"}],
    },
];

export const blogPosts = [
    {
        image: "/Images/church_1.png",
        date: "Nov 19, 2024",
        title: "Help End Water Crisis for Families",
        description: "This is a short description of the blog post to give the reader an idea of its content.",
        btn: "Read More"
    },
    {
        image: "/Images/church_2.png",
        date: "Nov 18, 2024",
        title: "Spirit of the lord is from the New life",
        description: "An engaging description for another blog post to entice readers to click.",
        btn: "Read More"
    },
    {
        image: "/Images/church_3.png",
        date: "Nov 17, 2024",
        title: "Innocent But not wise a book by Bro Gbile",
        description: "A third description to demonstrate mapping through an array of blog posts.",
        btn: "Read More"
    },
];
