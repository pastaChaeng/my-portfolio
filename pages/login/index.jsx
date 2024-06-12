import { motion } from "framer-motion";
import { BsArrowRight, BsCaretLeft } from "react-icons/bs";
import Link from "next/link";
import { fadeIn } from "../../variants";
import { useState } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Thank you. I will get back to you ASAP."))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            <span className="text-[#d580ff]">Login .</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
          
            data-netlify="true"
          >
            {/* input group */}
            <div className="gap-6 grid grid-cols-1 grid-rows-2 bg-[#d580ff0e] p-10 rounded-lg">
            <div>
              Email :
             <input
                type="email"
                name="email"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
             </div>
              <div>
                  Password :
                  <input
                type="password"
                name="password"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required

              />
              </div>
              <div className="text-[#d580ff]">
             Forgot your password?
            </div>    

          <button
              type="submit"
              className="btn rounded-xl border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-[#d580ff] group"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Login
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
            <div className="text-[#d580ff] underline">
             Back to Homepage 
            </div>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Login;
