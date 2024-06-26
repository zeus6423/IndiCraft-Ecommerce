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
export function fetchCategories() {
  return new Promise(async (resolve) =>
    {
      //TODO : we will not hard-code server url here
      const response=await fetch('http://localhost:8080/categories')
      const data=await response.json();
      resolve({data})
      
    }
  );
}
export function fetchBrands() {
  return new Promise(async (resolve) =>
    {
      //TODO : we will not hard-code server url here
      const response=await fetch('http://localhost:8080/brands')
      const data=await response.json();
      resolve({data})
      
    }
  );
}
export function fetchProductsByFilters(filter,sort,pagination) {
  //to do for multi values
  //filter={"category:{"smartphone","laptop"}}
  // sort={_sort:"price",_order="desc"}
  // pagination = {_page=1,_limit=10}
  //TODO for pagination i will have to pass data.data;
  let querystring='';
  for(let key in filter)
  {
    const categoryvalues=filter[key];
    //should be >=1 for checking the length
    if(categoryvalues.length>0)
    {
       const lastcategoryvalue=categoryvalues[categoryvalues.length-1];
       querystring+=`${key}=${lastcategoryvalue}&`
    }
  }

  for(let key in sort)
  {
    querystring+=`${key}=${sort[key]}&`
  }
  for(let key in pagination)
  {
    querystring+=`${key}=${pagination[key]}&`
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
export function fetchProductById(id) {
  return new Promise(async (resolve) =>
    {
      //TODO : we will not hard-code server url here
      const response=await fetch('http://localhost:8080/products/' + id)
      const data=await response.json();
      resolve({data})
      
    }
  );
}
