import { Container } from "@mui/material";
import { GetServerSideProps } from 'next'

//Seo
import Seo from "Utilis/Seo";

//Redux-wraper
import { wrapper } from "Redux/Store";
import { getNews } from "Redux/Actions/newsActions";

//Layout
import Layout from "Layout";

//Components
import Banner from "Component/Home/Banner";
import News from "Component/Home/News";

const Index = () => {
  return (
    <Layout>
      <Seo />
      <Container maxWidth={false}>
        <Banner />
        <News />
      </Container>
    </Layout>
  );
};
export default Index;

//Serversider data fatching

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (context) => {
      await store.dispatch(getNews() as any);
      return { props: {} };
    }
)