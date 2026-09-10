import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthField from "../components/auth/AuthField.jsx";
import AuthLayout from "../components/auth/AuthLayout.jsx";
import PasswordField from "../components/auth/PasswordField.jsx";
import SocialLoginButton from "../components/auth/SocialLoginButton.jsx";
import { AuthContext } from "../contexts/AuthContext.jsx";

const initialValues = { email: "", password: "", remember: false };

const SignInPage = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [form, setForm] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [notice, setNotice] = useState("");

    const updateField = (event) => {
        const { checked, name, type, value } = event.target;
        setForm((currentForm) => ({ ...currentForm, [name]: type === "checkbox" ? checked : value }));
        setErrors((currentErrors) => ({ ...currentErrors, [name]: undefined }));
        setNotice("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const nextErrors = {};
        if (!form.email.trim()) nextErrors.email = "Enter your email address.";
        if (!form.password) nextErrors.password = "Enter your password.";
        if (Object.keys(nextErrors).length) {
            setErrors(nextErrors);
            return;
        }

        const result = signIn(form.email, form.password);
        if (!result.success) {
            setNotice(result.message);
            return;
        }
        navigate("/dashboard");
    };

    const showSocialNotice = () => setNotice("Social sign-in is not available in this demo yet.");

    return (
        <AuthLayout description="Log in to keep your streak going." mobileMessage="Welcome back." title="Welcome back" variant="signin">
            <form className="mt-6 space-y-5" noValidate onSubmit={handleSubmit}>
                {notice && <div aria-live="polite" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{notice}</div>}
                <div className="space-y-2.5">
                    <SocialLoginButton icon="/icons/github%20icon.png" onClick={showSocialNotice} provider="GitHub" />
                    <SocialLoginButton icon="/icons/google%20icon.png" onClick={showSocialNotice} provider="Google" />
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 before:h-px before:flex-1 before:bg-slate-200 after:h-px after:flex-1 after:bg-slate-200">or</div>
                <div className="space-y-4">
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
                        <PasswordField error={errors.password} onChange={updateField} placeholder="Your password" value={form.password} />
                    </AuthField>
                </div>
                <div className="flex items-center justify-between gap-3 text-sm">
                    <label className="flex cursor-pointer items-center gap-2 text-slate-600" htmlFor="remember">
                        <input checked={form.remember} className="size-4 accent-emerald-600" id="remember" name="remember" onChange={updateField} type="checkbox" />
                        Remember me
                    </label>
                    <a className="font-medium text-teal-600 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600" href="mailto:support@codetrack.test">Forgot password?</a>
                </div>
                <button className="h-13 w-full rounded-xl bg-[#16a34a] text-base font-semibold text-white shadow-[0_10px_20px_-12px_rgba(22,163,74,0.9)] transition hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2" type="submit">Log in</button>
                <p className="pt-0.5 text-center text-sm text-slate-600">New here? <Link className="font-semibold text-teal-600 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600" to="/signup">Create an account.</Link></p>
            </form>
        </AuthLayout>
    );
};

export default SignInPage;
