import Link from 'next/link'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function EmailConfirmationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Please Confirm Your Email Address</h1>
          <p className="text-muted-foreground mb-4">
            We've sent you an email with a confirmation link. Please check your inbox and click the link to verify your email address.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/sign-in">Go to Login Page</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
