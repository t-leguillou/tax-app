import { Component } from '@angular/core';
import {HttpService} from '../../service/http.service';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styles: ['.container { justify-content: center;padding: 40px;}']
})
export class TaxComponent {

  error;
  tax: any = {};

  constructor(private httpService: HttpService) {
    console.log('constructed');
  }

  public calculateTax() {
    const payload = {
      income: this.tax.income,
      fullIncome: this.tax.fullIncome,
      superAnnuationRate: this.tax.superAnnuationRate,
      year: this.tax.year
    };
    this.httpService.calculateTax(payload)
      .subscribe(
        (taxResult) => {
          this.tax = {...this.tax, ...taxResult};
        },
        (error) => {
          this.error = error;
        }
      );
  }

}
