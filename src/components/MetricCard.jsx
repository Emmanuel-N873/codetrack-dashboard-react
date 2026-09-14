import PropTypes from 'prop-types';

const MetricCard = ({ icon: Icon, label, value, unit, helperText }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Icon and Label */}
      <div className="flex items-center gap-2 mb-3 md:mb-4">
        {Icon && <Icon size={18} className="md:w-5 md:h-5 text-gray-500" />}
        <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">{label}</span>
      </div>

      {/* Value */}
      <div className="mb-3 md:mb-4">
        <div className="text-3xl md:text-4xl font-bold text-gray-900">
          {value}
          {unit && <span className="text-lg md:text-xl font-normal text-gray-500 ml-1">{unit}</span>}
        </div>
      </div>

      {/* Helper Text */}
      {helperText && (
        <p className="text-xs md:text-sm text-gray-600">{helperText}</p>
      )}
    </div>
  );
};

MetricCard.propTypes = {
  icon: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.string,
  helperText: PropTypes.string,
};

MetricCard.defaultProps = {
  icon: null,
  unit: '',
  helperText: '',
};

export default MetricCard;