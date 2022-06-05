import axios from "axios"
export const baseUrl = "https://innovation-energy.herokuapp.com/"

export const sendQuote = (data)=> { 
    axios.post( baseUrl + "/tabular" , data)
}