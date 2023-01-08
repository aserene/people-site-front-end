const URL = "https://people-api-o1ol.onrender.com"// this can be either the deployed url or local host
export const peopleLoader=async()=>{
    const response= await fetch(URL+"/people")
    const people= await response.json()
    return people 
}