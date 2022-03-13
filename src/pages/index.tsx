import { Container } from "@mui/material";

//Seo
import Seo from "Utilis/Seo";

//Layout
import Layout from "Layout";

//Components
import Banner from "Component/Home/Banner";

const Index = () => {
  return (
    <Layout>
      <Seo />
      <Container maxWidth={false}>
        <Banner />
      </Container>
    </Layout>
  );
};
export default Index;