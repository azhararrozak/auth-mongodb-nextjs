import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function UserDashboardPage() {
  const session = await getSession()
  if (!session) redirect('/login')
  if (session.role === 'admin') redirect('/dashboard/admin')

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">User Dashboard</h1>
        <p className="text-gray-600 mt-2">Your personal workspace</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white border-0 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle>My Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">24</p>
            <p className="text-blue-100 mt-2">Total actions this week</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-emerald-500 text-white border-0 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle>Account Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-200 rounded-full mr-2 animate-pulse"></div>
              <span className="text-xl font-semibold">Active</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">3</p>
            <p className="text-purple-100 mt-2">New messages</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-white border-0 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="text-blue-700">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Update Profile
            </Button>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Change Password
            </Button>
            <Button variant="outline" className="w-full border-gray-300">
              View Activity Log
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="text-blue-700">Security Status</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Session encrypted
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                HTTP-only cookies
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Password hashed
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                2FA Available
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-blue-50 border border-blue-200 rounded-xl">
        <CardHeader>
          <CardTitle className="text-blue-800">👤 User Access Level</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-700">
            You are logged in as a regular user. This dashboard provides access to your personal
            information and settings. If you need admin access, please contact your administrator.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}