// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBooksUrl: "https://www.googleapis.com/books/v1/volumes?q=",

  firebase: {
    apiKey: "AIzaSyDuBNJ5LVQetc9NI5zQbQB6mAsL6Xuiomo",
    authDomain: "academicus-b8ec3.firebaseapp.com",
    projectId: "academicus-b8ec3",
    storageBucket: "academicus-b8ec3.appspot.com",
    messagingSenderId: "232822323131",
    appId: "1:232822323131:web:4f3d95300a887f7693b69e"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
