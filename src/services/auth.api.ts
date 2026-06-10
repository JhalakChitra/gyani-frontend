const API = process.env.NEXT_PUBLIC_API_URL;


export async function register(data:any){
  const res = await fetch(`${API}/auth/register`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  });

  return res.json();
}


export async function login(data:any){

  const res = await fetch(`${API}/auth/login`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  });

  const result = await res.json();


  if(result.accessToken){

    localStorage.setItem(
      "accessToken",
      result.accessToken
    );

    localStorage.setItem(
      "refreshToken",
      result.refreshToken
    );

  }

  return result;
}



export async function logout(){

 const token =
 localStorage.getItem("accessToken");


 const res = await fetch(
 `${API}/auth/logout`,
 {
  method:"POST",
  headers:{
   Authorization:`Bearer ${token}`
  }
 }
 );


 localStorage.clear();

 return res.json();
}