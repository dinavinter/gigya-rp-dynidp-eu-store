// @ts-nocheck - may need to be at the start of file
import gigyaWebSDK from "./gigyaWebSDK";

export function onLoginHandler() {
    gigyaWebSDK().flow('login_set_email') 
            .on('without-site-identity-email', console.log)

            .on('initiate-flow', console.log) 
        
            .execute();
}

