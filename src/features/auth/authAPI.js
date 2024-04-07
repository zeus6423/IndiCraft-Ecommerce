// A mock function to mimic making an async request for data
export function createUser(userData) {
  return new Promise(async (resolve) =>
    {
      //TODO: on server it will only return some info of user (not Password)
      const response=await fetch('http://localhost:8080/users',{
        method:'POST',
        body:JSON.stringify(userData),
        headers:{'content-type':'application/json'}
      }
    )
      const data=await response.json();
      resolve({data})
      
    }
  );
}
export function checkUser(loginInfo) {
  return new Promise(async (resolve,reject) =>
    {
      //TODO: on server it will only return some info of user (not Password)
      const email=loginInfo.email
      const password=loginInfo.password
      const response=await fetch('http://localhost:8080/users?email=' + email)
      const data=await response.json();
      if(data.length)
      {
        if(password==data[0].password)
        {
         
          resolve({data:data[0]})
        }
        else
        {
          reject({message :"Incorrect UserName or Password , Please Try Again "})
        }
      }
      else
      {
        
        reject({message :"Incorrect UserName or Password , Please Try Again "})
      }
      // resolve({data})
      
    }
  );
}
