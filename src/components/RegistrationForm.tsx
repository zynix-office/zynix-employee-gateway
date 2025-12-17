import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Lock, CreditCard, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationForm = ({ isOpen, onClose }: RegistrationFormProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailPrefix: '',
    password: '',
    confirmPassword: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName) {
      toast.error('Please fill in all fields');
      return;
    }
    setStep(2);
  };

  const handleSubmitStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.emailPrefix || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }
    setStep(3);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.cardNumber || !formData.expiryDate || !formData.cvv) {
      toast.error('Please fill in all payment details');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsSubmitting(false);
    setStep(4);
    
    toast.success('Registration submitted successfully!');
  };

  if (!isOpen) return null;

  const steps = [
    { num: 1, title: 'Personal Info' },
    { num: 2, title: 'Account Setup' },
    { num: 3, title: 'Payment' },
    { num: 4, title: 'Complete' }
  ];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div 
        className="absolute inset-0 bg-background/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Form container */}
      <motion.div
        className="relative z-10 w-full max-w-lg glass-panel neon-border p-8"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-neon-cyan/20 rounded-xl blur-xl opacity-50" />

        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl font-bold neon-text mb-2">
              Employee Registration
            </h2>
            <p className="text-muted-foreground text-sm">
              Join Zynix Software Solutions
            </p>
          </div>

          {/* Progress steps */}
          <div className="flex items-center justify-center mb-8">
            {steps.map((s, index) => (
              <div key={s.num} className="flex items-center">
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-display text-sm font-bold transition-all duration-300 ${
                    step >= s.num 
                      ? 'bg-primary text-primary-foreground shadow-[0_0_15px_hsla(152,100%,50%,0.5)]' 
                      : 'bg-secondary text-muted-foreground'
                  }`}
                  animate={{ scale: step === s.num ? 1.1 : 1 }}
                >
                  {step > s.num ? <Check className="w-5 h-5" /> : s.num}
                </motion.div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-1 transition-colors duration-300 ${
                    step > s.num ? 'bg-primary' : 'bg-secondary'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <motion.form
                key="step1"
                onSubmit={handleSubmitStep1}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    First Name
                  </label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Last Name
                  </label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                  />
                </div>
                <Button type="submit" variant="glow" size="lg" className="w-full mt-6">
                  Continue
                </Button>
              </motion.form>
            )}

            {/* Step 2: Account Setup */}
            {step === 2 && (
              <motion.form
                key="step2"
                onSubmit={handleSubmitStep2}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Company Email
                  </label>
                  <div className="flex">
                    <Input
                      name="emailPrefix"
                      value={formData.emailPrefix}
                      onChange={handleInputChange}
                      placeholder="yourname"
                      className="rounded-r-none"
                    />
                    <div className="flex items-center px-4 bg-secondary border border-l-0 border-border rounded-r-lg text-muted-foreground text-sm">
                      @zynix.com
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    Create Password
                  </label>
                  <Input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Minimum 8 characters"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    Confirm Password
                  </label>
                  <Input
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Re-enter your password"
                  />
                </div>
                <div className="flex gap-3 mt-6">
                  <Button type="button" variant="outline" size="lg" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button type="submit" variant="glow" size="lg" className="flex-1">
                    Continue
                  </Button>
                </div>
              </motion.form>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <motion.form
                key="step3"
                onSubmit={handleFinalSubmit}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 mb-4">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold text-primary">Note:</span> A one-time registration fee of $50 is required for equipment and onboarding materials.
                  </p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-primary" />
                    Card Number
                  </label>
                  <Input
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Expiry Date
                    </label>
                    <Input
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      CVV
                    </label>
                    <Input
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      maxLength={4}
                      type="password"
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button type="button" variant="outline" size="lg" onClick={() => setStep(2)} className="flex-1">
                    Back
                  </Button>
                  <Button type="submit" variant="glow" size="lg" className="flex-1" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Processing...
                      </>
                    ) : (
                      'Submit Registration'
                    )}
                  </Button>
                </div>
              </motion.form>
            )}

            {/* Step 4: Complete */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <Check className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Registration Submitted!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your application is being reviewed. You'll receive a confirmation email at <span className="text-primary">{formData.emailPrefix}@zynix.com</span> within 24-48 hours.
                </p>
                <Button variant="neon" onClick={onClose}>
                  Return to Dashboard
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RegistrationForm;
