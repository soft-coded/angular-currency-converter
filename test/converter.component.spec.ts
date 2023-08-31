import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { of } from "rxjs";
import { ToastrService } from "ngx-toastr";

import { ConverterComponent } from "../src/app/converter/converter.component";
import { baseEurExchangeRates, usdToInr } from "./return-data";
import { CurrencyService } from "src/app/currency.service";

describe("ConverterComponent", () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ConverterComponent],
      providers: [{ provide: ToastrService, useValue: {} }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    // Testcase to check component existence
    expect(component).toBeTruthy("Could not create Converter component");
  });

  it("should have getCurrencyList()", () => {
    // Testcase to check function existence
    expect(component.getCurrencyList).toBeTruthy(
      "Component does not have a getCurrencyList method"
    );
  });

  it("should have convert()", () => {
    // Testcase to check function existence
    expect(component.convert).toBeTruthy(
      "Component does not have a getCurrencyList method"
    );
  });

  it("getCurrencyList() should return the list of currencies", () => {
    // Testcase to check whether the function returns exchange rates for a base currency 'EUR'
    // Use spyOn to give a value('baseEurExchangeRates') from return-data.ts when a function of service is called
    // since the values keep changing, we cannot compare the values. We can only compare the keys.

    const service = fixture.debugElement.injector.get(CurrencyService);
    spyOn(service, "getCurrencyList").and.callFake(() => {
      return of(baseEurExchangeRates);
    });

    component.getCurrencyList();

    expect(component.currencyList).toEqual(
      Object.keys(baseEurExchangeRates.rates)
    );
  });

  it("convert() given values should return the exchange rate for the required currency", () => {
    // Testcase to check whether the function returns exchange rate for from currency 'USD' and to currency 'INR'
    // Use spyOn to give a value('usdToInr') from return-data.ts when a function of service is called

    component.converterForm.get("from").setValue("USD");
    component.converterForm.get("to").setValue("INR");

    const service = fixture.debugElement.injector.get(CurrencyService);
    spyOn(service, "getSpecificExchangeRate").and.callFake(() => {
      return of(usdToInr);
    });

    component.convert();

    const helperRes = component.convertHelper(usdToInr);

    expect(component.resultValue).toEqual(helperRes.resultValue);
    expect(component.exchangeRate).toEqual(helperRes.exchangeRate);
  });

  it("convert() given input null should return error message and hide the exchange rate", () => {
    // Testcase to check whether the function is hidden when from currency or to currency is 'null'

    // The form values are set to null by default so we don't need to set them here, we just need to run the check;
    expect(component.convert()).toEqual("Currency not selected");
    expect(component.converted).toBeFalse();
  });
});
