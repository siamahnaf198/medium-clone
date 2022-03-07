import { Box, Stack, List, ListItem, ButtonBase } from "@mui/material";
import Link from "next/link";

const Nav = () => {
    return (
        <Box>
            <List component={Stack} direction="row" dense disablePadding>
                <ListItem dense disablePadding>
                    <Link href="/about">
                        <a><ButtonBase>About</ButtonBase></a>
                    </Link>
                </ListItem>
                <ListItem dense disablePadding>
                    <Link href="/about">
                        <a><ButtonBase>Contact</ButtonBase></a>
                    </Link>
                </ListItem>
                <ListItem dense disablePadding>
                    <Link href="/about">
                        <a><ButtonBase>Contact</ButtonBase></a>
                    </Link>
                </ListItem>
            </List>
        </Box>
    );
};
export default Nav;