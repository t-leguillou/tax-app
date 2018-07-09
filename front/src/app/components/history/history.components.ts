import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../service/http.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styles: ['.container { justify-content: center;padding: 40px;} .title {text-align:center}']
})
export class TaxHistoryComponent implements OnInit {

  taxes: any;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getTaxHistory().subscribe((result) => {
      this.taxes = result;
    });
  }


}
