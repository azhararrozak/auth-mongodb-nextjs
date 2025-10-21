import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function AdminDashboardPage() {
  const session = await getSession()
  if (!session) redirect('/login')
  if (session.role !== 'admin') redirect('/dashboard/user')

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Full system access and control</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">1,234</p>
            <p className="text-purple-100 mt-2">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white border-0 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-300 rounded-full mr-2 animate-pulse"></div>
              <span className="text-xl font-semibold">All Systems Operational</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-emerald-500 text-white border-0 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle>Active Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">48</p>
            <p className="text-green-100 mt-2">Current online users</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-white border-0 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="text-purple-700">Admin Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Manage Users
            </Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              View Analytics
            </Button>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              System Settings
            </Button>
            <Button variant="outline" className="w-full border-gray-300">
              View Logs
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="text-purple-700">Admin Privileges</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Full database access
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                User management
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                System configuration
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Analytics & reports
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Security settings
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-purple-50 border border-purple-200 rounded-xl">
        <CardHeader>
          <CardTitle className="text-purple-800">🔒 Admin Security Notice</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-purple-700">
            You are logged in with administrator privileges. This dashboard is protected by role-based
            authentication. Only users with admin role can access this page.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
