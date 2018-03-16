This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project provides an apparatus for publicly serving a development app for review by whitelisted team members who require more than a Github repo.  The app stands behind a Firebase authentication mechanism that permits members of the dev team and beta testers to access the app while blocking others who, despite being warned that registration will not gain them access, have nonetheless chosen to register.  Firebase authentication does not (from my initial research) have an easy mechanism for restricting user registrations, so this setup addresses the problem of uninvited registration and logins by permitting registration while still enforcing the whitelist restrictions.  

#### Using this code requires you to:
1. Start a new project with `create-react-app`.  Those unfamiliar with the Create React App ecosystem can find more information at the above link. `cd` into the new directory.
2. Replace the `src` folder in the new project with the `src` from this repo to that new project.
3. Run `yarn install bootstrap firebase react-dom react-router-dom` or `npm install bootstrap firebase react-dom react-router-dom` to get the minimal required packages.
4. Set up a new project in Firebase.
      To get the pieces working you need to create a Firebase project, which is covered very well [here](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/#react-application-setup) under the section entitled 'Firebase in React Setup'.
5. Insert your Firebase parameters into the config. 
      Replace the capitalized placeholder parameters in the code in `src/config/constants` inside the `config` object with those of your project.
6. Add whitelisted emails to the devTeam or BetaTeam whitelist.
      Whitelisting is configurable in `src/config/constants` by placing the whitelisted email address inside either the devTeam array or the betaTeam array.  
7. Insert your own code at the respective roots: 
      * Dev pages start at `src/components/ProtectedAppDevPage/ProtectedAppDevPage`.
      * Beta pages start at `src/components/ProtectedAppBetaPage/ProtectedAppBetaPage`.
      * Unknown authenticated visitor pages start at `src/components/ProtectedAppVisitorPage/ProtectedAppVisitorPage`.
      * Public pages are at `src/components/UnprotectedApp/UnprotectedApp`.
8. Run `yarn start` or `npm start`.


Tip of the hat to [Robin Wieruch](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/#react-application-setup) and to [Tyler McGinnis](https://github.com/tylermcginnis/react-router-firebase-auth) for their resources on Firebase and React.