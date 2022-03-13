export default {
    Container: {
        bgcolor: "primary.main_primary",
        py: "5em",
        px: "2em",
        borderTop: (theme: { palette: { text: { primary: any; }; }; }) => `1px solid ${theme.palette.text.primary}`,
        borderBottom: (theme: { palette: { text: { primary: any; }; }; }) => `1px solid ${theme.palette.text.primary}`
    },
    Text: {
        a: {
            color: "text.primary"
        }
    }
}