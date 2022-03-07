import { Box, Grid } from "@mui/material";

//Components
import Logo from "Component/Header/Logo";
import Nav from "Component/Header/Nav";
import Button from "Component/Header/Button";

const Header = () => {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item md={2}>
                    <Logo />
                </Grid>
                <Grid item md={5}>
                    <Nav />
                </Grid>
                <Grid item md={5}>
                    <Button />
                </Grid>
            </Grid>
        </Box>
    );
};
export default Header;