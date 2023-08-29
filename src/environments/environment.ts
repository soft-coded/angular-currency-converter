// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // !! IMPORTANT !!
  /*
  The exchangerates api has changed to now allow only the links with actual API access keys present in them. Therefore, I have manually generated an API key to make this work.
   */
  API_URL:
    "http://api.exchangeratesapi.io/latest?access_key=3fb9aaf97754b1dd99289bc13d2ba3e1",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
