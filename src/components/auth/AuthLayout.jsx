import PropTypes from "prop-types";
import Brand from "./Brand.jsx";

const AuthLayout = ({ children, description, mobileMessage, title, variant }) => {
    const isSignUp = variant === "signup";

    return (
        <main className="min-h-screen bg-white md:grid md:grid-cols-2">
            <header className="flex h-[90px] items-center justify-between bg-[#10171c] px-6 md:hidden">
                <Brand />
                <span className="font-mono text-xs tracking-wide text-slate-400">{mobileMessage}</span>
            </header>

            <section className="flex min-h-[calc(100vh-90px)] items-start justify-center px-6 py-7 sm:px-10 md:min-h-screen md:items-center md:px-12 lg:px-20">
                <div className="w-full max-w-[400px]">
                    <h1 className="text-[28px] font-bold leading-tight tracking-tight text-slate-950">{title}</h1>
                    <p className="mt-1 text-[15px] text-slate-500">{description}</p>
                    {children}
                </div>
            </section>

            <aside className="relative hidden overflow-hidden bg-[#10171c] px-12 py-14 text-white md:block lg:px-20">
                <div className="mx-auto max-w-[400px]">
                    <Brand className="mb-1" />
                    <img
                        alt="A CodeTrack activity grid showing a growing learning streak"
                        className="mt-1 h-auto w-full"
                        src="/images/Background%20Container.png"
                    />
                    <div className="mt-8">
                        <h2 className="text-[32px] font-bold leading-tight tracking-tight">{isSignUp ? "Day 1 starts here." : "Keep the chain alive."}</h2>
                        <p className="mt-3 max-w-[390px] text-[16px] leading-6 text-slate-400">
                            {isSignUp
                                ? "Create your account and log your first session today. From there, you’ll have a 2-day streak."
                                : "You’re one log away from extending your streak. Pick up right where you left off."}
                        </p>
                        <p className="mt-1.5 flex items-center gap-2 text-sm text-slate-400">
                            <span className="flex size-4 items-center justify-center rounded-full border border-emerald-500 text-[10px] text-emerald-400" aria-hidden="true">✓</span>
                            Free forever for your daily log.
                        </p>
                    </div>
                </div>
            </aside>
        </main>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
    description: PropTypes.string.isRequired,
    mobileMessage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["signin", "signup"]).isRequired,
};

export default AuthLayout;
