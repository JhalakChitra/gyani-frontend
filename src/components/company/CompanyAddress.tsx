"use client";

type Props = {
  form:any;
  setForm:any;
};


export default function CompanyAddress({
  form,
  setForm
}:Props) {


return (

<section className="space-y-4">

<h2 className="text-xl font-semibold">
Address Information
</h2>



<div className="grid md:grid-cols-2 gap-4">


<input
name="address1"
placeholder="Address Line 1"
value={form.address1}
onChange={(e)=>
setForm({
 ...form,
 address1:e.target.value
})
}
required
className="border rounded-xl px-4 py-3 w-full"
/>



<input
name="address2"
placeholder="Address Line 2"
value={form.address2}
onChange={(e)=>
setForm({
 ...form,
 address2:e.target.value
})
}
className="border rounded-xl px-4 py-3 w-full"
/>




<input
name="city"
placeholder="City"
value={form.city}
onChange={(e)=>
setForm({
 ...form,
 city:e.target.value
})
}
required
className="border rounded-xl px-4 py-3 w-full"
/>





<select

name="state"

value={form.state}

onChange={(e)=>
setForm({
 ...form,
 state:e.target.value
})
}

required

className="border rounded-xl px-4 py-3 w-full"

>


<option value="">
Select State
</option>

<option>
Delhi
</option>

<option>
Uttar Pradesh
</option>

<option>
Maharashtra
</option>

<option>
Gujarat
</option>


</select>






<input

name="pincode"

type="number"

placeholder="Pincode"

value={form.pincode}

onChange={(e)=>
setForm({
 ...form,
 pincode:e.target.value
})
}

required

className="border rounded-xl px-4 py-3 w-full"

/>







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


</select>




</div>

</section>

);

}