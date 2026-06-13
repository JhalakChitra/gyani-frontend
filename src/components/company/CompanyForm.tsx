"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


import CompanyBasicInfo from "./CompanyBasicInfo";
import CompanyAddress from "./CompanyAddress";
import CompanyTaxInfo from "./CompanyTaxInfo";
import CompanyFinancialInfo from "./CompanyFinancialInfo";
import CompanyBranding from "./CompanyBranding";


export default function CompanyForm() {


const router = useRouter();



const [loading,setLoading] = useState(false);



const [form,setForm] = useState({

companyName:"",
legalName:"",
businessType:"",
mobile:"",
email:"",
website:"",

address1:"",
address2:"",
city:"",
state:"",
pincode:"",
country:"India",

gstNumber:"",
panNumber:"",
tanNumber:"",
cinNumber:"",

financialYearStart:"",
booksBeginning:"",

currency:"INR",

logo:null,
signature:null

});






async function handleSubmit(e:any){

e.preventDefault();


try{


setLoading(true);



const token =
localStorage.getItem("accessToken");



const body = {

...form,


financialYearStart:
form.financialYearStart
? new Date(form.financialYearStart)
: null,


booksBeginning:
form.booksBeginning
? new Date(form.booksBeginning)
: null

};





const res = await fetch(

"http://localhost:3001/companies",

{

method:"POST",


headers:{


"Content-Type":
"application/json",


Authorization:
`Bearer ${token}`


},


body:JSON.stringify(body)


}


);





const data = await res.json();



console.log(
"COMPANY CREATED",
data
);



if(res.ok){

alert(
"Company Created"
);


router.push(
"/company/select"
);


}else{


alert(
data.message || "Error"
);


}




}catch(error){


console.log(error);


alert(
"Company create failed"
);



}finally{


setLoading(false);


}



}






return (

<form

onSubmit={handleSubmit}

className="space-y-8"

>


<div>

<h1 className="text-3xl font-bold">

Create Company

</h1>


<p className="text-gray-500">

Setup your business workspace.

</p>


</div>





<CompanyBasicInfo

form={form}

setForm={setForm}

/>





<CompanyAddress

form={form}

setForm={setForm}

/>





<CompanyTaxInfo

form={form}

setForm={setForm}

/>





<CompanyFinancialInfo

form={form}

setForm={setForm}

/>





<CompanyBranding

form={form}

setForm={setForm}

/>





<button

disabled={loading}

className="
bg-violet-600
text-white
px-6
py-3
rounded-xl
"

>


{
loading
?
"Creating..."
:
"Create Company"
}


</button>



</form>

);


}