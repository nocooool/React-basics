import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(config.appwrite_url)
            .setProject(config.project_id);
        
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userID}){
        try {
            //.createDocument [documentid, collectionid, id, {args/ data}]
            return await this.databases.createDocument(
                config.databse_id,
                config.collection_id,
                slug,
                {
                    title,
                    content,
                    slug,
                    featuredImage,
                    status,
                    userID
                }
            )
            
        } catch (error) {
            console.log("appwrite config :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                config.databse_id,
                config.collection_id,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )

        } catch (error) {
            console.log("appwrite config :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                config.databse_id,
                config.collection_id,
                slug
            )
        } catch (error) {
            console.log("appwrite config :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.databse_id,
                config.collection_id,
                slug
            )

        } catch (error) {
            console.log("appwrite config :: getPost :: error", error);
            return false; 
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                config.databse_id,
                config.collection_id,
                queries

            )
            
        } catch (error) {
            console.log("appwrite config :: getPost :: error", error);
            return false;
        }
    }

    //file upload services/methods
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.bucket_id,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("appwrite config :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileID){
        try {
            return await this.bucket.deleteFile(
                config.bucket_id,
                fileID
            )

        } catch (error) {
            console.log("appwrite config :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileID){
        return this.bucket.getFilePreview(
            config.bucket_id,
            fileID
        )
    }

}

const service = new Service()
export default service