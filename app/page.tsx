import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Check, Plane, Map, Backpack, Shield, Globe, Star } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary rounded-lg p-2">
              <Plane className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">travel-ready.store</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#destinations" className="text-foreground/80 hover:text-foreground transition-colors">
              Destinations
            </Link>
            <Link href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </Link>
            <Button>Start Planning</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/beautiful-travel-destination-mountains-ocean.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Ready for Unforgettable Adventures?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
              travel-ready.store is your trusted companion in preparing for the perfect journey. 
              Plan, organize, and enjoy every moment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                <Globe className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Watch Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Everything for Your Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We've gathered all the tools to help you prepare for your trip
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Map,
                title: 'Interactive Maps',
                description: 'Plan routes with detailed maps and navigation'
              },
              {
                icon: Backpack,
                title: 'Packing Checklists',
                description: 'Never forget anything with our smart packing lists'
              },
              {
                icon: Shield,
                title: 'Documents & Visa',
                description: 'Find document requirements for any country'
              },
              {
                icon: Globe,
                title: 'Country Guides',
                description: 'Detailed information about culture, language, and customs'
              },
              {
                icon: Star,
                title: 'Best Places',
                description: 'Discover top attractions and hidden gems'
              },
              {
                icon: Check,
                title: 'Trip Budget',
                description: 'Plan expenses and track your budget'
              }
            ].map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Popular Destinations
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Get inspired by our recommendations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Paris', country: 'France', image: '/paris-eiffel-tower.jpg' },
              { name: 'Tokyo', country: 'Japan', image: '/tokyo-cityscape.jpg' },
              { name: 'Barcelona', country: 'Spain', image: '/barcelona-architecture.jpg' },
              { name: 'Bali', country: 'Indonesia', image: '/bali-beach.jpg' }
            ].map((destination, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer">
                <div className="relative h-64">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundImage: `url('${destination.image}')`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-2xl font-bold">{destination.name}</h3>
                    <p className="text-white/90">{destination.country}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Start Planning Now
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Join thousands of travelers who trust travel-ready.store
          </p>
          <Button size="lg" variant="secondary" className="text-lg">
            Create Travel Plan
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary rounded-lg p-2">
                  <Plane className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">travel-ready.store</span>
              </div>
              <p className="text-muted-foreground">
                Your trusted travel companion
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Guides</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Help</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">FAQ</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 travel-ready.store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
