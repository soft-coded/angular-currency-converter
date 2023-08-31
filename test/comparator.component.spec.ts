import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { of } from "rxjs";

import { ComparatorComponent } from "../src/app/comparator/comparator.component";
import { baseEurExchangeRates, baseUsdExchangeRates } from "./return-data";
import { CurrencyService } from "src/app/currency.service";

describe("ComparatorComponent", () => {
  let component: ComparatorComponent;
  let fixture: ComponentFixture<ComparatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ComparatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparatorComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    // Testcase to check component existence
    expect(component).toBeTruthy("Could not create Comparator component");
  });

  it("should have ngOnChanges()", () => {
    // Testcase to check function existence
    expect(component.ngOnChanges).toBeTruthy(
      "Comparator component does not have ngOnChanges"
    );
  });

  it("ngOnChanges() should return exchangeRates", waitForAsync(() => {
    // Testcase to check whether the function returns exchange rates for a base currency
    // Use spyOn to give a value('baseUsdExchangeRates') from return-data.ts when a function of service is called

    component.from = "USD";
    const service = fixture.debugElement.injector.get(CurrencyService);

    // use spyOn to mock an API call
    spyOn(service, "getAllExchangeRate").and.callFake(() => {
      return of(baseUsdExchangeRates);
    });

    component.ngOnChanges();

    expect(component.exchangeRates).toEqual(
      component.convertFetchedData(baseUsdExchangeRates)
    );
  }));
});
