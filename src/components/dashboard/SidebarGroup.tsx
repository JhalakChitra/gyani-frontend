"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

import SidebarItem from "./SidebarItem";
import { logout } from "@/services/auth.api";


interface Props {
  item: any;
  collapsed: boolean;
}


export default function SidebarGroup({
  item,
  collapsed,
}: Props) {


const [open,setOpen] = useState(false);

const router = useRouter();



async function handleLogout(){


try{


  await logout();


  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("activeCompany");


  router.push("/auth/login");


}catch(error){

console.log(error);

}


}




// logout case
if(item.action==="logout"){


return (

<button

onClick={handleLogout}

className="
w-full
flex
items-center
gap-3
px-3
py-3
rounded-xl
hover:bg-slate-100
dark:hover:bg-slate-800
"

>


<item.icon size={20}/>


{
!collapsed && (
<span>
{item.title}
</span>
)
}


</button>

)

}





if (!item.children) {
  return (
    <SidebarItem
      item={item}
      collapsed={collapsed}
    />
  );
}



return (

<div className="mb-1">


<button

onClick={()=>setOpen(!open)}

className="
w-full
flex
items-center
justify-between
px-3
py-3
rounded-xl
hover:bg-slate-100
dark:hover:bg-slate-800
"

>


<div className="flex items-center gap-3">


<item.icon size={20}/>


{
!collapsed && (
<span>
{item.title}
</span>
)
}


</div>



{
!collapsed && (

<ChevronDown

size={16}

className={
open
? "rotate-180"
:""
}

/>

)

}


</button>





{
open && !collapsed && (

<div className="ml-8 mt-2 space-y-1">


{
item.children.map((child:any)=>(

<Link

key={child.title}

href={child.href}

className="
block
px-3
py-2
rounded-lg
hover:bg-slate-100
dark:hover:bg-slate-800
"

>

{child.title}


</Link>


))

}


</div>

)

}


</div>

);

}