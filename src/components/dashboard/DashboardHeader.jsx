import { Flame, Plus } from 'lucide-react';

const DashboardHeader = () => {
  const today = new Date();
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const formattedDate = dateFormatter.format(today);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Header Layout - Greeting on Left, Actions on Right */}
        <div className="flex items-center justify-between gap-4">
          {/* Greeting Section */}
          <div>
            <h1 className="text-lg md:text-2xl font-bold text-gray-900">Good evening, Alex</h1>
            <p className="text-xs md:text-sm text-gray-600 mt-1">{formattedDate}</p>
          </div>

          {/* Action Group - Right Side */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Streak Badge */}
            <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium">
              <Flame size={16} />
              <span>12-day streak</span>
            </div>

            {/* Log Today Button */}
            <button className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 md:px-5 py-2 rounded-lg font-medium text-xs md:text-sm transition-colors">
              <Plus size={16} />
              <span>Log today</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;