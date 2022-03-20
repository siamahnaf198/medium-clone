import { Box, Stack, List, ListItem, ButtonBase } from "@mui/material";
import Link from "next/link";

//Styles
import styles from "Styles/Header/Nav.style";

const Nav = () => {
    return (
        <Box>
            <List component={Stack} direction="row" dense disablePadding sx={styles.List}>
                <ListItem dense disablePadding>
                    <Link href="/about">
                        <a><ButtonBase>About</ButtonBase></a>
                    </Link>
                </ListItem>
                <ListItem dense disablePadding>
                    <Link href="/contact">
                        <a><ButtonBase>Contact</ButtonBase></a>
                    </Link>
                </ListItem>
                <ListItem dense disablePadding>
                    <Link href="/me/follow">
                        <a className="last-follow-btn"><ButtonBase>Follow</ButtonBase></a>
                    </Link>
                </ListItem>
            </List>
        </Box>
    );
};
export default Nav;