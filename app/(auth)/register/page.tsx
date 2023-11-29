"use client";

import React, { useEffect, useState } from "react";
import { Github } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const Register = () => {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordError, setPasswordError] = useState<String | null>(null);

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const isValidEmail = (email: string) => {
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    };
    if (!email || email === "") {
      setError("Email is required");
      e.target[0].focus();
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }
    if (!isValidEmail(email)) {
      setError("Email is invalid");
      e.target[0].focus();
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    } else if (password.length < 8) {
      setError("");
      setPasswordError("Password must be at least 8 characters");
      e.target[1].focus();
      setTimeout(() => {
        setPasswordError(null);
      }, 5000);
      return;
    } else if (password !== rePassword) {
      setError("");
      setPasswordError("Password does not match");
      e.target[2].focus();
      setTimeout(() => {
        setPasswordError(null);
      }, 5000);
      return;
    } else {
      setPasswordError(null);
      const email = e.target[0].value;
      const password = e.target[2].value;

      try {
        setLoading(true);
        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        if (res.status === 400) {
          setLoading(false);
          setError("Email is already in use");
          setTimeout(() => {
            setError("");
          }, 10000);
        }
        if (res.status === 200) {
          setLoading(false);
          setError("");
          router.push("/login");
        }
      } catch (error) {
        setLoading(false);
        setError("Something went wrong");
        setTimeout(() => {
          setError("");
        }, 10000);
        console.log(error);
      }
    }
  };

  if (sessionStatus === "loading") {
    return (
      <div className="mx-auto mt-16 flex max-w-6xl items-center justify-center px-4 text-3xl font-bold">
        Loading
        <span className="loading loading-dots loading-md translate-y-2 transition-all duration-300"></span>
      </div>
    );
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="mx-auto mt-16 flex max-w-6xl items-center justify-center px-4">
        <div className="card rounded-box w-full max-w-md border  border-neutral-content/50 bg-base-100 bg-base-100/70 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold">
              Register
              {loading && (
                <span className="loading loading-dots loading-md translate-y-2"></span>
              )}
            </h2>
            <form
              className="flex flex-col transition-all duration-300 ease-in-out"
              onSubmit={handleSubmit}
            >
              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text">Email</span>
                  <span className="label-text text-error">{error}</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="winlax@example.com"
                  className="peer input input-bordered w-full invalid:input-error placeholder:text-[--bc] placeholder:opacity-70"
                />
                {/* <label className="label ">
                <span className="label-text-alt text-error">
                  Email không đúng định dạng!!
                </span>
              </label> */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="input input-bordered w-full placeholder:text-[--bc] placeholder:opacity-70"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Re-password</span>
                </label>
                <input
                  type="password"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  placeholder="Re-password"
                  className="input input-bordered w-full placeholder:text-[--bc] placeholder:opacity-70"
                />
                {passwordError && (
                  <label className="label">
                    <span className="label-text text-error">
                      {passwordError}
                    </span>
                  </label>
                )}
              </div>
              <button
                type="submit"
                className="btn mt-6 w-full bg-primary text-white hover:text-accent-content"
              >
                Create an account
                {loading && (
                  <span className="loading loading-spinner text-white"></span>
                )}
              </button>
            </form>
            <p className="mt-4 text-center">
              Already have account??{" "}
              <Link
                href="/login"
                className="link text-warning hover:text-opacity-80"
              >
                Login
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={() => {
                signIn("github");
              }}
              className="btn btn-outline"
            >
              <Github className="" />
              Sign in with Github
              <Github className="" />
            </button>
            <button
              onClick={() => {
                signIn("google");
              }}
              className="btn btn-outline"
            >
              <Github className="" />
              Sign in with Google
              <Github className="" />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Register;
