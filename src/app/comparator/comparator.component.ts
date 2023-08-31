import { CurrencyService } from "./../currency.service";
import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-comparator",
  templateUrl: "./comparator.component.html",
  styleUrls: ["./comparator.component.css"],
})
export class ComparatorComponent implements OnChanges {
  // base currency selected in
  @Input() public from: string;
  exchangeRates;

  constructor(private currencyService: CurrencyService) {}

  // function is used to get exchange rates of particular base currency
  ngOnChanges() {
    // the following if check is redundant, as this.form will never be undefined
    // if (this.from !== undefined) {
    this.exchangeRates = [];
    this.currencyService
      .getAllExchangeRate(this.from)
      .subscribe(
        (data) => (this.exchangeRates = this.convertFetchedData(data))
      );
    // }
  }

  convertFetchedData(data) {
    const retArr = [];
    Object.keys(data.rates).forEach((key) =>
      retArr.push({ key: [key], value: data.rates[key] })
    );
    return retArr;
  }
}
