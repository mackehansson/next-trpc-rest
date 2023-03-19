/* eslint-disable @typescript-eslint/require-await */
import { api } from "@/utils/api";
import {
    Badge,
    Button,
    Card,
    Container,
    Group,
    SimpleGrid,
    Text,
} from "@mantine/core";
import {
    type GetServerSideProps,
    type InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps<{
    category: string;
}> = async ({ query }) => {
    const category = query.category as string;
    return {
        props: {
            category,
        },
    };
};

export default function CategoryPage(
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
    const { category } = props;

    const { data: categoryProducts } =
        api.product.getProductsInCategory.useQuery({
            category,
        });

    return (
        <>
            <Head>
                <title>myCommerce - Category page</title>
                <meta
                    name="description"
                    content="Simple mock of a commerce with tRPC against rest endpoints"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {categoryProducts ? (
                <Container fluid px={64}>
                    <SimpleGrid
                        cols={4}
                        spacing="md"
                        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                    >
                        {categoryProducts.map((product) => (
                            <Card
                                shadow="sm"
                                padding="lg"
                                radius="md"
                                withBorder
                                key={product.id}
                            >
                                <Card.Section>
                                    <Image
                                        src={product.image}
                                        width={160}
                                        height={160}
                                        alt={product.title}
                                    />
                                </Card.Section>

                                <Group position="apart" mt="md" mb="xs">
                                    <Text weight={500}>{product.title}</Text>
                                    <Badge color="pink" variant="light">
                                        {product.category}
                                    </Badge>
                                </Group>

                                <Text size="sm" color="dimmed">
                                    {product.description}
                                </Text>

                                <Link href={`/product/${product.id}`}>
                                    <Button
                                        variant="light"
                                        color="blue"
                                        fullWidth
                                        mt="md"
                                        radius="md"
                                    >
                                        Go to product
                                    </Button>
                                </Link>
                            </Card>
                        ))}
                    </SimpleGrid>
                </Container>
            ) : null}
        </>
    );
}
