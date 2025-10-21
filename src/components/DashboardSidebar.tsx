'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  HomeIcon, 
  UserIcon, 
  CogIcon, 
  ChartBarIcon,
  UsersIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  BellIcon
} from '@heroicons/react/24/outline'

interface SidebarProps {
  role: string
}

export default function DashboardSidebar({ role }: SidebarProps) {
  const pathname = usePathname()

  // Menu items untuk Admin
  const adminMenuItems = [
    { href: '/dashboard/admin', label: 'Dashboard', icon: HomeIcon },
    { href: '/dashboard/admin/users', label: 'Manage Users', icon: UsersIcon },
    { href: '/dashboard/admin/analytics', label: 'Analytics', icon: ChartBarIcon },
    { href: '/dashboard/admin/settings', label: 'System Settings', icon: CogIcon },
    { href: '/dashboard/admin/security', label: 'Security', icon: ShieldCheckIcon },
    { href: '/dashboard/admin/logs', label: 'Activity Logs', icon: DocumentTextIcon },
  ]

  // Menu items untuk User
  const userMenuItems = [
    { href: '/dashboard/user', label: 'Dashboard', icon: HomeIcon },
    { href: '/dashboard/user/profile', label: 'My Profile', icon: UserIcon },
    { href: '/dashboard/user/notifications', label: 'Notifications', icon: BellIcon },
    { href: '/dashboard/user/settings', label: 'Settings', icon: CogIcon },
  ]

  const menuItems = role === 'admin' ? adminMenuItems : userMenuItems
  const sidebarColor = role === 'admin' ? 'from-purple-700 to-purple-900' : 'from-blue-700 to-blue-900'

  return (
    <aside className={`w-64 bg-gradient-to-b ${sidebarColor} text-white min-h-screen`}>
      {/* Logo/Brand */}
      <div className="p-6 border-b border-white/10">
        <h2 className="text-2xl font-bold">
          {role === 'admin' ? '👑 Admin Panel' : '👤 User Portal'}
        </h2>
        <p className="text-sm text-white/70 mt-1">
          {role === 'admin' ? 'Full Access' : 'Personal Dashboard'}
        </p>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                    ${isActive 
                      ? 'bg-white text-gray-900 font-semibold shadow-lg' 
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Role Badge */}
      <div className="absolute bottom-6 left-4 right-4">
        <div className={`
          px-4 py-3 rounded-lg text-center
          ${role === 'admin' 
            ? 'bg-purple-600/50 border border-purple-400/30' 
            : 'bg-blue-600/50 border border-blue-400/30'
          }
        `}>
          <p className="text-xs text-white/70">Logged in as</p>
          <p className="font-bold uppercase tracking-wide">{role}</p>
        </div>
      </div>
    </aside>
  )
}
