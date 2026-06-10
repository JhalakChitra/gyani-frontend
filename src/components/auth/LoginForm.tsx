"use client";

import Link from "next/link";
import { useState } from "react";

import AuthButton from "./AuthButton";
import AuthInput from "./AuthInput";

import { login } from "@/services/auth.api";


export default function LoginForm() {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const [loading,setLoading] = useState(false);


  async function handleSubmit(e:any){

    e.preventDefault();

    try {

      setLoading(true);

      const res = await login(form);

      console.log("LOGIN RESPONSE",res);


      if(res.accessToken){

        alert("Login Success");

        // yaha dashboard redirect kar sakte ho
        // window.location.href="/dashboard"

      }

    } catch(error){

      console.log(error);
      alert("Login Failed");

    } finally{

      setLoading(false);

    }

  }


  return (
    <form onSubmit={handleSubmit}>

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


      <div className="mb-4 text-right">

        <Link
          href="/auth/forgot-password"
          className="text-sm text-[#4F7EFF]"
        >
          Forgot Password?
        </Link>

      </div>


      <AuthButton 
        title={
          loading 
          ? "Signing..."
          : "Sign In"
        }
      />


      <p className="mt-4 text-center text-sm text-gray-400">

        Don't have an account?{" "}

        <Link
          href="/auth/signup"
          className="font-medium text-[#4F7EFF]"
        >
          Create Account
        </Link>

      </p>


    </form>
  );
}