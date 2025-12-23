import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Crown, Bell, Search, Menu, X, ExternalLink, ArrowRight, Sparkles, Globe, Smartphone, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'FinanceFlow Pro',
    category: 'Enterprise Software',
    description: 'Complete financial management platform serving 500+ enterprise clients globally.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    icon: Globe,
  },
  {
    id: 2,
    title: 'SecureVault',
    category: 'Cybersecurity',
    description: 'Advanced threat detection and data protection system for Fortune 500 companies.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
    tags: ['Python', 'AWS', 'ML'],
    icon: Shield,
  },
  {
    id: 3,
    title: 'CloudMatrix',
    category: 'Cloud Infrastructure',
    description: 'Scalable cloud orchestration platform managing 10M+ daily transactions.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
    tags: ['Kubernetes', 'Go', 'Terraform'],
    icon: Globe,
  },
  {
    id: 4,
    title: 'MobileFirst CRM',
    category: 'Mobile Application',
    description: 'Cross-platform CRM solution with 2M+ active users worldwide.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
    tags: ['React Native', 'GraphQL', 'Firebase'],
    icon: Smartphone,
  },
];

const Projects = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 bg-[hsl(220,25%,2%)]" />
      <div className="fixed inset-0 diamond-pattern opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsla(45,100%,60%,0.04)_0%,transparent_50%)] pointer-events-none" />

      {/* Navigation */}
      <motion.nav className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel px-6 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/30">
                <span className="font-display font-bold text-primary text-xl">Z</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-xl tracking-wider gold-text-subtle">ZYNIX</span>
                <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase">Software Solutions</p>
              </div>
            </Link>
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Team</Link>
              <Link to="/projects" className="text-sm text-foreground font-medium">Projects</Link>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Link to="/"><Button variant="glow" size="sm" className="font-display"><Crown className="w-4 h-4 mr-2" />Join Team</Button></Link>
            </div>
            <button className="lg:hidden w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center border border-border/30" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Main */}
      <main className="relative z-10 pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <motion.div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Our Portfolio</span>
            </motion.div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="text-gradient-gold">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Transformative solutions that have redefined industries and empowered businesses worldwide</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={project.id} className="group" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index + 0.3 }}>
                <div className="glass-panel overflow-hidden h-full hover:border-primary/30 transition-all duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 z-20">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur flex items-center justify-center border border-primary/30">
                        <project.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-primary text-xs font-medium tracking-widest uppercase mb-2">{project.category}</p>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => <span key={tag} className="px-3 py-1 text-xs bg-secondary/50 rounded-full text-muted-foreground border border-border/30">{tag}</span>)}
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">View Case Study <ExternalLink className="w-4 h-4 ml-2" /></Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-border/20 py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/30">
              <span className="font-display font-bold text-primary">Z</span>
            </div>
            <span className="text-sm text-muted-foreground">© 2024 Zynix Software Solutions</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
