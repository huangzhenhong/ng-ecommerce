// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBYKzp8HsbhqaxtpPvPlgGOAvWwrT0lYYI",
    authDomain: "ng-ecommerce-f624d.firebaseapp.com",
    databaseURL: "https://ng-ecommerce-f624d.firebaseio.com",
    projectId: "ng-ecommerce-f624d",
    storageBucket: "ng-ecommerce-f624d.appspot.com",
    messagingSenderId: "631278380687"
  },
  stripe: "pk_test_R7w2OqwbKy1zWaEg2XZLPLXU"
};
