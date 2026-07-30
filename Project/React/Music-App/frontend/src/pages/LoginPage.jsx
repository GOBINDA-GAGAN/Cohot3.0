import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const GoogleIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M21.35 12.2c0-.64-.06-1.26-.16-1.85H12v3.78h5.26a4.5 4.5 0 0 1-1.95 2.87v2.48h3.16c1.85-1.7 2.88-4.21 2.88-7.28Z" />
        <path fill="#34A853" d="M12 21.75c2.64 0 4.85-.87 6.47-2.37l-3.16-2.48c-.88.59-2 .94-3.31.94-2.55 0-4.71-1.72-5.49-4.03H3.25v2.55A9.75 9.75 0 0 0 12 21.75Z" />
        <path fill="#FBBC05" d="M6.51 13.81A5.9 5.9 0 0 1 6.2 12c0-.63.11-1.25.31-1.81V7.64H3.25A9.75 9.75 0 0 0 2.25 12c0 1.57.37 3.06 1 4.36l3.26-2.55Z" />
        <path fill="#EA4335" d="M12 6.16c1.44 0 2.72.5 3.73 1.46l2.81-2.81A9.42 9.42 0 0 0 12 2.25a9.75 9.75 0 0 0-8.75 5.39l3.26 2.55C7.29 7.88 9.45 6.16 12 6.16Z" />
    </svg>
);

const Speaker = () => (
    <div
        className="h-44 w-10 opacity-50"
        style={{
            backgroundImage:
                "radial-gradient(circle, var(--color-muted) 1.2px, transparent 1.5px)",
            backgroundSize: "7px 7px",
        }}
    />
);

const Meter = ({ level = "70%" }) => (
    <div className="h-32 w-3 rounded-full bg-dark-soft p-[2px] shadow-inner">
        <div className="relative h-full overflow-hidden rounded-full bg-dark">
            <div
                style={{ height: level }}
                className="absolute inset-x-0 bottom-0 rounded-full bg-gradient-to-t from-primary-hover via-primary to-primary-light shadow-[0_0_12px_var(--color-primary)]"
            />
        </div>
    </div>
);

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const [error, seterror] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();



 const handleformData = (data) => {

        console.log(data);
        reset()


    };

    const handleGoogleLogin = () => {
        console.log("Google login");
    };

    return (

        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-4 sm:p-6">

            {/* Background */}
            <div className="pointer-events-none absolute h-[700px] w-[700px] rounded-full border border-border/40" />
            <div className="pointer-events-none absolute h-[550px] w-[550px] rounded-full border border-border/60" />
            <div className="pointer-events-none absolute h-[400px] w-[400px] rounded-full border border-border" />

            <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />

            {/* Device */}
            <section className="relative w-full max-w-5xl overflow-hidden rounded-[30px] border border-border bg-gradient-to-br from-surface via-card to-primary-soft shadow-[0_30px_70px_rgba(18,21,18,.12)]">

                {/* Top */}
                <header className="flex items-center justify-between px-6 pt-5 text-[8px] uppercase tracking-[.2em] text-subtle sm:px-9">
                    <span>Soul · Access Module</span>
                    <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_7px_var(--color-primary)]" />AUTH / 02</span>

                </header>

                <div className="grid min-h-[610px] lg:grid-cols-[100px_1fr_100px]">

                    {/* Left */}
                    <aside className="hidden items-center justify-center gap-5 lg:flex">
                        <Meter level="72%" />
                        <Speaker />
                    </aside>

                    {/* Login */}
                    <div className="flex items-center justify-center px-5 py-10">
                        <div className="w-full max-w-md">

                            {/* Dial */}
                            <div className="mb-5 flex justify-center">
                                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-border bg-gradient-to-br from-surface via-card to-primary-light shadow-[0_10px_20px_rgba(18,21,18,.12),inset_3px_3px_5px_white]">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                                        <span className="h-3 w-3 rounded-full bg-primary shadow-[0_0_14px_var(--color-primary)]" />
                                    </div>

                                </div>
                            </div>

                            {/* Heading */}
                            <div className="mb-7 text-center">
                                <p className="text-[9px] font-semibold tracking-[.4em] text-primary">
                                    WELCOME BACK
                                </p>

                                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-heading">
                                    Enter your sound
                                </h1>

                                <p className="mt-2 text-xs text-muted">
                                    Sign in to continue listening.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit(handleformData)} className="space-y-4">

                                {/* Email */}
                                <div>
                                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-muted">
                                        Email
                                    </label>

                                    <input
                                        {...register("email")}
                                        type="email"
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        className="h-12 w-full rounded-xl border border-border bg-input px-4 text-sm text-text outline-none shadow-[inset_3px_3px_7px_rgba(18,21,18,.06),inset_-3px_-3px_7px_white] placeholder:text-subtle transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-muted">
                                        Password
                                    </label>

                                    <div className="relative">
                                        <input
                                            {...register("password")}
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            autoComplete="current-password"
                                            className="h-12 w-full rounded-xl border border-border bg-input px-4 pr-16 text-sm text-text outline-none shadow-[inset_3px_3px_7px_rgba(18,21,18,.06),inset_-3px_-3px_7px_white] placeholder:text-subtle transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                                        />

                                        <button
                                            type="button"

                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-semibold uppercase text-subtle transition hover:text-primary"
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>

                                    <div className="mt-2 text-right">
                                        <Link
                                            to="/forgot-password"
                                            className="text-xs font-medium text-primary hover:text-primary-hover"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>

                                {/* Login */}
                                <button
                                    type="submit"
                                    className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-primary text-sm font-semibold text-white shadow-[0_6px_18px_rgba(34,168,101,.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_10px_28px_rgba(34,168,101,.3)] active:translate-y-0"
                                >
                                    
                                    <span className="relative flex items-center gap-3">
                                        Log in
                                    </span>
                                </button>
                            </form>

                            {/* OR */}
                            <div className="my-5 flex items-center gap-3">
                                <span className="h-px flex-1 bg-border" />

                                <span className="text-[9px] uppercase tracking-[.2em] text-subtle">
                                    or continue with
                                </span>

                                <span className="h-px flex-1 bg-border" />
                            </div>

                            {/* Google */}
                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-border bg-surface text-sm font-medium text-text shadow-sm transition hover:-translate-y-0.5 hover:border-primary-light hover:bg-primary-soft hover:shadow-md"
                            >
                                <GoogleIcon />

                                Continue with Google
                            </button>

                            {/* Register */}
                            <p className="mt-7 text-center text-xs text-muted">
                                Don&apos;t have an account?{" "}
                                <Link
                                    to="/register"
                                    className="font-semibold text-foreground transition hover:text-primary"
                                >
                                    Create account
                                </Link>
                            </p>

                            {/* Bottom */}
                            <div className="mt-8 flex items-center justify-center gap-3">
                                <span className="h-px w-10 bg-border" />

                                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />

                                <span className="text-[8px] uppercase tracking-[.3em] text-subtle">
                                    Soul
                                </span>

                                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />

                                <span className="h-px w-10 bg-border" />
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <aside className="hidden items-center justify-center gap-5 lg:flex">
                        <Speaker />
                        <Meter level="55%" />
                    </aside>

                </div>

                {/* Mobile */}
                <div className="flex items-center justify-center gap-4 pb-5 lg:hidden">
                    <span className="h-[4px] w-14 rounded-full bg-border" />

                    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />

                    <span className="h-[4px] w-14 rounded-full bg-border" />
                </div>

            </section>
        </main>
    );
}