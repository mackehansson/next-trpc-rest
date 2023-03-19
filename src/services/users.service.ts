export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    name: {
        firstName: string;
        lastName: string;
    };
    address: {
        city: string;
        street: string;
        number: number;
        zipCode: string;
        geolocation: {
            lat: string;
            long: string;
        };
    };
    phone: string;
}

export async function getAllUsers(): Promise<User[]> {
    const response = await fetch(`https://fakestoreapi.com/users`);
    const data = (await response.json()) as User[];
    return data;
}

export async function getSingleUser(userId: number): Promise<User> {
    const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
    const data = (await response.json()) as User;
    return data;
}
