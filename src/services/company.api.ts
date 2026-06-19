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


  return res.json();

}






export async function createCompany(
  data:any
){


  const token =
    localStorage.getItem("accessToken");



  const res = await fetch(

    `${API_URL}/companies`,

    {

      method:"POST",


      headers:{

        "Content-Type":
        "application/json",


        Authorization:
        `Bearer ${token}`

      },


      body:
      JSON.stringify(data)

    }

  );



  const result =
    await res.json();



  console.log(
    "CREATE COMPANY RESPONSE",
    result
  );



  return result;

}