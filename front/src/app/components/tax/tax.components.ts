import { Component } from '@angular/core';
import {HttpService} from '../../service/http.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {promise} from 'selenium-webdriver';
import fullyResolved = promise.fullyResolved;

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styles: ['.container { justify-content: center;padding: 40px;} .title {text-align:center}']
})
export class TaxComponent {

  error;
  tax: any = {};
  incomeControl = new FormControl('', [
    Validators.required,
  ]);

  fullIncomeControl = new FormControl('', [
    Validators.required,
  ]);

  superAnnuationRateControl = new FormControl('', [
    Validators.required,
  ]);

  yearControl = new FormControl('', [
    Validators.required,
  ]);

  form = new FormGroup({
    'income': this.incomeControl,
    'fullIncome': this.fullIncomeControl,
    'superAnnuationRate': this.superAnnuationRateControl,
    'year': this.yearControl,
  });

  constructor(private httpService: HttpService) {
    console.log('constructed');
  }

  public calculateTax() {
    const payload = {
      income: this.form.value.income,
      fullIncome: this.form.value.fullIncome,
      superAnnuationRate: this.form.value.superAnnuationRate,
      year: this.form.value.year
    };
    console.log(payload);
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
