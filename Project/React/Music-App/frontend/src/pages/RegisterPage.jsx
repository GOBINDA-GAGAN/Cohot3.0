
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Auth } from "../context/AuthContext";


const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.91h5.38a4.6 4.6 0 0 1-2 3.02v2.54h3.24c1.9-1.75 2.98-4.33 2.98-7.4Z" />
        <path fill="#34A853" d="M12 22c2.7 0 4.97-.9 6.62-2.43l-3.24-2.54c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.76-5.59-4.12H3.07v2.62A10 10 0 0 0 12 22Z" />
        <path fill="#FBBC05" d="M6.41 13.87A6.02 6.02 0 0 1 6.1 12c0-.65.11-1.28.31-1.87V7.51H3.07A10 10 0 0 0 2 12c0 1.61.39 3.14 1.07 4.49l3.34-2.62Z" />
        <path fill="#EA4335" d="M12 6.01c1.47 0 2.78.5 3.82 1.5l2.87-2.87A9.64 9.64 0 0 0 12 2a10 10 0 0 0-8.93 5.51l3.34 2.62C7.2 7.77 9.4 6.01 12 6.01Z" />
    </svg>
);

const SpeakerGrille = () => (
    <div className="h-36 w-9 opacity-50" style={{ backgroundImage: "radial-gradient(circle, var(--color-muted) 1.2px, transparent 1.5px)", backgroundSize: "6px 6px" }} />
);

const LevelBar = () => (
    <div className="h-28 w-[9px] rounded-full bg-dark-soft p-[2px] shadow-[inset_0_2px_5px_rgba(0,0,0,.35),0_1px_2px_white]">
        <div className="relative h-full overflow-hidden rounded-full bg-dark">
            <div className="absolute inset-x-0 bottom-0 h-[70%] rounded-full bg-gradient-to-t from-primary-hover via-primary to-primary-light shadow-[0_0_12px_var(--color-primary)]" />
        </div>
    </div>
);

const Input = ({ label, type = "text", placeholder, name, value, onChange }) => (
    <label className="block">
        <span className="mb-1.5 block text-[10px] font-medium uppercase tracking-[.16em] text-muted">{label}</span>
        <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} required className="h-11 w-full rounded-xl border border-border bg-input px-4 text-sm text-text outline-none placeholder:text-subtle shadow-[inset_3px_3px_7px_rgba(18,21,18,.06),inset_-3px_-3px_7px_white] transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10" />
    </label>
);

const RoleSelector = ({ role, setRole }) => (
    <div className="grid grid-cols-2 rounded-xl bg-primary-soft p-1 
    shadow-[inset_2px_2px_5px_rgba(18,21,18,.08),inset_-2px_-2px_5px_white]">
        {["listener", "artist"].map((item) => (
            <button key={item} type="button" onClick={() => setRole(item)} className={`relative rounded-[9px] py-2.5 text-xs font-semibold capitalize transition-all duration-300
             ${role === item ? "bg-surface text-foreground shadow-[0_4px_9px_rgba(18,21,18,.10),inset_0_1px_1px_white]" : "text-subtle hover:text-text"}`}>
                <span className="flex items-center justify-center gap-2">
                    {role === item && <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_7px_var(--color-primary)]" />}
                    {item}
                </span>
            </button>
        ))}
    </div>
);

export default function Register() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [role, setRole] = useState("listener");
    const { users, setUsers } = useContext(Auth);

    const handleformData = (data) => {
        try {
            const finalregisterData = {
                ...data,
                role,
            };

            setUsers((prev) => [...prev, finalregisterData]);
            localStorage.setItem(
                "users",
                JSON.stringify(finalregisterDataa)
            );

            reset();
        } catch (error) {
            console.log(error);
        }
    };


    const handleGoogleLogin = () => {
        console.log("Google register");
    };

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-8 sm:px-6">

            {/* Background */}
            <div className="pointer-events-none absolute h-[650px] w-[650px] rounded-full border border-border/40" />
            <div className="pointer-events-none absolute h-[520px] w-[520px] rounded-full border border-border/60" />
            <div className="pointer-events-none absolute h-[400px] w-[400px] rounded-full border border-border" />
            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />

            {/* Device */}
            <section className="relative w-full max-w-[1050px] overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-surface via-card to-primary-soft shadow-[0_35px_70px_rgba(18,21,18,.12)] sm:rounded-[38px]">

                {/* Header */}
                <header className="flex items-center justify-between px-6 pt-5 text-[8px] uppercase tracking-[.15em] text-subtle sm:px-10">
                    <span>Soul · Identity Module</span>
                    <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_7px_var(--color-primary)]" />AUTH / 01</span>
                </header>

                <div className="grid min-h-[620px] lg:grid-cols-[95px_1fr_95px]">

                    {/* Left Hardware */}
                    <aside className="hidden items-center justify-center gap-5 lg:flex">
                        <LevelBar />
                        <SpeakerGrille />
                    </aside>

                    {/* Register */}
                    <div className="flex items-center justify-center px-5 py-8 sm:px-10 lg:py-10">
                        <div className="w-full max-w-[500px]">

                            {/* Logo */}
                            <div className="mb-7 text-center">
                                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-gradient-to-br from-surface via-card to-primary-light shadow-[0_9px_18px_rgba(18,21,18,.10),inset_3px_3px_5px_white,inset_-3px_-3px_6px_rgba(18,21,18,.08)]">
                                    <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
                                </div>

                                <p className="mb-2 text-[9px] font-semibold tracking-[.45em] text-primary">JOIN THE SOUND</p>
                                <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Create your account</h1>
                                <p className="mt-2 text-xs text-muted">Your music. Your identity. Your space.</p>
                            </div>

                            {/* Role */}
                            <div className="mb-5">
                                <p className="mb-2 text-[10px] font-medium uppercase tracking-[.16em] text-muted">I am a</p>
                                <RoleSelector role={role} setRole={setRole} />
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit(handleformData)} className="space-y-4">

                                <div className="grid gap-4 sm:grid-cols-2">

                                    <input
                                        {...register("name")}
                                        type="name"
                                        placeholder="Your name"
                                        className="h-12 w-full rounded-xl border border-border bg-input px-4 text-sm text-text outline-none shadow-[inset_3px_3px_7px_rgba(18,21,18,.06),inset_-3px_-3px_7px_white] placeholder:text-subtle transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                                    />
                                    <input
                                        {...register("username")}
                                        type="name"
                                        placeholder="@username"
                                        className="h-12 w-full rounded-xl border border-border bg-input px-4 text-sm text-text outline-none shadow-[inset_3px_3px_7px_rgba(18,21,18,.06),inset_-3px_-3px_7px_white] placeholder:text-subtle transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                                    />
                                </div>

                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    className="h-12 w-full rounded-xl border border-border bg-input px-4 text-sm text-text outline-none shadow-[inset_3px_3px_7px_rgba(18,21,18,.06),inset_-3px_-3px_7px_white] placeholder:text-subtle transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                                />
                                <input
                                    {...register("password")}
                                    type="password"
                                    placeholder="••••••••" className="h-12 w-full rounded-xl border border-border bg-input px-4 
                                text-sm text-text outline-none shadow-[inset_3px_3px_7px_rgba(18,21,18,.06),inset_-3px_-3px_7px_white] 
                                placeholder:text-subtle transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                                />

                                {/* Create Account */}
                                <button
                                    type="submiti" className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-primary text-sm font-semibold text-white shadow-[0_6px_18px_rgba(34,168,101,.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_10px_28px_rgba(34,168,101,.3)] active:translate-y-0" >
                                    <span className="relative flex items-center gap-3">
                                        Register
                                    </span>
                                </button>

                            </form>

                            {/* Divider */}
                            <div className="my-5 flex items-center gap-4">
                                <div className="h-px flex-1 bg-border" />
                                <span className="whitespace-nowrap text-[9px] font-medium uppercase tracking-[.25em] text-subtle">or continue with</span>
                                <div className="h-px flex-1 bg-border" />
                            </div>

                            {/* Google */}
                            <button type="button" onClick={handleGoogleLogin} className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-border bg-surface text-sm font-medium text-text shadow-[0_5px_12px_rgba(18,21,18,.06),inset_0_1px_2px_white] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-light hover:bg-primary-soft hover:shadow-[0_8px_16px_rgba(18,21,18,.08)]">
                                <GoogleIcon />
                                Continue with Google
                            </button>

                            {/* Login */}
                            <p className="mt-7 text-center text-xs text-muted">
                                Already have an account?{" "}
                                <Link to="/login" className="font-semibold text-foreground transition-colors hover:text-primary">Log in</Link>
                            </p>

                            {/* Brand */}
                            <div className="mt-7 flex items-center justify-center gap-3">
                                <span className="h-px w-8 bg-border" />
                                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_7px_var(--color-primary)]" />
                                <p className="text-center text-[8px] uppercase tracking-[.28em] text-subtle">Soul · Music Identity System</p>
                                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_7px_var(--color-primary)]" />
                                <span className="h-px w-8 bg-border" />
                            </div>

                        </div>
                    </div>

                    {/* Right Hardware */}
                    <aside className="hidden items-center justify-center gap-5 lg:flex">
                        <SpeakerGrille />
                        <LevelBar />
                    </aside>

                </div>

                {/* Mobile */}
                <div className="flex items-center justify-center gap-5 pb-5 lg:hidden">
                    <div className="h-[5px] w-16 rounded-full bg-border shadow-inner" />
                    <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
                    <div className="h-[5px] w-16 rounded-full bg-border shadow-inner" />
                </div>

            </section>
        </main >
    );
}