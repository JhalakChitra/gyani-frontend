"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import { getCompanies } from "@/services/company.api";


export default function CompanySwitcher() {


  const [company,setCompany] = useState<any>(null);



  useEffect(()=>{


    async function load(){

      try{

        const data = await getCompanies();


        if(data.length > 0){

          setCompany(data[0]);

        }


      }catch(error){

        console.log(error);

      }

    }


    load();


  },[]);





  if(!company){

    return (

      <button
        className="
        w-full
        border
        rounded-xl
        p-4
        "
      >

      No Company

      </button>

    )

  }





return (

<button
className="
w-full
border
rounded-xl
p-4
flex
justify-between
items-center
"
>


<div className="text-left">


<p className="font-semibold">

{company.companyName}

</p>



<p className="text-xs text-gray-500">

Active Company

</p>



{
company.gstNumber &&

<p className="text-xs">

GST: {company.gstNumber}

</p>

}



</div>



<ChevronDown size={18}/>


</button>

);

}