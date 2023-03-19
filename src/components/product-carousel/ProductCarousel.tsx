import { api } from "@/utils/api";
import React from "react";
import { Carousel } from "@mantine/carousel";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import type { Product } from "@/services/products.service";
import { ProductCard } from "./ProductCard";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

export const ProductCarousel = () => {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    const products = api.product.getAllProducts.useQuery({
        limit: "8",
        sort: "asc",
    });

    return (
        <div>
            {products.data ? (
                <Carousel
                    slideSize="33%"
                    breakpoints={[
                        { maxWidth: "sm", slideSize: "100%", slideGap: 2 },
                    ]}
                    height={240}
                    slideGap="xl"
                    align="start"
                    slidesToScroll={mobile ? 1 : 2}
                    nextControlIcon={<IconArrowRight size={16} />}
                    previousControlIcon={<IconArrowLeft size={16} />}
                >
                    <ProductSlides slides={products.data} />
                </Carousel>
            ) : null}
        </div>
    );
};

function ProductSlides(props: { slides: Product[] }) {
    const { slides } = props;

    return (
        <>
            {slides.map((item) => (
                <Carousel.Slide key={item.id}>
                    <ProductCard {...item} />
                </Carousel.Slide>
            ))}
        </>
    );
}
