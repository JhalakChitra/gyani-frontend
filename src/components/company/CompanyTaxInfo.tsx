"use client";


type Props = {
  form:any;
  setForm:any;
};



export default function CompanyTaxInfo({
  form,
  setForm
}:Props) {


return (

<section className="space-y-4">


<h2 className="text-xl font-semibold">
Tax Information
</h2>




<div className="grid md:grid-cols-2 gap-4">





<input

name="gstNumber"

placeholder="GST Number"

maxLength={15}


value={form.gstNumber}


onChange={(e)=>

setForm({

...form,

gstNumber:e.target.value.toUpperCase()

})

}


className="border rounded-xl px-4 py-3 w-full uppercase"

/>








<input

name="panNumber"

placeholder="PAN Number"

maxLength={10}


value={form.panNumber}


onChange={(e)=>

setForm({

...form,

panNumber:e.target.value.toUpperCase()

})

}


className="border rounded-xl px-4 py-3 w-full uppercase"

/>








<input

name="tanNumber"

placeholder="TAN Number"

maxLength={10}


value={form.tanNumber}


onChange={(e)=>

setForm({

...form,

tanNumber:e.target.value.toUpperCase()

})

}


className="border rounded-xl px-4 py-3 w-full uppercase"

/>









<input

name="cinNumber"

placeholder="CIN Number (Pvt Ltd/Ltd)"

maxLength={21}


value={form.cinNumber}


onChange={(e)=>

setForm({

...form,

cinNumber:e.target.value.toUpperCase()

})

}


className="border rounded-xl px-4 py-3 w-full uppercase"

/>






</div>


</section>

);

}