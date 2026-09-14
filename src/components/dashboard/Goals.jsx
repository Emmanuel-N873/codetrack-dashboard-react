const Goals = () => {
  const goals = [
    {
      id: 1,
      title: 'Learn React',
      current: 12,
      target: 28,
      unit: 'hours',
      color: 'bg-green-500',
    },
    {
      id: 2,
      title: 'DS&A topics mastered',
      current: 7,
      target: 10,
      unit: 'topics',
      color: 'bg-teal-600',
    },
    {
      id: 3,
      title: '30-day commit streak',
      current: 12,
      target: 30,
      unit: 'days',
      color: 'bg-yellow-500',
    },
  ];

  const getProgressPercentage = (current, target) => {
    return (current / target) * 100;
  };

  return (
    <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-sm">
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">Goals</h2>

      <div className="space-y-4 md:space-y-6">
        {goals.map((goal) => {
          const percentage = getProgressPercentage(goal.current, goal.target);

          return (
            <div key={goal.id}>
              {/* Goal Title and Ratio */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900">{goal.title}</h3>
                <span className="text-sm font-medium text-gray-600">
                  {goal.current} of {goal.target} {goal.unit}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full ${goal.color} transition-all duration-300`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Goals;