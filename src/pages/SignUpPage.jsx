import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthField from "../components/auth/AuthField.jsx";
import AuthLayout from "../components/auth/AuthLayout.jsx";
import PasswordField from "../components/auth/PasswordField.jsx";
import SocialLoginButton from "../components/auth/SocialLoginButton.jsx";
import { AuthContext } from "../contexts/AuthContext.jsx";

const initialValues = { displayName: "", email: "", password: "" };

const SignUpPage = () => {
    const { signUp } = useContext(AuthContext);
    const navigate = useNavigate();
    const [form, setForm] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [notice, setNotice] = useState("");

    const updateField = (event) => {
        const { name, value } = event.target;
        setForm((currentForm) => ({ ...currentForm, [name]: value }));
        setErrors((currentErrors) => ({ ...currentErrors, [name]: undefined }));
        setNotice("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const nextErrors = {};
        if (form.displayName.trim().length < 2) nextErrors.displayName = "Enter a name with at least 2 characters.";
        if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email address.";
        if (form.password.length < 8) nextErrors.password = "Use at least 8 characters.";
        if (Object.keys(nextErrors).length) {
            setErrors(nextErrors);
            return;
        }

        const result = signUp(form);
        if (!result.success) {
            setNotice(result.message);
            return;
        }
        navigate("/dashboard");
    };

    const showSocialNotice = () => setNotice("Social sign-up is not available in this demo yet.");

    return (
        <AuthLayout description="Start your streak in under a minute." mobileMessage="Day 1 starts here." title="Create your account" variant="signup">
            <form className="mt-6 space-y-5" noValidate onSubmit={handleSubmit}>
                {notice && <div aria-live="polite" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{notice}</div>}
                <div className="space-y-2.5">
                    <SocialLoginButton icon="/icons/github%20icon.png" onClick={showSocialNotice} provider="GitHub" />
                    <SocialLoginButton icon="/icons/google%20icon.png" onClick={showSocialNotice} provider="Google" />
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 before:h-px before:flex-1 before:bg-slate-200 after:h-px after:flex-1 after:bg-slate-200">or</div>
                <div className="space-y-4">
                    <AuthField error={errors.displayName} id="displayName" label="Name">
                        <input
                            aria-describedby={errors.displayName ? "displayName-error" : undefined}
                            aria-invalid={Boolean(errors.displayName)}
                            autoComplete="name"
                            className={`h-11 w-full rounded-xl border bg-white px-3 text-base text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 ${errors.displayName ? "border-red-500" : "border-slate-200"}`}
                            id="displayName"
                            name="displayName"
                            onChange={updateField}
                            placeholder="Alex Rivera"
                            type="text"
                            value={form.displayName}
                        />
                    </AuthField>
                    <AuthField error={errors.email} id="email" label="Email">
                        <input
                            aria-describedby={errors.email ? "email-error" : undefined}
                            aria-invalid={Boolean(errors.email)}
                            autoComplete="email"
                            className={`h-11 w-full rounded-xl border bg-white px-3 text-base text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 ${errors.email ? "border-red-500" : "border-slate-200"}`}
                            id="email"
                            name="email"
                            onChange={updateField}
                            placeholder="you@example.com"
                            type="email"
                            value={form.email}
                        />
                    </AuthField>
                    <AuthField error={errors.password} id="password" label="Password">
                        <PasswordField error={errors.password} onChange={updateField} placeholder="At least 8 characters" value={form.password} />
                        {!errors.password && <p className="mt-1.5 text-sm text-slate-500">Use at least 8 characters.</p>}
                    </AuthField>
                </div>
                <button className="h-13 w-full rounded-xl bg-[#16a34a] text-base font-semibold text-white shadow-[0_10px_20px_-12px_rgba(22,163,74,0.9)] transition hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2" type="submit">Create account</button>
                <p className="text-sm leading-5 text-slate-500">By signing up you agree to our <a className="font-medium text-teal-600 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600" href="#terms">Terms</a> and <a className="font-medium text-teal-600 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600" href="#privacy">Privacy Policy.</a></p>
                <p className="text-center text-sm text-slate-600">Already have an account? <Link className="font-semibold text-teal-600 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600" to="/signin">Log in.</Link></p>
            </form>
        </AuthLayout>
    );
};

export default SignUpPage;
