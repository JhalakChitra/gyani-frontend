const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function getCompanies(){


  const token =
    localStorage.getItem("accessToken");


  const res = await fetch(
    `${API_URL}/companies`,
    {
      method:"GET",

      headers:{
        "Content-Type":"application/json",

        Authorization:
          `Bearer ${token}`
      }
    }
  );


  const data = await res.json();


  console.log(
    "GET COMPANIES RESPONSE",
    data
  );


  return data;

}