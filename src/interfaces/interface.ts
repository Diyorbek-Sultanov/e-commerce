export interface IProduct {
	id: string
	image: string
	name: string
	price: number
}

export type ProductT = {
	id: string
	image: string
	name: string
	price: number
}

export interface IProducts {
	product: ProductT[]
}
