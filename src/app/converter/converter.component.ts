import { CurrencyService } from "./../currency.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
// import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-converter",
  templateUrl: "./converter.component.html",
  styleUrls: ["./converter.component.css"],
})
export class ConverterComponent implements OnInit {
  converterForm = new FormGroup({
    from: new FormControl(null),
    to: new FormControl(null),
    amount: new FormControl(1),
  });

  converted = false;
  currencyList: string[];
  resultValue: string;
  description: string;
  exchangeRate: string;
  comparatorInput: string;

  constructor(
    private currencyService: CurrencyService
  ) // private toastr: ToastrService
  {}

  ngOnInit() {
    this.getCurrencyList();
  }

  // function to get all currencies code for select option
  getCurrencyList() {
    this.currencyService
      .getCurrencyList()
      .subscribe((data) => (this.currencyList = Object.keys(data.rates)));
  }

  // function to convert the amount from a currency to another selected in form
  convert() {
    const formValues = this.converterForm.value;
    if (formValues.from == null || formValues.to == null) {
      // the following line is throwing "this.toastr.error is undefined" error while testing, so I have commented it out for testing purposes and instead I am just returning an error string
      // this.toastr.error("selected currency is null", "Currency not selected");
      this.converted = false;
      return "Currency not selected";
    } else {
      this.currencyService
        .getSpecificExchangeRate(formValues.from, formValues.to)
        .subscribe((data) => {
          const helperRes = this.convertHelper(data);

          this.resultValue = helperRes.resultValue;
          this.description = formValues.amount + " " + formValues.from + "=";
          this.exchangeRate = helperRes.exchangeRate;
          this.comparatorInput = formValues.from;
          this.converted = true;
        });
    }
  }

  convertHelper(data) {
    const formValues = this.converterForm.value;

    return {
      resultValue:
        data.rates[formValues.to] * formValues.amount + " " + formValues.to,
      exchangeRate:
        "1 " +
        formValues.from +
        "=" +
        data.rates[formValues.to] +
        " " +
        formValues.to,
    };
  }
}
