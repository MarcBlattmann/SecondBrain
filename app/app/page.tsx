import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Sparkles, Share2 } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-screen border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full flex h-14 items-center px-4">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">
                SecondBrain
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-2">
              <Button asChild variant="ghost">
                <Link href="/sign-in">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="container mx-auto mt-6">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold">
                <span className="mr-2">✨</span>
                Free forever. No credit card
              </div>
              
              <h1 className="text-5xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
                Get your
                <br />
                Seccond Brain
                <br />
                
              </h1>

              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="h-12 px-6">
                  Get Started
                </Button>
                <Link 
                  href="#features" 
                  className="inline-flex items-center text-sm font-medium underline underline-offset-4"
                >
                  See Features
                </Link>
              </div>

              <div className="max-w-md">
                <p className="text-xl text-muted-foreground">
                  Trust us to help you manage your knowledge efficiently and without hassle.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-full bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                  alt="Second Brain visualization"
                  className="object-cover w-full h-full"
                  width={512}
                  height={512}
                />
              </div>
            </div>
          </div>

          {/* Feature List */}
          <div className="mt-20 grid gap-4 md:gap-8">
            {[
              {
                icon: Shield,
                title: "Secure Storage",
                description: "Your data is safe with end-to-end encryption.",
              },
              {
                icon: Sparkles,
                title: "Smart Organization",
                description: "Keep your knowledge well-structured.",
              },
              {
                icon: Share2,
                title: "Easy Sharing",
                description: "Share with your team effortlessly.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
              >
                <div className="flex items-center gap-4">
                  <feature.icon className="h-5 w-5" />
                  <div>
                    <h3 className="font-medium leading-none">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

