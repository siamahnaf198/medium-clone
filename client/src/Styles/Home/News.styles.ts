export default {
    Card: {
        "&:hover": {
            "& .mainImage": {
                transform: 'scale(1.05)'
            }
        }
    },
    Image: {
        objectFit: "cover",
        objectPosition: "center",
        transition: "0.2s ease",
        overflow: "hidden"
    },
    Content: {
        h6: {
            fontSize: "18px",
            fontWeight: 600
        },
        "& p": {
            fontSize: "14px",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "1",
            overflow: "hidden"
        }
    }
}