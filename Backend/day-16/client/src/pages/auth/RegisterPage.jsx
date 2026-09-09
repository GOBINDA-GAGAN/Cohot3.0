import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ArrowRight,
  Cloud,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
} from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  const password = watch("password");

  // API call here
  const onSubmit = async (data) => {
    console.log("Register data:", data);

    // Example:
    // await axios.post("/api/auth/register", data);
  };

  const handleGoogleLogin = () => {
    console.log("Continue with Google");

    // Google OAuth API call here
  };

  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-16">

        {/* ================= LEFT CONTENT ================= */}
        <section className="hidden lg:block">
          <div className="max-w-md">

            {/* Logo */}
            <a href="/" className="mb-10 inline-flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Cloud size={19} />
              </span>

              <span className="text-lg font-semibold tracking-tight text-foreground">
                CloudVault
              </span>
            </a>

            {/* Heading */}
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-foreground xl:text-5xl">
              Your files,
              <br />
              your workspace,
              <br />
              <span className="text-purple">your way.</span>
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-6 text-secondary">
              Create your CloudVault workspace and securely manage,
              organize, and collaborate on your files from anywhere.
            </p>

            {/* Info Grid */}
            <div className="mt-8 grid grid-cols-2 gap-3">

              <InfoCard
                icon={Lock}
                title="Secure"
                text="Privacy-first storage"
              />

              <InfoCard
                icon={Cloud}
                title="Cloud"
                text="Access anywhere"
              />

              <InfoCard
                icon={User}
                title="Teams"
                text="Easy collaboration"
              />

              <InfoCard
                icon={ArrowRight}
                title="Simple"
                text="Built for everyone"
              />

            </div>
          </div>
        </section>

        {/* ================= REGISTER ================= */}
        <section className="mx-auto w-full max-w-md">

          {/* Mobile Logo */}
          <div className="mb-6 flex justify-center lg:hidden">
            <a href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Cloud size={19} />
              </span>

              <span className="text-lg font-semibold tracking-tight text-foreground">
                CloudVault
              </span>
            </a>
          </div>

          {/* Card */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-7">

            {/* Header */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Create your account
              </h2>

              <p className="mt-2 text-sm text-secondary">
                Start managing your files in minutes.
              </p>
            </div>

            {/* Google */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="mt-6 flex h-10 w-full items-center justify-center gap-3 rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition hover:bg-card-secondary active:scale-[0.99]"
            >
              <GoogleIcon />
              Continue with Google
            </button>

            {/* Divider */}
            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />

              <span className="text-[10px] font-medium text-muted">
                OR
              </span>

              <div className="h-px flex-1 bg-border" />
            </div>

            {/* ================= FORM ================= */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3.5"
            >

              {/* First + Last Name */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-1.5 block text-xs font-medium text-foreground"
                  >
                    First name
                  </label>

                  <div className="relative">
                    <User
                      size={15}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                    />

                    <input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className={`h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm text-foreground outline-none transition placeholder:text-primary/20 focus:ring-2 focus:ring-ring/10 ${
                        errors.firstName
                          ? "border-red-500"
                          : "border-border focus:border-ring"
                      }`}
                      {...register("firstName", {
                        required: "First name is required",
                        minLength: {
                          value: 2,
                          message: "At least 2 characters",
                        },
                      })}
                    />
                  </div>

                  {errors.firstName && (
                    <p className="mt-1 text-[10px] text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-1.5 block text-xs font-medium text-foreground"
                  >
                    Last name
                  </label>

                  <div className="relative">
                    <User
                      size={15}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                    />

                    <input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className={`h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm text-foreground outline-none transition placeholder:text-primary/20 focus:ring-2 focus:ring-ring/10 ${
                        errors.lastName
                          ? "border-red-500"
                          : "border-border focus:border-ring"
                      }`}
                      {...register("lastName", {
                        required: "Last name is required",
                        minLength: {
                          value: 2,
                          message: "At least 2 characters",
                        },
                      })}
                    />
                  </div>

                  {errors.lastName && (
                    <p className="mt-1 text-[10px] text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="mb-1.5 block text-xs font-medium text-foreground"
                >
                  Username
                </label>

                <div className="relative">
                  <User
                    size={15}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                  />

                  <input
                    id="username"
                    type="text"
                    placeholder="johndoe"
                    className={`h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm text-foreground outline-none transition placeholder:text-primary/20 focus:ring-2 focus:ring-ring/10 ${
                      errors.username
                        ? "border-red-500"
                        : "border-border focus:border-ring"
                    }`}
                    {...register("username", {
                      required: "Username is required",
                      minLength: {
                        value: 3,
                        message: "Username must be at least 3 characters",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9_]+$/,
                        message:
                          "Only letters, numbers and underscore allowed",
                      },
                    })}
                  />
                </div>

                {errors.username && (
                  <p className="mt-1 text-[10px] text-red-500">
                    {errors.username.message}
                  </p>
                )}
              </div>

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
                    className={`h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm text-foreground outline-none transition placeholder:text-primary/20 focus:ring-2 focus:ring-ring/10 ${
                      errors.email
                        ? "border-red-500"
                        : "border-border focus:border-ring"
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-[10px] text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-xs font-medium text-foreground"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={15}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className={`h-10 w-full rounded-md border bg-background pl-9 pr-10 text-sm text-foreground outline-none transition placeholder:text-primary/20 focus:ring-2 focus:ring-ring/10 ${
                      errors.password
                        ? "border-red-500"
                        : "border-border focus:border-ring"
                    }`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      validate: {
                        uppercase: (value) =>
                          /[A-Z]/.test(value) ||
                          "Must contain an uppercase letter",

                        number: (value) =>
                          /[0-9]/.test(value) ||
                          "Must contain a number",
                      },
                    })}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted transition hover:text-foreground"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={15} />
                    ) : (
                      <Eye size={15} />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1 text-[10px] text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Terms */}
              <div>
                <label className="flex cursor-pointer items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-primary"
                    {...register("terms", {
                      required: "You must accept the terms",
                    })}
                  />

                  <span className="text-[11px] leading-5 text-secondary">
                    I agree to the{" "}
                    <a
                      href="/terms"
                      className="font-medium text-foreground hover:underline"
                    >
                      Terms
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy"
                      className="font-medium text-foreground hover:underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>

                {errors.terms && (
                  <p className="mt-1 text-[10px] text-red-500">
                    {errors.terms.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-button transition hover:bg-primary-hover active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Creating account...
                  </>
                ) : (
                  <>
                    Create account
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>

            {/* Login */}
            <p className="mt-5 text-center text-xs text-secondary">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-foreground hover:underline"
              >
                Log in
              </a>
            </p>
          </div>

          {/* Security */}
          <p className="mt-4 text-center text-[10px] text-muted">
            Secure authentication · Your data stays private
          </p>
        </section>
      </div>
    </main>
  );
};

/* ================= INFO CARD ================= */

const InfoCard = ({ icon: Icon, title, text }) => {
  return (
    <div className="rounded-lg border border-border bg-card p-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-card-secondary text-purple">
        <Icon size={15} />
      </div>

      <h3 className="mt-3 text-xs font-semibold text-foreground">
        {title}
      </h3>

      <p className="mt-1 text-[10px] text-muted">
        {text}
      </p>
    </div>
  );
};

/* ================= GOOGLE ICON ================= */

const GoogleIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fill="#4285F4"
      d="M21.35 12.23c0-.79-.07-1.55-.22-2.27H12v4.3h5.22a4.46 4.46 0 0 1-1.94 2.93v2.43h3.14c1.84-1.69 2.93-4.18 2.93-7.39Z"
    />

    <path
      fill="#34A853"
      d="M12 21.67c2.63 0 4.84-.87 6.45-2.35l-3.14-2.43c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.5A9.74 9.74 0 0 0 12 21.67Z"
    />

    <path
      fill="#FBBC05"
      d="M6.54 13.78A5.84 5.84 0 0 1 6.23 12c0-.62.11-1.22.31-1.78v-2.5H3.3A9.74 9.74 0 0 0 2.27 12c0 1.57.38 3.05 1.03 4.28l3.24-2.5Z"
    />

    <path
      fill="#EA4335"
      d="M12 6.19c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.84 3.28 14.63 2.33 12 2.33a9.74 9.74 0 0 0-8.7 5.39l3.24 2.5C7.31 7.91 9.46 6.19 12 6.19Z"
    />
  </svg>
);

export default Register;