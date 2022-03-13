import { Container, Grid } from "@mui/material";

//Components
import Logo from "Component/Header/Logo";
import Nav from "Component/Header/Nav";
import Button from "Component/Header/Button";

const Header = () => {
    return (
        <Container maxWidth={false} sx={{ py: "10px" }}>
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
                <Grid item md={1.5}>
                    <Logo />
                </Grid>
                <Grid item md={5.5}>
                    <Nav />
                </Grid>
                <Grid item md={5}>
                    <Button />
                </Grid>
            </Grid>
        </Container>
    );
};
export default Header;