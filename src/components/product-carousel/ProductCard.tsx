import type { Product } from "@/services/products.service";
import { Button, createStyles, Paper, rem, Text, Title } from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
    card: {
        height: rem(240),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },

    title: {
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: rem(32),
        marginTop: theme.spacing.xs,
        background: theme.black,
    },

    category: {
        display: "inline-block",
        color: theme.black,
        background: theme.white,
        opacity: 0.7,
        fontWeight: 700,
        textTransform: "uppercase",
    },
}));

export function ProductCard({ image, title, category, id }: Product) {
    const { classes } = useStyles();

    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{ backgroundImage: `url(${image})` }}
            className={classes.card}
        >
            <div>
                <Text className={classes.category} size="xs">
                    {category}
                </Text>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>
            </div>
            <Link href={`/product/${id}`}>
                <Button variant="light" color="pink">
                    See Product
                </Button>
            </Link>
        </Paper>
    );
}
