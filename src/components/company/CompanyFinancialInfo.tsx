"use client";


type Props = {
  form:any;
  setForm:any;
};



export default function CompanyFinancialInfo({
  form,
  setForm
}:Props) {


return (

<section className="space-y-4">


<h2 className="text-xl font-semibold">
Financial Settings
</h2>



<div className="grid md:grid-cols-2 gap-4">



<div className="space-y-2">

<label className="text-sm font-medium">
Financial Year Start
</label>


<input

name="financialYearStart"

type="date"


value={form.financialYearStart}


onChange={(e)=>

setForm({

...form,

financialYearStart:e.target.value

})

}


required

className="border rounded-xl px-4 py-3 w-full"

/>


</div>








<div className="space-y-2">


<label className="text-sm font-medium">
Books Beginning From
</label>



<input

name="booksBeginning"

type="date"


value={form.booksBeginning}


onChange={(e)=>

setForm({

...form,

booksBeginning:e.target.value

})

}


required


className="border rounded-xl px-4 py-3 w-full"

/>


</div>








<select


name="currency"


value={form.currency}


onChange={(e)=>

setForm({

...form,

currency:e.target.value

})

}


className="border rounded-xl px-4 py-3 w-full"


>


<option value="INR">
INR - Indian Rupee
</option>


<option value="USD">
USD - Dollar
</option>


<option value="EUR">
EUR - Euro
</option>


</select>









<select


name="country"


value={form.country}


onChange={(e)=>

setForm({

...form,

country:e.target.value

})

}


className="border rounded-xl px-4 py-3 w-full"


>


<option value="India">
India
</option>


<option value="USA">
USA
</option>


<option value="UK">
UK
</option>


</select>




</div>


</section>

);

}