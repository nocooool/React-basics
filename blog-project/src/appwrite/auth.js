import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    // create an constructor for creating new client
    //so that it will be created only if the method is called
    constructor(){
        this.client
            .setEndpoint(config.appwrite_url)
            .setProject(config.project_id);

        this.account = new Account(this.client);
    } 

    //these async functions are good because it will remain same even if
    //we tend to change the backend app just need to make some changes acc. to the docs and done
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                //return userAccount

                //but why not directly login so here it is 
                //we call another method
                return this.login({email, password})
            }else{
                return userAccount;
            }
        } catch (error) {
            console.log("appwrite auth :: createAccount :: error", error);
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password); 
        } catch (error) {
            console.log("appwrite auth :: login :: error", error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("appwrite auth :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
            
        } catch (error) {
            console.log("appwrite auth :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService;