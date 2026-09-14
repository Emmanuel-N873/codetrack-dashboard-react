import { Zap, Plus } from 'lucide-react';

const RecentLog = () => {
  const logEntries = [
    {
      id: 1,
      tags: ['react'],
      description: 'Refactored the dashboard into hooks',
      timestamp: 'Yesterday • 9:40 PM',
      duration: '55 min',
    },
    {
      id: 2,
      tags: ['algorithms'],
      description: 'Sliding-window problems on LeetCode',
      timestamp: 'Yesterday • 7:15 PM',
      duration: '30 min',
    },
    {
      id: 3,
      tags: ['css-grid'],
      description: 'Rebuilt the pricing page layout',
      timestamp: 'Wed • 8:02 PM',
      duration: '40 min',
    },
    {
      id: 4,
      tags: ['sql'],
      description: 'Joins and subqueries practice set',
      timestamp: 'Tue • 10:18 PM',
      duration: '25 min',
    },
  ];

  const tagColors = {
    react: 'bg-blue-100 text-blue-700',
    algorithms: 'bg-purple-100 text-purple-700',
    'css-grid': 'bg-green-100 text-green-700',
    sql: 'bg-orange-100 text-orange-700',
  };

  return (
    <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 mb-6">
        <h2 className="text-base md:text-lg font-semibold text-gray-900">Recent log</h2>
        <button className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-xs md:text-sm transition-colors w-fit">
          <Plus size={16} />
          <span>Add entry</span>
        </button>
      </div>

      {/* Log Items */}
      <div className="space-y-3 md:space-y-4">
        {/* Empty State Alert */}
        <div className="border-2 border-dashed border-green-300 bg-green-50 rounded-lg p-3 md:p-4 flex items-start gap-2 md:gap-3">
          <Zap size={18} className="md:w-5 md:h-5 text-green-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-xs md:text-sm text-green-900">Nothing logged yet today.</p>
            <p className="text-xs text-green-700 mt-0.5">Log your first 20 minutes →</p>
          </div>
        </div>

        {/* Log Entries */}
        {logEntries.map((entry) => (
          <div key={entry.id} className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 py-3 md:py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 -mx-2 md:-mx-0 px-2 md:px-0 rounded transition-colors">
            <div className="flex-1 min-w-0">
              {/* Tags */}
              <div className="flex gap-1 md:gap-2 mb-2 flex-wrap">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 rounded text-xs font-medium ${tagColors[tag] || 'bg-gray-100 text-gray-700'}`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="font-medium text-xs md:text-sm text-gray-900 mb-1 break-words">{entry.description}</p>

              {/* Timestamp */}
              <p className="text-xs text-gray-600">{entry.timestamp}</p>
            </div>

            {/* Duration */}
            <div className="text-right shrink-0">
              <p className="text-xs md:text-sm font-medium text-gray-900">{entry.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentLog;