 # Gigya - CDC Login
 
 - demosteate common use cases in gigya implememation 
 - client side implemantation with Gigya sdk
 
 ## Live site
deployed to https://store.eu.dynidp.com/

  

## Confirmation flow
> scenario - after social login with an email we want the ens user to confirm his email address in order to make the email available as first party data that won't be removed in case the user revokes his email sharing privacy.

### Gigya setup

-	Add email confirmation screen in screen set
-	Use [flow builder](https://sap-my.sharepoint.com/personal/dina_vinter_sap_com/Documents/technical-implamatation-Q&A/-%09https:/help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/6c864c4647a14bb2a9212aeace424286.html?locale=en-US&q=flow%20builder) to conditionally trigger the screen 
- Trigger the flow upon on login event, either manualy in the web site or in screen set custom JS

#### Flow builder
You can import the flow file from [here](workflow-definition-profile_email_confirmation.json)
![image](https://user-images.githubusercontent.com/29256880/202448940-588cfd0e-78e6-43f4-a7d1-f48a9ed0a259.png )

#### local handler

```js title='manual handler'
export function onLoginHandler() {
    gigyaWebSDK()
       .flow('profile_email_confirmation') 
            .on('initiate-flow', console.log)             
            .on('without-site-identity-email', console.log)        
            .execute();
}
```
 
 #### Screenset handler

 ![image](https://user-images.githubusercontent.com/29256880/202450495-d52dc925-5ea7-42fe-96aa-9a6afe258852.png?hight=40)

  
 
## Local Development

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

 
### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
 
