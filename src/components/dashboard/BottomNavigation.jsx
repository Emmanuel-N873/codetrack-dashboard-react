import { Home, BookOpen, Target, Zap, BarChart3 } from 'lucide-react';

const BottomNavigation = () => {
  const navItems = [
    { icon: Home, label: 'Dashboard', href: '#', active: true },
    { icon: BookOpen, label: 'Log', href: '#', active: false },
    { icon: Target, label: 'Goals', href: '#', active: false },
    { icon: Zap, label: 'Skills', href: '#', active: false },
    { icon: BarChart3, label: 'Stats', href: '#', active: false },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-0">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors ${
              item.active
                ? 'text-green-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <item.icon size={24} />
            <span className="text-xs font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
