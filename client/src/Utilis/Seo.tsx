import { FC } from "react";
import Head from "next/head";

type Props = {
    title?: String
}

const Seo: FC<Props> = ({ title = "Medium Blog | Siam Ahnaf" }) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
};
export default Seo;