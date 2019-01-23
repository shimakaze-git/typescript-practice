/*

*/
import TaxCalculateUseCaseInputData from '../repository/tax_calculate_usecase_input_data'
import TaxCalculateUseCaseOutputData from '../repository/tax_calculate_usecase_output_data'

import ITaxCalculateUseCase from '../interface/TaxCalculateUseCase'
import TaxEntity from "../../domain/entity/tax_entity"


export default class TaxCalculateUseCase implements ITaxCalculateUseCase {

    public calcTaxPrice(inputData: TaxCalculateUseCaseInputData): TaxCalculateUseCaseOutputData {
        const taxEntity = new TaxEntity();
        const price = inputData.price;
        const taxPrice = taxEntity.calcTaxPrice(price);

        return new TaxCalculateUseCaseOutputData(taxPrice);
    }

} 