export default class TaxEntity {
    // private readonly taxRate: number = 0.08;
    private taxRate: number = 0.08

    public calcTaxPrice(price: number): number {
        const p = this.taxRate + 1;

        return Math.round(price * p);
    }
}
