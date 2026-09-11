import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Cloud,
  ShieldCheck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  // API call here
  const onSubmit = async (data) => {
    console.log("Login data:", data);

    /*
      Example:

      const response = await axios.post(
        "/api/auth/login",
        data
      );

      console.log(response.data);
    */
  };

  // Google login
  const handleGoogleLogin = () => {
    console.log("Continue with Google");

    // Google OAuth API call here
  };

  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-6">
      <div className="flex min-h-[calc(100vh-3rem)] items-center justify-center">
        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="mb-7 flex justify-center">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Cloud size={19} strokeWidth={2} />
              </div>

              <span className="text-lg font-semibold tracking-tight text-foreground">
                CloudVault
              </span>
            </a>
          </div>

          {/* Card */}
          <div className="card p-5 sm:p-7">

            {/* Header */}
            <div className="text-center">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                Welcome back
              </h1>

              <p className="mt-2 text-sm leading-6 text-secondary">
                Sign in to continue to your CloudVault workspace.
              </p>
            </div>

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="mt-6 flex h-10 w-full items-center justify-center gap-3 rounded-md border border-border bg-white px-4 text-sm font-medium text-[#202124] shadow-sm transition hover:bg-card-secondary active:scale-[0.99]"
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

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >

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
                        ? "border-red-500 focus:border-red-500"
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
                  <p className="mt-1.5 text-[11px] text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-xs font-medium text-foreground"
                  >
                    Password
                  </label>

                  <a
                    href="/forgot-password"
                    className="text-[11px] font-medium text-secondary transition hover:text-foreground"
                  >
                    Forgot password?
                  </a>
                </div>

                <div className="relative">
                  <Lock
                    size={15}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className={`h-10 w-full rounded-md border bg-background pl-9 pr-10 text-sm text-foreground outline-none transition placeholder:text-primary/20 focus:ring-2 focus:ring-ring/10 ${
                      errors.password
                        ? "border-red-500 focus:border-red-500"
                        : "border-border focus:border-ring"
                    }`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />

                  {/* Show / Hide Password */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
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
                  <p className="mt-1.5 text-[11px] text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-border accent-primary"
                  {...register("remember")}
                />

                <label
                  htmlFor="remember"
                  className="cursor-pointer text-[11px] text-secondary"
                >
                  Remember me
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-button transition hover:bg-primary-hover active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>

            {/* Security */}
            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted">
              <ShieldCheck size={14} className="text-success" />
              Secure authentication
            </div>
          </div>

          {/* Register */}
          <p className="mt-5 text-center text-xs text-secondary">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-semibold text-foreground transition hover:underline"
            >
              Create account
            </a>
          </p>

          {/* Terms */}
          <p className="mt-4 text-center text-[10px] leading-5 text-muted">
            By continuing, you agree to our{" "}
            <a
              href="/terms"
              className="text-secondary underline underline-offset-2 hover:text-foreground"
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="text-secondary underline underline-offset-2 hover:text-foreground"
            >
              Privacy Policy
            </a>
            .
          </p>

          <p className="mt-3 text-center text-[10px] text-muted">
            © {new Date().getFullYear()} CloudVault
          </p>
        </div>
      </div>
    </main>
  );
};

/* =========================
   GOOGLE ICON
========================= */

const GoogleIcon = () => {
  return (
    <svg
      width="17"
      height="17"
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
        d="M12 6.19c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.84 3.28 14.63 2.33 12 2.33a9.74 9.74 0 0 0-8.7 5.39l3.24 2.5 3.24-2.5C7.31 7.91 9.46 6.19 12 6.19Z"
      />
    </svg>
  );
};

export default Login;