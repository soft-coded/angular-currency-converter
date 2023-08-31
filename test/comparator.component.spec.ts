import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { ComparatorComponent } from "../src/app/comparator/comparator.component";

describe("ComparatorComponent", () => {
  let component: ComparatorComponent;
  let fixture: ComponentFixture<ComparatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ComparatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparatorComponent);
    component = fixture.componentInstance;
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

  it("ngOnChanges() should return exchangeRates", () => {
    // Testcase to check whether the function returns exchange rates for a base currency
    // Use spyOn to give a value('baseUsdExchangeRates') from return-data.ts when a function of service is called
    
  });
});
