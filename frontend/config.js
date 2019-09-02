'use strict';

const config = {
	auth0: { // Auth0 configuration
		clientID: 'BUUYjCiP2SYKQBB48OZRALsccmijoubx',
		domain: 'pizzaql.eu.auth0.com'
	},
	stripe: { // Stripe configuration
		key: 'pk_test_A6mUVOGtiDJwvnJsg1AmoNxO'
	},
	restaurant: { // Basic restaurant options
		name: 'PizzaQL',
		phone: 693827127,
		hoursLock: false
	},
	pizzas: { // Pizzas
		Margharita: {
			ingredients: [
				'Mozzarella',
				'Oregano'
			],
			prices: {
				Small: 17,
				Medium: 20,
				Large: 23
			}
		},
		Funghi: {
			ingredients: [
				'Mozzarella',
				'Oregano',
				'Mushrooms'
			],
			prices: {
				Small: 20,
				Medium: 23,
				Large: 26
			}
		},
		Cacciatore: {
			ingredients: [
				'Mozzarella',
				'Oregano',
				'Salami'
			],
			prices: {
				Small: 16,
				Medium: 19,
				Large: 22
			}
		},
		Vesuvio: {
			ingredients: [
				'Mozzarella',
				'Oregano',
				'Ham'
			],
			prices: {
				Small: 19,
				Medium: 22,
				Large: 25
			}
		},
		Capriciosa: {
			ingredients: [
				'Mozzarella',
				'Oregano',
				'Ham',
				'Mushrooms'
			],
			prices: {
				Small: 20,
				Medium: 23,
				Large: 26
			}
		},
		Prosciutto: {
			ingredients: [
				'Mozzarella',
				'Oregano',
				'Prosciutto Cotto'
			],
			prices: {
				Small: 21,
				Medium: 24,
				Large: 27
			}
		},
		Hawaiano: {
			ingredients: [
				'Mozzarella',
				'Oregano',
				'Ham',
				'Pineapple'
			],
			prices: {
				Small: 21,
				Medium: 24,
				Large: 27
			}
		},
		Fiorentina: {
			ingredients: [
				'Mozzarella',
				'Oregano',
				'Ham',
				'Mushrooms',
				'Black Olives',
				'Capers'
			],
			prices: {
				Small: 20,
				Medium: 23,
				Large: 26
			}
		},
		Bali: {
			ingredients: [
				'Mozzarella',
				'Oregano',
				'Grilled Chicken',
				'Mushrooms',
				'Pineapple'
			],
			prices: {
				Small: 22,
				Medium: 25,
				Large: 28
			}
		},
		Pepperoni: {
			ingredients: [
				'Mozzarella',
				'Oregano',
				'Salami Pepperoni'
			],
			prices: {
				Small: 20,
				Medium: 23,
				Large: 26
			}
		},
		Pescatore: {
			ingredients: [
				'Mozzarella',
				'Oregano',
				'Tuna',
				'Black Olives',
				'Capers'
			],
			prices: {
				Small: 20,
				Medium: 23,
				Large: 26
			}
		}
	},
	thickDough: 3 // How much should thick dough add to the final price?
};

export default config;
