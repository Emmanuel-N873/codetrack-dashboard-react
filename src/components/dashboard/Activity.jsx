import PropTypes from 'prop-types';
import { getDailyMinutes } from '../../utils/dashboardMetrics';

const Activity = ({ logs, asOf }) => {
  const activityData = getDailyMinutes(logs, asOf, 14).map((entry) => ({
    ...entry,
    day: new Date(`${entry.date}T00:00:00Z`).toLocaleDateString('en-US', { weekday: 'short', timeZone: 'UTC' }),
    hours: entry.minutes / 60,
  }));

  const maxHours = Math.max(...activityData.map((d) => d.hours));

  return (
    <section className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 md:px-6">
        <h2 className="text-base md:text-lg font-semibold text-gray-900">Activity</h2>
        <span className="hidden font-mono text-xs text-gray-500 md:inline">Last 14 days</span>
      </div>

      {/* Bar Chart */}
      <div className="mx-5 my-5 flex h-36 flex-1 items-end justify-between gap-1 md:mx-6 md:min-h-32 md:gap-1.5">
        {activityData.map((data, index) => {
          const heightPercentage = (data.hours / maxHours) * 100;

          return (
            <div
              key={index}
              className="group flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2"
            >
              {/* Bar */}
              <button type="button"
                className="w-full rounded-t bg-green-600 transition-all duration-200 hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-green-800"
                style={{ height: `${Math.max(heightPercentage, 5)}%` }}
                title={`${data.day}: ${data.hours} hrs`}
                aria-label={`${data.date}: ${data.hours.toFixed(1)} hours logged`}
              />

              {/* Day Label */}
              <span className="text-xs font-medium text-gray-600 text-center">
                {data.day}
              </span>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <p className="hidden pb-4 text-center text-xs text-gray-600 md:block">
        Height represents hours logged per day
      </p>
    </section>
  );
};

Activity.propTypes = { logs: PropTypes.arrayOf(PropTypes.object).isRequired, asOf: PropTypes.string.isRequired };

export default Activity;
