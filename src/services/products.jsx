const BASE_URL = 'https://fakestoreapi.com/products';

export async function getProducts() {
	try {
		const response = await fetch(`${BASE_URL}`);
		const x = await response.json();

		return x;
	} catch (error) {
		return new Error(error);
	}
}

export async function getProduct(id) {
	try {
		const response = await fetch(`${BASE_URL}/${id}`);
		const x = await response.json();
		return x;
	} catch (error) {
		return new Error(error);
	}
}
