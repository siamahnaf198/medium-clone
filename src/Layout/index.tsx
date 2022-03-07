import { FC } from "react";
import { Box } from "@mui/material";

//Layout Components
import Header from './Header';
import Footer from "./Footer";

const index: FC = ({ children }) => {
    return (
        <Box>
            <Header />
            {children}
            <Footer />
        </Box>
    );
};
export default index;