"use client";

import Navbar from "@/components/Shared/Navbar/Navbar";
import { register } from "@/services/actions/register";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  role: string;
  img: string;
}

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
    role: "user",
    img: "",
  });
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProfilePictureChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formDataCopy = { ...formData };
      const formDataWithProfilePicture = {
        ...formDataCopy,
        img: "",
      };

      const formDataToUpdate = new FormData();
      formDataToUpdate.append("image", file);

      try {
        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=834d07a221f5c31be6741d34eba46cc8`,
          {
            method: "POST",
            body: formDataToUpdate,
          }
        );
        const data = await response.json();
        if (data.data && data.data.url) {
          formDataWithProfilePicture.img = data.data.url;
          setFormData(formDataWithProfilePicture);
        }
      } catch (error) {
        console.error("Error uploading profile picture:", error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await register(formData);
      console.log("Registration response:", res);

      if (res.success) {
        const result = await userLogin({
          password: formData.password,
          email: formData.email,
        });

        if (result?.data?.token) {
          storeUserInfo({ accessToken: result.data.token });
          router.push("/dashboard");
        }
      } else {
        console.error("Registration error:", res.message);
      }
    } catch (err) {
      console.error("Error during registration:", err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen my-2 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-8">
            Registration For The-Missing-Place
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="role">
                Role
              </label>
              <input
                type="text"
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="profilePicture">
                Profile Picture
              </label>
              <input
                type="file"
                name="profilePicture"
                id="profilePicture"
                accept="image/*"
                onChange={handleProfilePictureChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-black text-white rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-600">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
