// A mock function to mimic making an async request for data
export function addToCart(item) {
  return new Promise(async (resolve) =>
    {
      //TODO: on server it will only return some info of user (not Password)
      const response=await fetch('http://localhost:8080/cart',{
        method:'POST',
        body:JSON.stringify(item),
        headers:{'content-type':'application/json'}
      }
    )
      const data=await response.json();
      resolve({data})
      
    }
  );
}
export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) =>
    {
      //TODO : we will not hard-code server url here
      const response=await fetch('http://localhost:8080/cart?user=' +userId)
      const data=await response.json();
      resolve({data})
      
    }
  );
}
export function updateItem(update) {
  return new Promise(async (resolve) =>
    {
      //TODO: on server it will only return some info of user (not Password)
      const response=await fetch('http://localhost:8080/cart/' + update.id ,{
        method:'PATCH',
        body:JSON.stringify(update),
        headers:{'content-type':'application/json'}
      }
    )
      const data=await response.json();
      resolve({data})
      
    }
  );
}
export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) =>
    {
      //TODO: on server it will only return some info of user (not Password)
      const response=await fetch('http://localhost:8080/cart/' + itemId ,{
        method:'DELETE',
        headers:{'content-type':'application/json'}
      }
    )
      const data=await response.json();
      resolve({data:{id:itemId}})
      
    }
  );
}