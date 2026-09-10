import { Eye, EyeOff } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";

const PasswordField = ({ error, id = "password", onChange, placeholder, value }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="relative">
            <input
                aria-describedby={error ? `${id}-error` : undefined}
                aria-invalid={Boolean(error)}
                className={`h-11 w-full rounded-xl border bg-white px-3 pr-12 text-base text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 ${error ? "border-red-500" : "border-slate-200"}`}
                id={id}
                name={id}
                onChange={onChange}
                placeholder={placeholder}
                type={isVisible ? "text" : "password"}
                value={value}
            />
            <button
                aria-label={isVisible ? "Hide password" : "Show password"}
                className="absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-xl text-slate-500 hover:text-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                onClick={() => setIsVisible((visible) => !visible)}
                type="button"
            >
                {isVisible ? <EyeOff aria-hidden="true" size={17} /> : <Eye aria-hidden="true" size={17} />}
            </button>
        </div>
    );
};

PasswordField.propTypes = {
    error: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default PasswordField;
