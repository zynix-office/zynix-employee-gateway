import { motion } from 'framer-motion';
import { Users, Shield, TrendingUp, Award, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BenefitsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: () => void;
}

const benefits = [
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Fast-track promotions and skill development programs'
  },
  {
    icon: Shield,
    title: 'Health Benefits',
    description: 'Comprehensive medical, dental, and vision coverage'
  },
  {
    icon: Award,
    title: 'Performance Bonuses',
    description: 'Quarterly rewards based on achievements'
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Work-life balance with remote options'
  },
  {
    icon: Heart,
    title: 'Wellness Programs',
    description: 'Mental health support and gym memberships'
  },
  {
    icon: Users,
    title: 'Team Culture',
    description: 'Collaborative environment with amazing peers'
  }
];

const BenefitsModal = ({ isOpen, onClose, onProceed }: BenefitsModalProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Modal */}
      <motion.div
        className="relative z-10 w-full max-w-2xl glass-panel neon-border p-8"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-neon-cyan/20 rounded-xl blur-xl opacity-50" />

        <div className="relative">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4"
            >
              <Users className="w-8 h-8 text-primary" />
            </motion.div>
            <h2 className="font-display text-2xl md:text-3xl font-bold neon-text mb-2">
              Join the Zynix Team
            </h2>
            <p className="text-muted-foreground">
              Discover why talented professionals choose Zynix
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" onClick={onClose} size="lg">
              Maybe Later
            </Button>
            <Button variant="glow" onClick={onProceed} size="lg">
              Proceed to Registration
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BenefitsModal;
