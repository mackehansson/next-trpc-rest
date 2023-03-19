export interface Cart {
    id: number;
    userId: number;
    date: Date;
    products: CartProduct[];
}

export interface CartProduct {
    productId: number;
    quantity: number;
}

export async function getAllCarts(): Promise<Cart[]> {
    const response = await fetch(`https://fakestoreapi.com/carts`);
    const data = (await response.json()) as Cart[];
    return data;
}

export async function getSingleCart(id: number): Promise<Cart> {
    const response = await fetch(`https://fakestoreapi.com/carts/${id}`);
    const data = (await response.json()) as Cart;
    return data;
}

export async function getUserCarts(userId: number): Promise<Cart> {
    const response = await fetch(
        `https://fakestoreapi.com/carts/user/${userId}`
    );
    const data = (await response.json()) as Cart;
    return data;
}
