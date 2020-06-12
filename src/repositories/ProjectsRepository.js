import Repository from "./Repository.js"

const resource = "/Projects"
export default {
    get(){
        return Repository.get(`${resource}`);
    },
    getProjectBySlug(slug){
        let querystring = "?filterByFormula={Slug}='" + slug + "'";
        return Repository.get(`${resource}/${querystring}`);
    },
}