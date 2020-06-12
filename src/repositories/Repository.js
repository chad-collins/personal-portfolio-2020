import axios from 'axios'



const baseDomain = "https://api.airtable.com/v0";
const baseURL = `${baseDomain}/appLQ1Gbz7s7OdI4L`


export default axios.create({
  baseURL,
  headers: { 'Authorization': `Bearer ` + process.env.VUE_APP_AIRTABLEKEY }
}
);
