/*

*/
import ITaxCalculateUseCase from "../app/usecase/tax_calculate_usecase"
import ITaxCalculateView from "../infra/tax_calculate_view"

import TaxCalculateUseCaseInputData from "../app/repository/tax_calculate_usecase_input_data"


export default class TaxCalculateController {
    private useCase: ITaxCalculateUseCase;
    private view: ITaxCalculateView;

    /*
        ITaxCalculateUseCase: IF
        ITaxCalculateView: IF
        
        DI
    */
    public constructor(
        useCase: ITaxCalculateUseCase,
        view: ITaxCalculateView
    ) {
        this.useCase = useCase;
        this.view = view;
    }

    /*
    
    */
    public calcTaxPrice(priceText: string): void {
        const price = Number(priceText);
        const inputData = new TaxCalculateUseCaseInputData(price);
        const outputData = this.useCase.calcTaxPrice(inputData);

        this.view.display(outputData);
    }
}
