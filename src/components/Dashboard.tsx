import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Code, Globe, Zap, ChevronRight, 
  BarChart3, Shield, Settings, Bell, Search,
  Menu, X, Crown, Sparkles, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import BenefitsModal from '@/components/BenefitsModal';
import RegistrationForm from '@/components/RegistrationForm';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Active Employees', value: '2,847', icon: Users, change: '+12%' },
  { label: 'Projects Delivered', value: '1,293', icon: Code, change: '+8%' },
  { label: 'Global Clients', value: '156', icon: Globe, change: '+23%' },
  { label: 'Uptime', value: '99.9%', icon: Zap, change: 'Stable' },
];

const features = [
  { 
    title: 'Enterprise Solutions', 
    description: 'Scalable software architecture designed for growing businesses with complex requirements',
    icon: BarChart3 
  },
  { 
    title: 'Cyber Security', 
    description: 'Advanced threat protection and vulnerability assessment for complete digital safety',
    icon: Shield 
  },
  { 
    title: 'Cloud Infrastructure', 
    description: 'Reliable, efficient, and infinitely scalable cloud services for modern enterprises',
    icon: Settings 
  },
];

const Dashboard = () => {
  const [showBenefits, setShowBenefits] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleProceedToRegistration = () => {
    setShowBenefits(false);
    setShowRegistration(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[hsl(220,25%,2%)]" />
      <div className="fixed inset-0 diamond-pattern opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,hsla(45,100%,60%,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,hsla(45,100%,60%,0.03)_0%,transparent_70%)] pointer-events-none" />

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/30 group-hover:border-primary/50 transition-colors">
                <span className="font-display font-bold text-primary text-xl">Z</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-xl tracking-wider gold-text-subtle">ZYNIX</span>
                <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase">Software Solutions</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-sm text-foreground font-medium hover:text-primary transition-colors">Home</Link>
              <Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Team</Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</Link>
              <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a>
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors border border-border/30">
                <Search className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors relative border border-border/30">
                <Bell className="w-4 h-4 text-muted-foreground" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
              </button>
              <Button variant="glow" size="sm" onClick={() => setShowBenefits(true)} className="font-display">
                <Crown className="w-4 h-4 mr-2" />
                Join Team
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button 
              className="lg:hidden w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center border border-border/30"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <motion.div 
              className="lg:hidden glass-panel mt-2 p-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-col gap-4">
                <Link to="/" className="text-sm text-foreground font-medium py-2">Home</Link>
                <Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors py-2">Our Team</Link>
                <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors py-2">Projects</Link>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors py-2">Services</a>
                <div className="divider-gold my-2" />
                <Button variant="glow" size="sm" onClick={() => { setShowBenefits(true); setMobileMenuOpen(false); }} className="font-display">
                  <Crown className="w-4 h-4 mr-2" />
                  Join Team
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Main content */}
      <main className="relative z-10 pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero section */}
          <motion.section 
            className="mb-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="max-w-4xl mx-auto">
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium tracking-wide">Now Hiring Elite Software Engineers</span>
              </motion.div>
              
              {/* Main headline */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]">
                <span className="text-foreground">Crafting the Future of</span>
                <br />
                <span className="text-gradient-gold">Software Excellence</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Zynix delivers world-class enterprise software, cloud infrastructure, and security solutions. 
                Join our team of visionaries shaping the digital landscape.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="glow" size="xl" onClick={() => setShowBenefits(true)} className="font-display w-full sm:w-auto">
                  Join Our Elite Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="xl" className="w-full sm:w-auto border-primary/30 hover:border-primary/50 hover:bg-primary/5">
                  Explore Our Work
                </Button>
              </div>
            </div>
          </motion.section>

          {/* Stats */}
          <motion.section 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="card-royal text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center mb-4 border border-primary/20 group-hover:border-primary/40 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                <div className="text-xs text-primary font-medium">{stat.change}</div>
              </motion.div>
            ))}
          </motion.section>

          {/* Features / Services */}
          <motion.section 
            id="services"
            className="mb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="text-center mb-16">
              <h2 className="section-title">
                Our <span className="text-gradient-gold">Services</span>
              </h2>
              <p className="section-subtitle">
                Comprehensive solutions tailored to elevate your business to new heights
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="card-royal group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * index + 0.8, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:border-primary/40 group-hover:shadow-gold transition-all duration-500">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section 
            className="relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="glass-panel-gold p-10 md:p-16 text-center relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              
              <div className="relative z-10">
                <Crown className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                  Ready to Build Your <span className="text-gradient-gold">Legacy</span>?
                </h2>
                <p className="text-muted-foreground mb-10 max-w-xl mx-auto text-lg">
                  Join Zynix and work alongside world-class talent on transformative projects. 
                  Experience unmatched growth and elite opportunities.
                </p>
                <Button variant="glow" size="xl" onClick={() => setShowBenefits(true)} className="font-display">
                  Begin Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/20 py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/30">
              <span className="font-display font-bold text-primary">Z</span>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">© 2024 Zynix Software Solutions</span>
            </div>
          </div>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <BenefitsModal 
        isOpen={showBenefits} 
        onClose={() => setShowBenefits(false)}
        onProceed={handleProceedToRegistration}
      />
      <RegistrationForm 
        isOpen={showRegistration}
        onClose={() => setShowRegistration(false)}
      />
    </div>
  );
};

export default Dashboard;
