export default {
    Button: {
        textAlign: "right",
        a: {
            color: "primary.main",
            ml: "3px",
            textDecoration: "none",
            button: {
                fontSize: "15px",
                p: "7px 12px",
                borderRadius: "25px"
            },
            "&.getstarted": {
                button: {
                    border: (theme: { palette: { primary: { main: any; }; }; }) => `1px solid ${theme.palette.primary.main}`,
                    px: "20px"
                }
            }
        }
    }
}