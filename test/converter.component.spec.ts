import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { ConverterComponent } from "../src/app/converter/converter.component";

describe("ConverterComponent", () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ConverterComponent],
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
  });

  it("convert() given values should return the exchange rate for the required currency", () => {
    // Testcase to check whether the function returns exchange rate for from currency 'USD' and to currency 'INR'
    // Use spyOn to give a value('usdToInr') from return-data.ts when a function of service is called
  });

  it("convert() given input null should return error message and hide the exchange rate", () => {
    // Testcase to check whether the function is hidden when from currency or to currency is 'null'
  });
});
