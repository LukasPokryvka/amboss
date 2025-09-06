import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ROUTES } from "@/constants/routes"
import {
  ArrowRight,
  PieChart,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react"
import Link from "next/link"

const LandingPage = () => {
  return (
    <>
      <section className='py-20 px-4 relative'>
        <div className='container mx-auto text-center max-w-4xl'>
          <Badge
            variant='secondary'
            className='mb-6 glass-violet border-primary/20'
          >
            Meet Ambo, your financial guardian
          </Badge>
          <h1 className='text-4xl md:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-foreground via-primary to-violet-600 bg-clip-text text-transparent'>
            Your Money, Watched Over by Ambo
          </h1>
          <p className='text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto'>
            Take control of your finances with AmBoss. Track expenses, manage
            budgets, and grow your wealth while Ambo keeps a watchful eye on
            every dollar.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
            <Button
              size='lg'
              className='text-lg px-8 bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 shadow-lg'
              asChild
            >
              <Link href={ROUTES.SignUp()}>
                Start Tracking Free
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='text-lg px-8 glass-violet border-primary/20 bg-transparent'
            >
              Watch Demo
            </Button>
          </div>

          {/* Hero Image Placeholder */}
          <div className='relative max-w-3xl mx-auto'>
            <div className='glass-violet rounded-2xl p-8 shadow-2xl border border-primary/20'>
              <div className='gradient-blur-violet rounded-xl p-6 mb-4 border border-primary/10'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-lg font-semibold'>Dashboard Preview</h3>
                  <div className='w-8 h-8 bg-gradient-to-br from-primary to-violet-600 rounded-full flex items-center justify-center shadow-lg'>
                    <span className='text-primary-foreground text-sm'>🐶</span>
                  </div>
                </div>
                <div className='grid grid-cols-3 gap-4 mb-4'>
                  <div className='glass-violet rounded-lg p-3 text-center border border-primary/10'>
                    <p className='text-2xl font-bold text-primary'>$12,450</p>
                    <p className='text-xs text-muted-foreground'>
                      Total Balance
                    </p>
                  </div>
                  <div className='glass-violet rounded-lg p-3 text-center border border-primary/10'>
                    <p className='text-2xl font-bold text-violet-600'>
                      +$2,340
                    </p>
                    <p className='text-xs text-muted-foreground'>This Month</p>
                  </div>
                  <div className='glass-violet rounded-lg p-3 text-center border border-primary/10'>
                    <p className='text-2xl font-bold text-chart-5'>-$890</p>
                    <p className='text-xs text-muted-foreground'>Expenses</p>
                  </div>
                </div>
                <div className='glass-violet rounded-lg p-3 border border-primary/10'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-sm text-muted-foreground'>
                      Spending Overview
                    </span>
                    <PieChart className='h-4 w-4 text-primary' />
                  </div>
                  <div className='h-2 bg-muted rounded-full overflow-hidden'>
                    <div className='h-full bg-gradient-to-r from-primary via-violet-500 to-violet-600 w-3/4'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='features' className='py-20 px-4 relative'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Everything You Need to Master Your Finances
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Ambo helps you stay on top of your money with powerful tools and
              insights
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='glass-violet border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300'>
              <CardHeader>
                <div className='w-12 h-12 bg-gradient-to-br from-primary to-violet-600 rounded-lg flex items-center justify-center mb-4 shadow-lg'>
                  <TrendingUp className='h-6 w-6 text-primary-foreground' />
                </div>
                <CardTitle>Smart Tracking</CardTitle>
                <CardDescription>
                  Automatically categorize and track all your expenses with
                  AI-powered insights
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='glass-violet border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300'>
              <CardHeader>
                <div className='w-12 h-12 bg-gradient-to-br from-violet-600 to-primary rounded-lg flex items-center justify-center mb-4 shadow-lg'>
                  <PieChart className='h-6 w-6 text-primary-foreground' />
                </div>
                <CardTitle>Visual Analytics</CardTitle>
                <CardDescription>
                  Beautiful charts and graphs that make understanding your
                  finances effortless
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='glass-violet border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300'>
              <CardHeader>
                <div className='w-12 h-12 bg-gradient-to-br from-primary to-violet-600 rounded-lg flex items-center justify-center mb-4 shadow-lg'>
                  <Shield className='h-6 w-6 text-primary-foreground' />
                </div>
                <CardTitle>Bank-Level Security</CardTitle>
                <CardDescription>
                  Your financial data is protected with enterprise-grade
                  encryption and security
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='glass-violet border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300'>
              <CardHeader>
                <div className='w-12 h-12 bg-gradient-to-br from-violet-600 to-primary rounded-lg flex items-center justify-center mb-4 shadow-lg'>
                  <Smartphone className='h-6 w-6 text-primary-foreground' />
                </div>
                <CardTitle>Mobile First</CardTitle>
                <CardDescription>
                  Track expenses on the go with our responsive design and
                  mobile-optimized interface
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='glass-violet border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300'>
              <CardHeader>
                <div className='w-12 h-12 bg-gradient-to-br from-primary to-violet-600 rounded-lg flex items-center justify-center mb-4 shadow-lg'>
                  <Users className='h-6 w-6 text-primary-foreground' />
                </div>
                <CardTitle>Multi-Account Support</CardTitle>
                <CardDescription>
                  Connect all your accounts - banks, crypto, investments, and
                  more in one place
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='glass-violet border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300'>
              <CardHeader>
                <div className='w-12 h-12 bg-gradient-to-br from-violet-600 to-primary rounded-lg flex items-center justify-center mb-4 shadow-lg'>
                  <span className='text-primary-foreground text-xl'>🐶</span>
                </div>
                <CardTitle>Ambo's Watchful Eye</CardTitle>
                <CardDescription>
                  Get personalized alerts and recommendations to keep your
                  finances healthy
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      <section className='py-20 px-4 relative'>
        <div className='container mx-auto text-center max-w-3xl'>
          <div className='gradient-blur-violet rounded-3xl p-12 border border-primary/20 shadow-2xl'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg'>
              <span className='text-primary-foreground text-2xl'>🐶</span>
            </div>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Ready to Let Ambo Watch Over Your Money?
            </h2>
            <p className='text-xl text-muted-foreground mb-8'>
              Join thousands of users who trust AmBoss to keep their finances on
              track
            </p>
            <Button
              size='lg'
              className='text-lg px-8 bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 shadow-lg'
              asChild
            >
              <Link href={ROUTES.SignUp()}>
                Get Started Free
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t glass-violet py-12 px-4 relative'>
        <div className='container mx-auto'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='flex items-center gap-3 mb-4 md:mb-0'>
              <div className='w-8 h-8 bg-gradient-to-br from-primary to-violet-600 rounded-full flex items-center justify-center shadow-lg'>
                <span className='text-primary-foreground text-sm'>🐶</span>
              </div>
              <div>
                <p className='font-semibold'>AmBoss</p>
                <p className='text-xs text-muted-foreground'>
                  Financial tracking with Ambo
                </p>
              </div>
            </div>
            <div className='flex items-center gap-6 text-sm text-muted-foreground'>
              <Link
                href='/privacy'
                className='hover:text-foreground transition-colors'
              >
                Privacy
              </Link>
              <Link
                href='/terms'
                className='hover:text-foreground transition-colors'
              >
                Terms
              </Link>
              <Link
                href='/contact'
                className='hover:text-foreground transition-colors'
              >
                Contact
              </Link>
            </div>
          </div>
          <div className='border-t mt-8 pt-8 text-center text-sm text-muted-foreground'>
            <p>
              &copy; 2025 AmBoss. Built with love for your financial future.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default LandingPage
