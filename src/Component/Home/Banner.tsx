import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";

//Logo
import Logo from "Assets/m.png";

//Styles
import styles from "Styles/Home/Banner.styles";

const Banner = () => {
    return (
        <Box sx={styles.Container}>
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
                <Grid item md={8}>
                    <Box>
                        <Typography variant="h3" component="h3" sx={styles.Text}>
                            <Link href="/">
                                <a>Medium</a>
                            </Link> is a place to <br />
                            write, read, and <br /> connect
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ mt: "8px" }}>
                            It's easy and free to post your thinking on any topic and connect with millions readers.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={4}>
                    <Box>
                        <Box sx={{ width: "75%" }} component="img" src={Logo} alt="Logo" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Banner;