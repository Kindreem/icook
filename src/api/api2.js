import axios from 'axios'

// const baseURL = "/gtok"
// axios.defaults.baseURL = baseURL
var axiostow = axios.create({
  baseURL: "/gtok"
  });
export const gtok = ()=>{
  return axiostow.post("?grant_type=client_credentials&client_id=Nc9dDI61x4AFyhczZ2GIkW9A&client_secret=T7ITcbvA79hDpxAXlEZkNUGvfSkfuQYe").then(res=>res.data)
}
