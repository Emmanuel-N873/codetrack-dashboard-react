import { Flame, Calendar, Clock } from 'lucide-react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import BottomNavigation from '../components/dashboard/BottomNavigation';
import MetricCard from '../components/MetricCard';
import Heatmap from '../components/dashboard/Heatmap';
import RecentLog from '../components/dashboard/RecentLog';
import Goals from '../components/dashboard/Goals';
import Activity from '../components/dashboard/Activity';

const DashBoardPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - Hidden on mobile */}
      <DashboardSidebar />

      {/* Main Content */}
      <main className="w-full md:ml-60 pb-20 md:pb-0">
        {/* Header */}
        <DashboardHeader />

        {/* Page Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 space-y-6 md:space-y-8">
          {/* Metrics Grid - 1 column on mobile, 3 on desktop */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <MetricCard
              icon={Flame}
              label="Current streak"
              value="12"
              unit="days"
              helperText="Personal best: 40 days"
            />
            <MetricCard
              icon={Calendar}
              label="Days logged this month"
              value="18"
              helperText="of 26 days so far"
            />
            <MetricCard
              icon={Clock}
              label="Hours this week"
              value="9.5"
              unit="hrs"
              helperText="+2.0 vs last week"
            />
          </section>

          {/* Heatmap Section */}
          <section>
            <Heatmap />
          </section>

          {/* Bottom Split Layout - 1 column on mobile, 3-column on desktop */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Recent Log - takes full width on mobile, 2 columns on desktop */}
            <div className="lg:col-span-2">
              <RecentLog />
            </div>

            {/* Goals and Activity - takes full width on mobile, 1 column on desktop, stacked */}
            <div className="space-y-4 md:space-y-6">
              <Goals />
              <Activity />
            </div>
          </section>
        </div>
      </main>

      {/* Bottom Navigation - Visible on mobile */}
      <BottomNavigation />
    </div>
  );
};

export default DashBoardPage;