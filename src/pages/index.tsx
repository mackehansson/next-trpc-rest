/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ProductCarousel } from "@/components/product-carousel/ProductCarousel";
import { Container } from "@mantine/core";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>myCommerce</title>
                <meta
                    name="description"
                    content="Simple mock of a commerce with tRPC against rest endpoints"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container fluid px={64}>
                <ProductCarousel />
            </Container>
        </>
    );
};

export default Home;
