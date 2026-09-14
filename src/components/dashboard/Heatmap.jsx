import { TrendingUp } from 'lucide-react';

const Heatmap = () => {
  // Generate a GitHub-style contribution heatmap
  const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Generate random contribution data for demo
  const generateHeatmapData = () => {
    const data = [];
    for (let i = 0; i < 53; i++) { // 53 weeks
      const week = [];
      for (let j = 0; j < 7; j++) { // 7 days
        const intensity = Math.floor(Math.random() * 5); // 0-4 intensity levels
        week.push(intensity);
      }
      data.push(week);
    }
    return data;
  };

  const heatmapData = generateHeatmapData();

  const getColor = (intensity) => {
    const colors = [
      'bg-gray-100',
      'bg-green-200',
      'bg-green-300',
      'bg-green-500',
      'bg-green-700',
    ];
    return colors[intensity];
  };

  return (
    <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 mb-6">
        <h2 className="text-base md:text-lg font-semibold text-gray-900">Your contribution heatmap</h2>
        <div className="flex items-center gap-2 text-xs md:text-sm text-green-600 font-medium">
          <TrendingUp size={16} />
          <span>On track</span>
        </div>
      </div>

      {/* Heatmap Grid - Responsive with horizontal scroll */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-max px-2 md:px-0">
          {/* Month Labels */}
          <div className="flex gap-1 mb-2 ml-12">
            {months.map((month) => (
              <div key={month} className="w-12 text-xs text-gray-600 text-center font-medium">
                {month}
              </div>
            ))}
          </div>

          {/* Heatmap */}
          <div className="flex gap-1">
            {/* Day Labels */}
            <div className="flex flex-col gap-1 mr-2">
              {['', 'Tue', '', 'Thu', '', 'Sat', ''].map((day, i) => (
                <div key={i} className="h-3 flex items-center">
                  {day && <span className="text-xs text-gray-600 font-medium">{day}</span>}
                </div>
              ))}
            </div>

            {/* Heatmap Grid */}
            <div className="flex gap-1">
              {heatmapData.map((week, weekIdx) => (
                <div key={weekIdx} className="flex flex-col gap-1">
                  {week.map((intensity, dayIdx) => (
                    <div
                      key={`${weekIdx}-${dayIdx}`}
                      className={`w-3 h-3 rounded-sm ${getColor(intensity)} hover:ring-2 hover:ring-green-600 cursor-pointer transition-all`}
                      title={`Intensity: ${intensity}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-xs text-gray-600 font-medium">Less</span>
            <div className="flex gap-1">
              {['bg-gray-100', 'bg-green-200', 'bg-green-300', 'bg-green-500', 'bg-green-700'].map((color, i) => (
                <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
              ))}
            </div>
            <span className="text-xs text-gray-600 font-medium">More</span>
          </div>

          {/* Helper Text */}
          <p className="text-xs text-gray-600 mt-4">
            Hover any square to see that day's entries. Darker green means more logged.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Heatmap;