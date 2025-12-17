import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Code, Globe, Zap, ChevronRight, 
  BarChart3, Shield, Settings, Bell, Search,
  Menu, X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import BenefitsModal from '@/components/BenefitsModal';
import RegistrationForm from '@/components/RegistrationForm';

const stats = [
  { label: 'Active Employees', value: '2,847', icon: Users, change: '+12%' },
  { label: 'Projects Delivered', value: '1,293', icon: Code, change: '+8%' },
  { label: 'Global Clients', value: '156', icon: Globe, change: '+23%' },
  { label: 'Uptime', value: '99.9%', icon: Zap, change: 'Stable' },
];

const features = [
  { 
    title: 'Enterprise Solutions', 
    description: 'Scalable software for growing businesses',
    icon: BarChart3 
  },
  { 
    title: 'Cyber Security', 
    description: 'Advanced threat protection systems',
    icon: Shield 
  },
  { 
    title: 'Cloud Infrastructure', 
    description: 'Reliable and efficient cloud services',
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
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-40 px-6 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="font-display font-bold text-primary text-lg">Z</span>
              </div>
              <span className="font-display font-bold text-xl tracking-wider neon-text">ZYNIX</span>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Dashboard</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Employees</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Analytics</a>
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors">
                <Search className="w-5 h-5 text-muted-foreground" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors relative">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
              </button>
              <Button variant="neon" size="sm" onClick={() => setShowBenefits(true)}>
                Join Team
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button 
              className="md:hidden w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden glass-panel mt-2 p-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors py-2">Dashboard</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors py-2">Projects</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors py-2">Employees</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors py-2">Analytics</a>
                <Button variant="neon" size="sm" onClick={() => { setShowBenefits(true); setMobileMenuOpen(false); }}>
                  Join Team
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Main content */}
      <main className="pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero section */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="max-w-3xl">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Zap className="w-4 h-4" />
                <span>Now Hiring Software Engineers</span>
              </motion.div>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Building the Future of{' '}
                <span className="neon-text">Software Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Zynix delivers cutting-edge enterprise software, cloud infrastructure, and security solutions to businesses worldwide. Join our team of innovators and shape the digital future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="glow" size="xl" onClick={() => setShowBenefits(true)}>
                  Join Our Team
                  <ChevronRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="xl">
                  Explore Services
                </Button>
              </div>
            </div>
          </motion.section>

          {/* Stats */}
          <motion.section 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-panel p-6 hover:neon-border transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-primary font-medium">{stat.change}</span>
                </div>
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.section>

          {/* Features */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
              Our <span className="neon-text">Services</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="glass-panel p-6 hover:neon-border transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.7 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-neon-cyan/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_hsla(152,100%,50%,0.3)] transition-shadow">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section 
            className="glass-panel neon-border p-8 md:p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-neon-cyan/5" />
            <div className="relative z-10">
              <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
                Ready to Build Your <span className="neon-text">Career</span>?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join Zynix and work with talented professionals on cutting-edge projects. 
                Enjoy competitive benefits and continuous growth opportunities.
              </p>
              <Button variant="glow" size="xl" onClick={() => setShowBenefits(true)}>
                Subscribe & Join Zynix
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="font-display font-bold text-primary text-sm">Z</span>
            </div>
            <span className="text-sm text-muted-foreground">© 2024 Zynix Software Solutions</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
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
