import { getSession } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // If user already logged in, redirect to dashboard
  const session = await getSession()
  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Optional: Add logo or branding here */}
      <div className="absolute top-6 left-6">
        <h2 className="text-2xl font-bold text-gray-800">🔐 Auth System</h2>
      </div>
      
      {/* Auth pages content */}
      <div className="flex items-center justify-center min-h-screen p-4">
        {children}
      </div>

      {/* Optional: Footer */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-sm text-gray-500">
        <p>Secured by JWT Authentication</p>
      </div>
    </div>
  )
}
