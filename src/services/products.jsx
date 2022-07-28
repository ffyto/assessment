const BASE_URL = 'https://fakestoreapi.com/products';

export async function getProducts() {
	const response = await fetch(`${BASE_URL}`);
	const x = await response.json();
	return x;
}

export async function getProduct(id) {
	const response = await fetch(`${BASE_URL}/${id}`);
	const x = await response.json();
	return x;
}
