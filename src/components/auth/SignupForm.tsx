"use client";

import Link from "next/link";
import { useState } from "react";

import AuthButton from "./AuthButton";
import AuthInput from "./AuthInput";

import { register } from "@/services/auth.api";


export default function SignupForm() {


  const [form,setForm] = useState({
    fullName:"",
    email:"",
    password:""
  });


  const [loading,setLoading] = useState(false);



  async function handleSubmit(e:any){

    e.preventDefault();


    try{

      setLoading(true);


      const res = await register(form);


      console.log(
        "REGISTER RESPONSE",
        res
      );


      if(res.message){

        alert("Account Created");

        // login page redirect
        // window.location.href="/auth/login"

      }


    }catch(error){

      console.log(error);

      alert("Registration Failed");

    }finally{

      setLoading(false);

    }

  }



  return (

    <form onSubmit={handleSubmit}>


      <AuthInput
        label="Full Name"
        placeholder="John Doe"
        value={form.fullName}
        onChange={(e:any)=>
          setForm({
            ...form,
            fullName:e.target.value
          })
        }
      />



      <AuthInput
        label="Email Address"
        type="email"
        placeholder="name@company.com"
        value={form.email}
        onChange={(e:any)=>
          setForm({
            ...form,
            email:e.target.value
          })
        }
      />



      <AuthInput
        label="Password"
        type="password"
        placeholder="••••••••"
        value={form.password}
        onChange={(e:any)=>
          setForm({
            ...form,
            password:e.target.value
          })
        }
      />



      <AuthButton 
        title={
          loading
          ? "Creating..."
          : "Create Account"
        }
      />



      <p className="mt-4 text-center text-sm text-gray-400">

        Already have an account?{" "}

        <Link
          href="/auth/login"
          className="font-medium text-[#4F7EFF]"
        >
          Login
        </Link>

      </p>


    </form>

  );
}