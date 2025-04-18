// "use client";
// import React, { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm,  SubmitHandler } from "react-hook-form";
// import { z } from "zod";
// import { useRouter } from "next/navigation";
// import { LuLoader2 } from "react-icons/lu";

// const formSchema = z.object({
//   email: z.string().email("Invalid Email").min(5, "Email is too short"),
//   password: z.string().min(6, "Password is too short"),
// });
// type formSchema = z.infer<typeof formSchema>;

// function LoginForm() {
//   const router = useRouter();
//   const [wrongCreds, setWrongCreds] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const {
//     handleSubmit,
//     register,
//     formState: { errors, isSubmitting },
//   } = useForm<formSchema>({
//     resolver: zodResolver(formSchema),
//   });
//   // 2. Define a submit handler.
//   const onSubmit: SubmitHandler<formSchema> = async (values: formSchema) => {
//     try {
//       setIsLoading(true);
//       setWrongCreds(false);

//       const loginData = await signIn("credentials", {
//         email: values.email,
//         password: values.password,
//         redirect: false,
//       });

//       if (loginData?.error) {
//         throw new Error("Please check you login credentials");
//       } else {
//         router.push("/admin");
//       }
//     } catch (error) {
//

//       setWrongCreds(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="flex justify-center items-center h-screen">
//           <div className="md:w-[60%] w-full rounded-lg border border-stroke bg-black/25 shadow-default">
//             <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
//               <h2 className="mb-9 text-2xl font-bold text-black  sm:text-title-xl2">
//                 Sign In
//               </h2>
//               {wrongCreds && (
//                 <div className=" text-red mb-3 rounded-lg mt-2 max-w-fit">
//                   Maybe the email or password is incorrect!
//                 </div>
//               )}
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="mb-4">
//                   <label className="mb-2.5 block font-medium text-black ">
//                     Email
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="email"
//                       placeholder="Enter your email"
//                       className="w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none "
//                       {...register("email")}
//                     />
//                   </div>
//                   {errors.email && (
//                     <div className="dark:text-rose-100 text-rose-600 text-sm mb-3 rounded-lg mt-2 max-w-fit">
//                       {errors.email.message}
//                     </div>
//                   )}
//                 </div>
//                 <div className="mb-6">
//                   <label className="mb-2.5 block font-medium text-black ">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="password"
//                       placeholder="6+ Characters"
//                       className="w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none "
//                       {...register("password")}
//                     />
//                     <span className="absolute right-4 top-4">
//                       <svg
//                         className="fill-current"
//                         width="22"
//                         height="22"
//                         viewBox="0 0 22 22"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <g opacity="0.5">
//                           <path
//                             d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
//                             fill=""
//                           />
//                           <path
//                             d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
//                             fill=""
//                           />
//                         </g>
//                       </svg>
//                     </span>
//                   </div>
//                   {errors.password && (
//                     <div className="dark:text-rose-100 text-rose-600 text-sm mb-3 rounded-lg mt-2 max-w-fit">
//                       {errors.password.message}
//                     </div>
//                   )}
//                 </div>

//                 <div className="mb-5">
//                   <button
//                     type="submit"
//                     className="w-full cursor-pointer rounded-lg border border-primary bg-black text-white p-4 transition hover:bg-opacity-90 disabled:bg-black/75 disabled:cursor-not-allowed inline-flex items-center justify-center gap-4"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? <LuLoader2 className="animate-spin" /> : null}
//                     Sign In
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LoginForm;
