/*

*/
import * as readline from 'readline';

import TaxCalculateUseCase from "../../app/usecase/tax_calculate_usecase"
import TaxCalculateView from "../output/tax_calculate_view"
import TaxCalculateController from "../../interface/tax_calculate_controller"


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rl.on('line', (input: string) => {
    /*
        TaxCalculateUseCase -> app/usecase
        TaxCalculateView -> infra/output
    
        TaxCalculateController -> interface
    */

    const useCase = new TaxCalculateUseCase();
    const view = new TaxCalculateView();

    const controller = new TaxCalculateController(useCase, view);
    controller.calcTaxPrice(input);
});
