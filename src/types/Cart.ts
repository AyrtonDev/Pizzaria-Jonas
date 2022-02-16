export type CartProps = {
    id: number
    items: [
        {
            pizzaId: number
            pizzaName: string
            pizzaPrice: number
            amount: number
            totalPrice: number
        }
    ],
    subTotal: number,
    total: number,
    discount: number
}