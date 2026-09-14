import { Home, BookOpen, Target, Zap, BarChart3, Settings } from 'lucide-react';
import Brand from '../auth/Brand.jsx';

const DashboardSidebar = () => {
  const navItems = [
    { icon: Home, label: 'Dashboard', href: '#', active: true },
    { icon: BookOpen, label: 'Log', href: '#', active: false },
    { icon: Target, label: 'Goals', href: '#', active: false },
    { icon: Zap, label: 'Skills', href: '#', active: false },
    { icon: BarChart3, label: 'Stats', href: '#', active: false },
    { icon: Settings, label: 'Settings', href: '#', active: false },
  ];

  return (
    <aside className="hidden md:flex md:w-60 bg-white border-r border-gray-200 flex-col h-screen fixed left-0 top-0">
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
      <div className="px-4 py-4">
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center font-bold text-gray-700">
            AR
          </div>
          <h3 className="font-semibold text-gray-900 text-sm">Alex Rivera</h3>
          <p className="text-xs text-gray-600 mt-1">Free plan</p>
        </div>
      </div>

      {/* Empty space */}
      <div className="flex-1"></div>
    </aside>
  );
};

export default DashboardSidebar;