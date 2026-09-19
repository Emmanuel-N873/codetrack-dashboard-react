import { LayoutGrid, SquarePen, Target, GraduationCap, BarChart3, Settings } from 'lucide-react';
import Brand from '../auth/Brand.jsx';

const DashboardSidebar = () => {
  const navItems = [
    { icon: LayoutGrid, label: 'Dashboard', href: '#top', active: true },
    { icon: SquarePen, label: 'Log', href: '#recent-log', active: false },
    { icon: Target, label: 'Goals', href: '#goals', active: false },
    { icon: GraduationCap, label: 'Skills', href: '#heatmap', active: false },
    { icon: BarChart3, label: 'Stats', href: '#activity', active: false },
    { icon: Settings, label: 'Settings', href: '#', active: false },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-60 flex-col border-r border-gray-200 bg-white md:flex">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <Brand variant="light" />
      </div>

      {/* Navigation */}
      <nav className="px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-current={item.active ? 'page' : undefined}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
              item.active
                ? 'bg-green-100 text-green-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      {/* User Profile Card */}
      <div className="border-t border-gray-200 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-600">
            AR
          </div>
          <div><h3 className="text-sm font-semibold text-gray-900">Alex Rivera</h3><p className="mt-0.5 text-xs text-gray-500">Free plan</p></div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
