import { Box, Grid, Card, CardContent, CardActionArea, CardMedia, Stack, Typography, Avatar } from "@mui/material";
import Link from "next/link";

//Types And Sanity
import { News } from "../../../typings";
import { urlFor } from "../../../sanity";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducers/Reducers";

//Styles
import styles from "../../Styles/Home/News.styles";

const Newses = () => {
    const { news } = useSelector((state: RootState) => state.news);
    return (
        <Box sx={{ py: "1.5em" }}>
            <Grid container rowSpacing={3} columnSpacing={2}>
                {news && (news as News[]).length > 0 &&
                    (news as News[]).map((news, i: number) => (
                        <Grid key={i} item md={3}>
                            <Card sx={{ a: { textDecoration: "none", color: "text.primary" } }}>
                                <Link href={`/post/${news.slug.current}`}>
                                    <a>
                                        <CardActionArea sx={styles.Card}>
                                            <CardMedia
                                                component="img"
                                                height="210"
                                                image={urlFor(news.mainImage).url()!}
                                                alt={news.title}
                                                sx={styles.Image}
                                                className="mainImage"
                                            />
                                            <CardContent component={Stack} direction="row" sx={{ alignItems: "center" }}>
                                                <Box sx={styles.Content}>
                                                    <Typography variant="h6" component="h6">
                                                        {news.title}
                                                    </Typography>
                                                    <Typography variant="body1" component="p">
                                                        {news.description}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Avatar
                                                        src={urlFor(news.author.image).url()!}
                                                        alt={news.author.name}
                                                    />
                                                </Box>
                                            </CardContent>
                                        </CardActionArea>
                                    </a>
                                </Link>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};
export default Newses;