const Brand = ({ className = "" }) => (
    <div className={`flex items-center gap-2 font-semibold text-white ${className}`}>
        <span className="grid grid-cols-3 gap-0.5" aria-hidden="true">
            {Array.from({ length: 9 }, (_, index) => (
                <span
                    className={`size-1.5 rounded-[1px] ${[1, 2, 3, 5, 6, 7].includes(index) ? "bg-emerald-400" : "bg-emerald-600"}`}
                    key={index}
                />
            ))}
        </span>
        <span>Code<span className="text-emerald-400">Track</span></span>
    </div>
);

export default Brand;
