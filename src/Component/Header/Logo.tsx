import { Box } from "@mui/material";
import Link from "next/link";

//Logo
import Logos from "Assets/logo.png";

const Logo = () => {
    return (
        <Box>
            <Link href="/">
                <a>
                    <Box width="100%" component="img" src={Logos} alt="Logo" />
                </a>
            </Link>
        </Box>
    );
};
export default Logo;