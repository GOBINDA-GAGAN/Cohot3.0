import React from "react";
import { useForm } from "react-hook-form";
import { ArrowLeft, ArrowRight, Cloud, Mail } from "lucide-react";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Reset password:", data);

    // API call here
    // await axios.post("/api/auth/forgot-password", data);
  };

  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <a href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Cloud size={19} strokeWidth={2} />
              </span>

              <span className="text-lg font-semibold tracking-tight text-foreground">
                CloudVault
              </span>
            </a>
          </div>

          {/* Card */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-8">

            {/* Back */}
            <a
              href="/login"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary transition hover:text-foreground"
            >
              <ArrowLeft size={14} />
              Back to login
            </a>

            {/* Header */}
            <div className="mt-7 text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-card-secondary text-purple">
                <Mail size={20} />
              </div>

              <h1 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                Forgot your password?
              </h1>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-secondary">
                Enter your email address and we'll send you a link to reset
                your password.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-4">

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium text-foreground"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={15}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                  />

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className={`h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-ring focus:ring-2 focus:ring-ring/10 ${
                      errors.email
                        ? "border-danger"
                        : "border-border"
                    }`}
                    {...register("email", {
                      required: "Email address is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                </div>

                {errors.email && (
                  <p className="mt-1.5 text-xs text-danger">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-button transition hover:bg-primary-hover disabled:pointer-events-none disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send reset link
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>

            {/* Login */}
            <p className="mt-6 text-center text-xs text-secondary">
              Remember your password?{" "}
              <a
                href="/login"
                className="font-semibold text-foreground hover:underline"
              >
                Log in
              </a>
            </p>
          </div>

          {/* Footer */}
          <p className="mt-5 text-center text-[10px] text-muted">
            Secure authentication · Your data stays private
          </p>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;