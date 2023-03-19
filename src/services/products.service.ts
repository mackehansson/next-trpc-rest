export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: Rating;
}

export interface Rating {
    rate: number;
    count: number;
}

export async function getAllProducts(params: {
    limit?: string;
    sort?: "asc" | "desc";
}): Promise<Product[]> {
    const urlParams = new URLSearchParams({
        limit: params.limit ? params.limit : "",
        sort: params.sort ? params.sort : "asc",
    }).toString();

    const response = await fetch(
        `https://fakestoreapi.com/products?${urlParams}`
    );
    const data = (await response.json()) as Product[];
    return data;
}

export async function getSingleProduct(id: number): Promise<Product> {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = (await response.json()) as Product;
    return data;
}

export async function getAllCategories(): Promise<string[]> {
    const response = await fetch(
        `https://fakestoreapi.com/products/categories`
    );
    const data = (await response.json()) as string[];
    return data;
}

export async function getProductsInCategory(
    category: string
): Promise<Product[]> {
    const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
    );
    const data = (await response.json()) as Product[];
    return data;
}
