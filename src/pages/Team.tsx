import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Crown, Bell, Search, Menu, X, Linkedin, Twitter, 
  Mail, ChevronRight, ArrowRight, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Alexander Sterling',
    role: 'Chief Executive Officer',
    bio: 'Visionary leader with 20+ years transforming enterprises through innovative technology solutions.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 2,
    name: 'Victoria Chen',
    role: 'Chief Technology Officer',
    bio: 'Engineering excellence pioneer driving cutting-edge architectural decisions and technical strategy.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 3,
    name: 'Marcus Williams',
    role: 'VP of Engineering',
    bio: 'Scaling high-performance teams and delivering mission-critical software systems globally.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 4,
    name: 'Sophia Rodriguez',
    role: 'Head of Product',
    bio: 'Product strategist turning complex business needs into elegant, user-centric solutions.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 5,
    name: 'James Morrison',
    role: 'Lead Architect',
    bio: 'Designing scalable cloud-native architectures that power enterprise-grade applications.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 6,
    name: 'Elena Petrov',
    role: 'Security Director',
    bio: 'Cybersecurity expert safeguarding digital assets with industry-leading protection strategies.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&h=1000&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
];

const Team = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-[hsl(220,25%,2%)]" />
      <div className="fixed inset-0 diamond-pattern opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,hsla(45,100%,60%,0.04)_0%,transparent_50%)] pointer-events-none" />

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel px-6 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/30 group-hover:border-primary/50 transition-colors">
                <span className="font-display font-bold text-primary text-xl">Z</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-xl tracking-wider gold-text-subtle">ZYNIX</span>
                <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase">Software Solutions</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/team" className="text-sm text-foreground font-medium hover:text-primary transition-colors">Our Team</Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors border border-border/30">
                <Search className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors relative border border-border/30">
                <Bell className="w-4 h-4 text-muted-foreground" />
              </button>
              <Link to="/">
                <Button variant="glow" size="sm" className="font-display">
                  <Crown className="w-4 h-4 mr-2" />
                  Join Team
                </Button>
              </Link>
            </div>

            <button 
              className="lg:hidden w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center border border-border/30"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <motion.div 
              className="lg:hidden glass-panel mt-2 p-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-col gap-4">
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors py-2">Home</Link>
                <Link to="/team" className="text-sm text-foreground font-medium py-2">Our Team</Link>
                <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors py-2">Projects</Link>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium tracking-wide">Meet Our Leadership</span>
            </motion.div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              The <span className="text-gradient-gold">Visionaries</span> Behind Zynix
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              World-class talent driving innovation and excellence in every project we deliver
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="glass-panel overflow-hidden h-full">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent z-10" />
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-5" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 relative z-20 -mt-20">
                    <div className="mb-4">
                      <h3 className="font-display text-xl font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary text-sm font-medium tracking-wide uppercase">
                        {member.role}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                      <a 
                        href={member.linkedin}
                        className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 border border-border/30 transition-all duration-300"
                      >
                        <Linkedin className="w-4 h-4 text-muted-foreground" />
                      </a>
                      <a 
                        href={member.twitter}
                        className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 border border-border/30 transition-all duration-300"
                      >
                        <Twitter className="w-4 h-4 text-muted-foreground" />
                      </a>
                      <a 
                        href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@zynix.com`}
                        className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 border border-border/30 transition-all duration-300"
                      >
                        <Mail className="w-4 h-4 text-muted-foreground" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join CTA */}
          <motion.div 
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="glass-panel-gold p-10 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              
              <div className="relative z-10">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Want to Join Our <span className="text-gradient-gold">Elite Team</span>?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  We're always looking for exceptional talent to shape the future with us.
                </p>
                <Link to="/">
                  <Button variant="glow" size="xl" className="font-display">
                    View Open Positions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/20 py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/30">
              <span className="font-display font-bold text-primary">Z</span>
            </div>
            <span className="text-sm text-muted-foreground">© 2024 Zynix Software Solutions</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Team;
