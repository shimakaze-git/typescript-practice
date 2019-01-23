import TaxCalculateUseCaseInputData from '../repository/tax_calculate_usecase_input_data'
import TaxCalculateUseCaseOutputData from '../repository/tax_calculate_usecase_output_data'

export default interface ITaxCalculateUseCase {
    calcTaxPrice(inputData: TaxCalculateUseCaseInputData): TaxCalculateUseCaseOutputData;
}
