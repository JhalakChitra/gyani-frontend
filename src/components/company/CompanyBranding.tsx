"use client";


type Props = {
  form:any;
  setForm:any;
};



export default function CompanyBranding({
  form,
  setForm
}:Props) {


return (

<section className="space-y-4">


<h2 className="text-xl font-semibold">
Company Branding
</h2>



<div className="grid md:grid-cols-2 gap-4">



<div className="space-y-2">

<label className="text-sm font-medium">
Company Logo
</label>


<input

name="logo"

type="file"

accept="image/png,image/jpeg,image/webp"


onChange={(e:any)=>{


const file =
e.target.files[0];


setForm({

...form,

logo:file

});


}}


className="border rounded-xl px-4 py-3 w-full"

/>


</div>







<div className="space-y-2">


<label className="text-sm font-medium">
Signature / Stamp
</label>



<input

name="signature"

type="file"

accept="image/png,image/jpeg,image/webp"


onChange={(e:any)=>{


const file =
e.target.files[0];


setForm({

...form,

signature:file

});


}}



className="border rounded-xl px-4 py-3 w-full"

/>



</div>



</div>


</section>

);

}