import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { CurrencyService } from "../src/app/currency.service";
import {
  baseEurExchangeRates,
  baseInrExchangeRates,
  usdToInr,
} from "./return-data";
import { environment } from "src/environments/environment";

describe("CurrencyService", () => {
  let service: CurrencyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrencyService],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(CurrencyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    // Testcase to check component existence
    expect(service).toBeTruthy("Could not create service");
  });

  it("should have getCurrencyList()", () => {
    // Testcase to check function existence
    expect(service.getCurrencyList).toBeTruthy(
      "Service does not have getCurrencyList"
    );
  });

  it("should be have getSpecificExchangeRate()", () => {
    // Testcase to check function existence
    expect(service.getSpecificExchangeRate).toBeTruthy(
      "Service does not have getCurrencyList"
    );
  });

  it("should be have getAllExchangeRate()", () => {
    // Testcase to check function existence
    expect(service.getAllExchangeRate).toBeTruthy(
      "Service does not have getCurrencyList"
    );
  });

  it("getCurrencyList() should return all exchange rates for base EUR", () => {
    // Testcase to check whether function returns all exchange rates for base EUR
    // Use httpTestingController to create a mock backend to return a value(baseEurExchangeRates) from return-data.ts

    service.getCurrencyList().subscribe((data) => {
      expect(data).toEqual(baseEurExchangeRates);
    });

    const request = httpMock.expectOne({
      method: "GET",
      url: environment.API_URL,
    });

    request.flush(baseEurExchangeRates);
    httpMock.verify();
  });

  it("getSpecificExchangeRate() should return exchange rate for particular base and currency", () => {
    // Testcase to check whether function send two currencies string('USD', 'INR') to backend
    // Use httpTestingController to create a mock backend to return a value(usdToInr) from return-data.ts

    service.getSpecificExchangeRate("USD", "INR").subscribe((data) => {
      expect(data).toEqual(usdToInr);
    });

    const request = httpMock.expectOne({
      method: "GET",
      url: environment.API_URL + "&base=USD&symbols=INR",
    });

    request.flush(usdToInr);
    httpMock.verify();
  });

  it("getAllExchangeRate() should return all exchange rates for particular base", () => {
    // Testcase to check whether function send a string('INR') to backend
    // Use httpTestingController to create a mock backend to return a value(baseInrExchangeRates) from return-data.ts

    service.getAllExchangeRate("INR").subscribe((data) => {
      expect(data).toEqual(baseInrExchangeRates);
    });

    const request = httpMock.expectOne({
      method: "GET",
      url: environment.API_URL + "&base=INR",
    });

    request.flush(baseInrExchangeRates);
    httpMock.verify();
  });
});
