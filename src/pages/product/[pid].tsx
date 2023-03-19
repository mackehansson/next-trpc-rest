/* eslint-disable @typescript-eslint/require-await */
import { api } from "@/utils/api";
import {
    Center,
    Container,
    Grid,
    Rating,
    SimpleGrid,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import {
    type GetServerSideProps,
    type InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps<{ pid: number }> = async ({
    query,
}) => {
    const productId = parseInt(query.pid as string, 10);
    return {
        props: {
            pid: productId,
        },
    };
};

export default function ProductDetailPage(
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
    const { pid } = props;

    const { data: product } = api.product.getSingleProduct.useQuery({
        id: pid,
    });

    return (
        <>
            <Head>
                <title>myCommerce - Product page</title>
                <meta
                    name="description"
                    content="Simple mock of a commerce with tRPC against rest endpoints"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {product ? (
                <Container fluid px={64}>
                    <SimpleGrid
                        cols={2}
                        spacing="md"
                        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                    >
                        <Center>
                            <Image
                                src={product.image}
                                alt={product.description}
                                width={1049}
                                height={1500}
                                style={{
                                    maxWidth: "300px",
                                    height: "auto",
                                }}
                            />
                        </Center>
                        <Grid gutter="md">
                            <Grid.Col>
                                <Stack>
                                    <Link
                                        href={`/category/${product.category}`}
                                    >
                                        <Text fz="sm">{product.category}</Text>
                                    </Link>
                                    <Title order={1}>{product.title}</Title>
                                    <Text>{product.description}</Text>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Text fz="xl">
                                    {product.price.toLocaleString()} money
                                </Text>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Rating defaultValue={product.rating.rate} /> (
                                {product.rating.count})
                            </Grid.Col>
                        </Grid>
                    </SimpleGrid>
                </Container>
            ) : null}
        </>
    );
}
