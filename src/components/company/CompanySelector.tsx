"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import CompanyCard from "./CompanyCard";
import { getCompanies } from "@/services/company.api";


export default function CompanySelector() {


  const router = useRouter();


  const [companies,setCompanies] = useState<any[]>([]);

  const [loading,setLoading] = useState(true);




 useEffect(()=>{

  async function loadCompanies(){

    try{

      const response = await getCompanies();

      console.log(
        "COMPANY API RESPONSE:",
        response
      );


      if(Array.isArray(response)){

        setCompanies(response);

      }
      else if(Array.isArray(response.data)){

        setCompanies(response.data);

      }
      else{

        setCompanies([]);

      }



    }catch(error){

      console.log(
        "Company fetch error",
        error
      );

      setCompanies([]);

    }finally{

      setLoading(false);

    }

  }


  loadCompanies();


},[]);







  function selectCompany(company:any){


    localStorage.setItem(
      "activeCompany",
      JSON.stringify(company)
    );


    router.push(
      "/dashboard"
    );


  }







  if(loading){

    return (

      <p>
        Loading companies...
      </p>

    )

  }







  return (

    <div className="space-y-4">



      {
        companies.length === 0 ? (


          <div>


            <p>
              No company found
            </p>


            <button

              onClick={()=>
                router.push("/company/create")
              }

              className="
              mt-4
              px-4
              py-2
              rounded-xl
              bg-blue-600
              text-white
              "

            >

            Create Company

            </button>


          </div>


        ) : (



          companies.map((company)=>(


            <div

            key={company.id}

            onClick={()=>
              selectCompany(company)
            }

            className="
            cursor-pointer
            "

            >


            <CompanyCard

              name={company.companyName}

              gst={
                company.gstNumber || "N/A"
              }

            />


            </div>



          ))


        )

      }



    </div>

  );

}