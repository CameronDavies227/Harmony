import { useForm } from "react-hook-form"
import { useState } from "react"
import PropTypes from 'prop-types';
import { Login_Header } from "./Login_Header";
import { Login } from "./Login";
import { Register } from "./Register";

const color = "bg-white-600 dark:bg-slate-600 dark:text-gray-50"
const formClassName = "container border-x border-black mx-auto p-4 grid md:grid-cols-2 gap-1"
const inputClassName = "border border-1 border-black rounded-md p-1"
const errorClassName = "md:col-span-2 text-red-500"

export const Loginpage = () => {



    return <>
    <Register/>
    <Login/>
    </>
}