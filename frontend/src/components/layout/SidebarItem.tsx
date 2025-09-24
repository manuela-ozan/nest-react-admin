import { ReactNode } from 'react';
import { ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';

interface SidebarItemProps {
  children: ReactNode;
  to: string;
  active?: boolean;
}

export default function SidebarItem({
  children,
  to,
  active = false,
}: SidebarItemProps) {
  return (
    <Link
      to={to}
      className="no-underline text-white hover:bg-gray-300 rounded-xl py-4 px-3  transition-colors bg-brand-active hover:bg-red-hover mb-2"
    >
      <span className="flex gap-5 font-medium text-xl">
        {children} {active ? <ChevronRight /> : null}
      </span>
    </Link>
  );
}
