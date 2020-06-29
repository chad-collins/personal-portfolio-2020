import Repository from "./Repository.js"

const resource = "/DynamicData"
export default {
    get(){
        return Repository.get(`${resource}`);
    }
}