const BASE_URL = 'https://fakestoreapi.com';

export async function getProducts() {
	const response = await fetch(`${BASE_URL}/products`);
	const x = await response.json();
	return x;
}

export async function getProduct(id) {
	const response = await fetch(`${BASE_URL}/characters/${id}`);
	const x = await response.json();
	return x;
}
