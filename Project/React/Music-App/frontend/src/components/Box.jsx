import React, { useState } from "react";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function Knob({
    label,
    value = 40,
    size = 58,
    dark = false,
    onChange,
}) {
    const rotation = -135 + (value / 100) * 270;

    const handleWheel = (e) => {
        e.preventDefault();
        onChange?.(clamp(value - e.deltaY * 0.08, 0, 100));
    };

    return (
        <div className="flex flex-col items-center gap-2">
            <div
                onWheel={handleWheel}
                className="relative cursor-ns-resize rounded-full p-[2px]
                   bg-gradient-to-br from-white via-slate-300 to-slate-700
                   shadow-[0_8px_16px_rgba(15,23,42,.18)]"
                style={{ width: size, height: size }}
            >
                <div
                    className={`
            relative h-full w-full rounded-full
            ${dark
                            ? "bg-gradient-to-br from-slate-500 to-slate-800"
                            : "bg-gradient-to-br from-white via-slate-100 to-slate-300"
                        }
            shadow-[inset_3px_3px_6px_rgba(255,255,255,.9),inset_-3px_-3px_7px_rgba(15,23,42,.18)]
          `}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            transform: `rotate(${rotation}deg)`,
                        }}
                    >
                        <span
                            className={`absolute left-1/2 top-[7px] h-[3px] w-[13px]
                          -translate-x-1/2 rounded-full
                          ${dark ? "bg-cyan-300" : "bg-slate-800"}`}
                        />
                    </div>
                </div>
            </div>

            <span className="text-[10px] font-medium text-slate-700">
                {label}
            </span>
        </div>
    );
}

function SpeakerGrille() {
    return (
        <div
            className="h-36 w-12 opacity-80"
            style={{
                backgroundImage:
                    "radial-gradient(circle, #334155 1.35px, transparent 1.7px)",
                backgroundSize: "7px 7px",
            }}
        />
    );
}

function LevelMeter() {
    return (
        <div className="flex h-28 w-4 items-center justify-center rounded-full bg-slate-700 p-[3px]
                    shadow-[inset_0_2px_4px_rgba(0,0,0,.45),0_1px_2px_white]">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-900">
                <div
                    className="absolute bottom-0 left-0 right-0 h-[68%]
                     bg-gradient-to-t from-cyan-700 via-cyan-400 to-cyan-100
                     shadow-[0_0_12px_rgba(34,211,238,.9)]"
                />
            </div>
        </div>
    );
}

function MainKnob({ value, onChange }) {
    const rotation = -135 + (value / 100) * 270;

    const handleWheel = (e) => {
        e.preventDefault();
        onChange(clamp(value - e.deltaY * 0.06, 0, 100));
    };

    return (
        <div className="relative flex items-center justify-center">
            {/* sound rings */}
            <div className="absolute h-56 w-56 rounded-full border border-slate-300/25" />
            <div className="absolute h-48 w-48 rounded-full border border-slate-300/30" />
            <div className="absolute h-40 w-40 rounded-full border border-slate-300/40" />

            {/* tick marks */}
            <div
                className="absolute h-36 w-36 rounded-full opacity-50"
                style={{
                    background:
                        "repeating-conic-gradient(from -135deg, #334155 0deg 1deg, transparent 1deg 7deg)",
                    maskImage:
                        "radial-gradient(circle, transparent 0 64%, black 65% 70%, transparent 71%)",
                    WebkitMaskImage:
                        "radial-gradient(circle, transparent 0 64%, black 65% 70%, transparent 71%)",
                }}
            />

            <div
                onWheel={handleWheel}
                className="relative h-28 w-28 cursor-ns-resize rounded-full
                   bg-gradient-to-br from-white via-slate-300 to-slate-800 p-[4px]
                   shadow-[0_14px_25px_rgba(15,23,42,.28)]"
            >
                <div
                    className="relative h-full w-full rounded-full
                     bg-gradient-to-br from-white via-slate-100 to-slate-300
                     shadow-[inset_5px_5px_10px_white,inset_-5px_-5px_12px_rgba(15,23,42,.18)]"
                >
                    <div
                        className="absolute inset-0"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    >
                        <span className="absolute left-1/2 top-4 h-1 w-5 -translate-x-1/2 rounded-full bg-slate-800" />
                        <span className="absolute left-1/2 top-4 h-1 w-2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Box() {
    const [majesty, setMajesty] = useState(42);

    const [controls, setControls] = useState({
        gratefulness: 25,
        sadness: 20,
        glory: 30,
        fame: 22,
        fear: 45,
        anger: 40,
    });

    const updateControl = (key, value) => {
        setControls((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <main className="flex min-h-screen items-center justify-center overflow-hidden
                     bg-[#e7edf1] p-6">

            <section
                className="relative w-full max-w-[1050px] rounded-[32px]
                   border border-white/80
                   bg-gradient-to-br from-white/90 via-[#f5f8fa] to-[#e3e9ed]
                   px-8 py-6
                   shadow-[0_30px_50px_rgba(71,85,105,.25),inset_0_1px_3px_white]"
            >
                {/* header */}
                <div className="mb-5 flex justify-between text-[8px] text-slate-400">
                    <span>Soul Version · Majesty</span>
                    <span>Build 2.04.03347</span>
                </div>

                <div className="grid grid-cols-[22px_55px_1fr_55px_22px] items-center gap-6">

                    {/* LEFT METER */}
                    <LevelMeter />

                    {/* LEFT SPEAKER */}
                    <SpeakerGrille />

                    {/* CENTER */}
                    <div className="grid grid-cols-3 items-center">

                        {/* LEFT CONTROLS */}
                        <div className="flex flex-col items-center gap-12">
                            <Knob
                                label="Gratefulness"
                                size={34}
                                value={controls.gratefulness}
                                onChange={(v) => updateControl("gratefulness", v)}
                            />

                            <Knob
                                label="Glory"
                                value={controls.glory}
                                onChange={(v) => updateControl("glory", v)}
                            />

                            <Knob
                                label="Fear"
                                size={36}
                                dark
                                value={controls.fear}
                                onChange={(v) => updateControl("fear", v)}
                            />
                        </div>

                        {/* MAIN CONTROL */}
                        <div className="flex flex-col items-center gap-7">
                            <MainKnob
                                value={majesty}
                                onChange={setMajesty}
                            />

                            <div className="text-center">
                                <p className="mb-2 text-[8px] tracking-[7px] text-slate-600">
                                    MAJESTY
                                </p>

                                <h2 className="text-sm font-medium text-slate-600">
                                    SoulExtender
                                </h2>
                            </div>
                        </div>

                        {/* RIGHT CONTROLS */}
                        <div className="flex flex-col items-center gap-12">
                            <Knob
                                label="Sadness"
                                size={34}
                                value={controls.sadness}
                                onChange={(v) => updateControl("sadness", v)}
                            />

                            <Knob
                                label="Fame"
                                value={controls.fame}
                                onChange={(v) => updateControl("fame", v)}
                            />

                            <Knob
                                label="Anger"
                                size={36}
                                dark
                                value={controls.anger}
                                onChange={(v) => updateControl("anger", v)}
                            />
                        </div>

                    </div>

                    {/* RIGHT SPEAKER */}
                    <SpeakerGrille />

                    {/* RIGHT METER */}
                    <LevelMeter />
                </div>
            </section>
        </main>
    );
}