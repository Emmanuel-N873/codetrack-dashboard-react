const Activity = () => {
  const activityData = [
    { day: 'Wed', hours: 2.5 },
    { day: 'Thu', hours: 0.5 },
    { day: 'Fri', hours: 1 },
    { day: 'Sat', hours: 3.5 },
    { day: 'Sun', hours: 1.5 },
    { day: 'Mon', hours: 2 },
    { day: 'Tue', hours: 4.5 },
    { day: 'Wed', hours: 2.5 },
    { day: 'Thu', hours: 3 },
    { day: 'Fri', hours: 0.75 },
    { day: 'Sat', hours: 2.5 },
    { day: 'Sun', hours: 1.25 },
    { day: 'Mon', hours: 3.25 },
    { day: 'Tue', hours: 2.75 },
  ];

  const maxHours = Math.max(...activityData.map((d) => d.hours));

  return (
    <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 mb-4 md:mb-6">
        <h2 className="text-base md:text-lg font-semibold text-gray-900">Activity</h2>
        <span className="text-xs md:text-sm text-gray-600 font-medium">Last 14 days</span>
      </div>

      {/* Bar Chart */}
      <div className="flex items-end justify-between gap-1 md:gap-1.5 h-32 md:h-40">
        {activityData.map((data, index) => {
          const heightPercentage = (data.hours / maxHours) * 100;

          return (
            <div
              key={index}
              className="flex-1 flex flex-col items-center justify-end gap-2 group cursor-pointer h-full"
            >
              {/* Bar */}
              <div
                className="w-full bg-green-500 hover:bg-green-600 rounded-t transition-all duration-200 group-hover:shadow-lg"
                style={{ height: `${Math.max(heightPercentage, 5)}%` }}
                title={`${data.day}: ${data.hours} hrs`}
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
      <p className="text-xs text-gray-600 text-center mt-4 md:mt-6">
        Height represents hours logged per day
      </p>
    </section>
  );
};

export default Activity;