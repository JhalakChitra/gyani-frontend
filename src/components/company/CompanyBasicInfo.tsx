"use client";


type Props = {
  form:any;
  setForm:any;
};



export default function CompanyBasicInfo({
  form,
  setForm
}:Props) {


return (

<section className="space-y-4">


<h2 className="text-xl font-semibold">
Company Information
</h2>



<div className="grid md:grid-cols-2 gap-4">





<input

name="companyName"

placeholder="Company Name"

value={form.companyName}

onChange={(e)=>
setForm({
 ...form,
 companyName:e.target.value
})
}

required

className="border rounded-xl px-4 py-3 w-full"

/>






<input

name="legalName"

placeholder="Legal Business Name"

value={form.legalName}

onChange={(e)=>
setForm({
 ...form,
 legalName:e.target.value
})
}

className="border rounded-xl px-4 py-3 w-full"

/>







<select


name="businessType"


value={form.businessType}


onChange={(e)=>
setForm({
 ...form,
 businessType:e.target.value
})
}


required


className="border rounded-xl px-4 py-3 w-full"


>


<option value="">
Select Business Type
</option>


<option value="proprietorship">
Proprietorship
</option>


<option value="partnership">
Partnership
</option>


<option value="llp">
LLP
</option>


<option value="private_limited">
Private Limited
</option>


<option value="public_limited">
Public Limited
</option>


</select>







<input

name="mobile"

type="tel"

placeholder="Mobile Number"

value={form.mobile}

onChange={(e)=>
setForm({
 ...form,
 mobile:e.target.value
})
}

required

className="border rounded-xl px-4 py-3 w-full"

/>







<input

name="email"

type="email"

placeholder="Email Address"

value={form.email}

onChange={(e)=>
setForm({
 ...form,
 email:e.target.value
})
}

required

className="border rounded-xl px-4 py-3 w-full"

/>







<input

name="website"

type="url"

placeholder="Website"

value={form.website}

onChange={(e)=>
setForm({
 ...form,
 website:e.target.value
})
}

className="border rounded-xl px-4 py-3 w-full"

/>





</div>


</section>

);

}