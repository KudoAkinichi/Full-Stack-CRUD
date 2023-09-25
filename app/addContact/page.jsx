"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Input from "../../components/Input";
import { useMutation } from "@tanstack/react-query";
import { addData } from "@/fetchData/fetchData";

const page = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: addData,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["contact"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(form);
    router.push("/");
  };

  const inputs = [
    {
      label: "Full Name",
      type: "text",
      name: "fullName",
    },
    {
      label: "Email",
      type: "email",
      name: "email",
    },
    {
      label: "Phone No",
      type: "text",
      name: "phonenumber",
    },
    {
      label: "Address",
      type: "text",
      name: "address",
    },
  ];

  return (
    <div className="w-[90%] md:w-[30rem] mx-auto my-[5rem] border border-gray-500 bg-white/10 rounded-md p-6">
      <span
        onClick={() => router.push("/")}
        className="bg-blue-600/50 p-3 rounded-md hover:bg-blue-700/50 absolute left-[3rem] top-[3rem] cursor-pointer"
      >
        Go Back
      </span>
      <h2 className="pb-7 text-center text-2xl">Contact Form</h2>
      <form onSubmit={handleSubmit}>
        {inputs.map((item, i) => (
          <Input item={item} key={i} setForm={setForm} form={form} />
        ))}
        <button
          type="submit"
          className="mt-[2rem] bg-blue-600/50 w-full p-3 rounded-md hover:bg-blue-700/50"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default page;
