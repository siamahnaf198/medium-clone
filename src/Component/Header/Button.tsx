import { Box, ButtonBase } from "@mui/material";
import Link from "next/link";

//Styles
import styles from "Styles/Header/Button.style";

const Button = () => {
    return (
        <Box sx={styles.Button}>
            <Link href="/me/signin">
                <a>
                    <ButtonBase>
                        Sign In
                    </ButtonBase>
                </a>
            </Link>
            <Link href="/me/register-account">
                <a className="getstarted">
                    <ButtonBase>
                        Get started
                    </ButtonBase>
                </a>
            </Link>
        </Box>
    );
};
export default Button;