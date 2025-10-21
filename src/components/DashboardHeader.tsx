import { Button } from '@/components/ui/button'
import { logoutAction } from '@/actions/auth'

interface DashboardHeaderProps {
  session: {
    email: string
    userId: string
    role: string
  }
}

export default function DashboardHeader({ session }: DashboardHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome back!
          </h1>
          <p className="text-sm text-gray-600">{session.email}</p>
        </div>

        <div className="flex items-center gap-4">
          {/* User Info Badge */}
          <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-lg">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              {session.email.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700">{session.email}</p>
              <p className="text-xs text-gray-500 uppercase">{session.role}</p>
            </div>
          </div>

          {/* Logout Button */}
          <form action={logoutAction}>
            <Button
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-50"
            >
              Sign Out
            </Button>
          </form>
        </div>
      </div>
    </header>
  )
}
