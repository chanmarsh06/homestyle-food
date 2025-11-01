'use client';

import { Button } from 'antd';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      type="text"
      shape="circle"
      icon={theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
      onClick={toggleTheme}
      className="flex items-center justify-center"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    />
  );
}