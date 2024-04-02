// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) =>
    {
      //TODO : we will not hard-code server url here
      const response=await fetch('http://localhost:8080/products')
      const data=await response.json();
      resolve({data})
      
    }
  );
}
export function fetchProductsByFilters(filter) {
  //to do for multi values
  //filter={"category:{"smartphone","laptop"}}
  let querystring='';
  for(let key in filter)
  {
    querystring+=`${key}=${filter[key]}&`
  }
  return new Promise(async (resolve) =>
    {
      //TODO : we will not hard-code server url here
      const response=await fetch('http://localhost:8080/products?'+querystring)
      const data=await response.json();
      resolve({data})
      
    }
  );
}
