"use server";

import { RegisterForm } from "@/app/register/page";

export const register = async (formData: RegisterForm) => {
  const preparedData = {
    name: formData.name,
    email: formData.email,
    password: formData.password,
    role: formData.role,
    img: formData.img,
  };

  const res = await fetch(`https://parcel-and-prose.vercel.app/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(preparedData),
    cache: "no-store",
  });

  const info = await res.json();
  return info;
};
