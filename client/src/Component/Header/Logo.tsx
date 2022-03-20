import { Box } from "@mui/material";
import Link from "next/link";

//Logo
import Logos from "Assets/logo.png";

const Logo = () => {
    return (
        <Box>
            <Link href="/">
                <a>
                    <Box
                        component="img"
                        src={Logos}
                        alt="Logo"
                        sx={{ width: "100%", mt: "5px" }}
                    />
                </a>
            </Link>
        </Box>
    );
};
export default Logo;