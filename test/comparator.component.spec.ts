import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { ComparatorComponent } from "../src/app/comparator/comparator.component";
import { baseEurExchangeRates } from "./return-data";
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

  it("should return exchangeRates", waitForAsync(() => {
    // Testcase to check whether the function returns exchange rates for a base currency
    // Use spyOn to give a value('baseUsdExchangeRates') from return-data.ts when a function of service is called

    component.from = "EUR"; // EUR is the only currency available in the free tier of the API
    const service = fixture.debugElement.injector.get(CurrencyService);

    /* The following code would have been used if ngOnChanges were to return some value, but since ngOnChanges returns void, we cannot use the code below. It internally calls the services and assigns the result to component.exchangeRates.
        
    const spyingResult = spyOn(component, "ngOnChanges").and.returnValue(
      baseUsdExchangeRates
    ); */
  }));
});
