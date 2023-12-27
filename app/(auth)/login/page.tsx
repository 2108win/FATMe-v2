"use client";

import { Github } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Login = () => {
  const router = useRouter();
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      setEmailError("Email is required");
      e.target[0].focus();
      setTimeout(() => {
        setEmailError("");
      }, 5000);
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError("Email is invalid");
      e.target[0].focus();
      setTimeout(() => {
        setEmailError("");
      }, 5000);
      return;
    } else if (password.length < 8) {
      setEmailError("");
      setError("Password must be at least 8 characters");
      e.target[1].focus();
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    } else {
      setError("");
      const email = e.target[0].value;
      const password = e.target[1].value;
      setLoading(true);

      try {
        const res = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });

        if (res?.error) {
          setError("Email or password is wrong!!");
          setTimeout(() => {
            setError("");
          }, 10000);
          setLoading(false);
          if (res?.url) {
            router.replace("/");
          }
        } else {
          setLoading(false);
          setError("");
          router.replace("/");
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    setLoading(false);
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
        <div className="card w-full max-w-md rounded-box border  border-neutral-content/50 bg-base-100 bg-base-100/70 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold">
              Login
              {loading && (
                <span className="loading loading-dots loading-md translate-y-2 transition-all duration-300"></span>
              )}
            </h2>
            <form
              className="flex flex-col transition-all"
              onSubmit={handleSubmit}
            >
              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text">Email</span>
                  <span className="label-text text-error">{emailError}</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="winlax@example.com"
                  autoComplete="email"
                  className="peer input input-bordered w-full invalid:input-error placeholder:text-[--bc] placeholder:opacity-70"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  autoComplete="current-password"
                  className="input input-bordered w-full placeholder:text-[--bc] placeholder:opacity-70"
                />
              </div>
              {/* forgot password */}
              <label className="label">
                <span className="label-text text-error">
                  {error ? error : ""}
                </span>
                <Link href="/forgot" className="link label-text text-warning">
                  Forgot password?
                </Link>
              </label>
              <button
                type="submit"
                className="btn mt-4 w-full bg-primary text-white hover:text-accent-content"
              >
                Login
                {loading && (
                  <span className="loading loading-spinner transition-all duration-300"></span>
                )}
              </button>
            </form>
            <p className="mt-4 text-center">
              Haven't account??{" "}
              <Link
                href="/register"
                className="link text-warning hover:text-opacity-80"
              >
                Create new account
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={() => {
                signIn("github");
              }}
              className="btn btn-outline"
            >
              <Github />
              Sign in with Github
              <Github />
            </button>
            <button
              onClick={() => {
                signIn("google");
              }}
              className="btn btn-outline"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Login;
