'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ProtectedPage() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser()
        if (error || !user) {
          router.replace('/sign-in')
        } else {
          setLoading(false)
        }
      } catch (error) {
        router.replace('/sign-in')
      }
    }
    checkUser()
  }, [router, supabase.auth])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.replace('/sign-in')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <h1>Dashboard</h1>
      <Button 
        onClick={handleSignOut}
        variant="destructive"
      >
        Sign Out
      </Button>
    </div>
  )
}
