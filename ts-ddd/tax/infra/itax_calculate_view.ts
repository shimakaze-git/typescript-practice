/*

*/
import TaxCalculateUseCaseOutputData from "../app/repository/tax_calculate_usecase_output_data"


export default interface ITaxCalculateView {
    display(
        outputData: TaxCalculateUseCaseOutputData
    ): void;
}   