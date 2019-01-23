/*

*/
import ITaxCalculateView from "../itax_calculate_view"
import TaxCalculateUseCaseOutputData from "../../app/repository/tax_calculate_usecase_output_data"


export default class TaxCalculateView implements ITaxCalculateView {
    
    /*
        display: method
    */
    public display(
        outputData: TaxCalculateUseCaseOutputData
    ): void {
        const taxPrice = outputData.price;
        console.log(`税込価格:${taxPrice}`);
    }

    
}