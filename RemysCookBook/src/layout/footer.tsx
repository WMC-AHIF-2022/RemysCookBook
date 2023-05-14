import { useEffect, useState } from 'react';

const tabs = [
  { icon: '/svg/navBar/calendar.svg', href: '#', current: false },
  { icon: '/svg/navBar/suggestions.svg', href: '/menu-suggestions', current: false },
  { icon: '/svg/navBar/recipe.svg', href: '#', current: true },
  { icon: '/svg/navBar/favourite.svg', href: '#', current: false },
  { icon: '/svg/navBar/shopping-list.svg', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Footer() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  useEffect(() => {
    const storedTab = localStorage.getItem('activeTab');
    const defaultTab = tabs.findIndex((tab) => tab.current);
    setActiveTab(storedTab ? parseInt(storedTab, 10) : defaultTab);
  }, []);

  const handleTabClick = (index: number, href: string) => {
    setActiveTab(index);
    localStorage.setItem('activeTab', index.toString());
    window.location.href = href;
  };

  return (
    <div className="fixed bottom-0 left-0 w-full">
      <nav className="flex justify-center bg-white py-4 px-4" aria-label="Tabs">
        {tabs.map((tab, index) => (
          <a
            key={tab.href}
            href={tab.href}
            onClick={() => handleTabClick(index, tab.href)}
            className={classNames(
              index === activeTab ? 'bg-teal-100 text-teal-700' : 'text-teal-500',
              'flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium'
            )}
            aria-current={index === activeTab ? 'page' : undefined}
          >
            <img src={tab.icon} alt="icon" className="icon-image" />
          </a>
        ))}
      </nav>
    </div>
  );
}