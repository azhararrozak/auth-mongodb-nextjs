import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'

export default async function DashboardRootPage() {
    const session = await getSession()
    if (!session) redirect('/login')

    // Redirect to appropriate dashboard based on role
    if (session.role === 'admin') {
        redirect('/dashboard/admin')
    } else {
        redirect('/dashboard/user')
    }
}