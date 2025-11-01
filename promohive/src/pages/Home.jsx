import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo, { LogoWithGlow, FloatingLogo } from '../components/ui/Logo';
import Button from '../components/ui/Button';
import Icon from '../components/AppIcon';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: 'Target',
      title: 'Complete Tasks',
      description: 'Earn money by completing simple tasks and offers from our trusted partners.',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: 'Users',
      title: 'Refer Friends',
      description: 'Get bonus rewards for every friend you invite to join PromoHive.',
      color: 'from-purple-500 to-pink-400'
    },
    {
      icon: 'Wallet',
      title: 'Instant Payouts',
      description: 'Withdraw your earnings instantly to your USDT wallet.',
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: 'Gift',
      title: 'Daily Rewards',
      description: 'Spin the wheel daily for bonus coins and special prizes.',
      color: 'from-orange-500 to-yellow-400'
    }
  ];

  const stats = [
    { label: 'Active Users', value: '50K+', icon: 'Users' },
    { label: 'Tasks Completed', value: '1M+', icon: 'CheckCircle' },
    { label: 'Total Payouts', value: '$500K+', icon: 'DollarSign' },
    { label: 'Success Rate', value: '99.9%', icon: 'TrendingUp' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-glow opacity-20 animate-pulse-slow" />
        <div className="absolute inset-0 bg-gradient-secondary opacity-10 animate-gradient-shift" 
             style={{ backgroundSize: '200% 200%' }} />
        
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo with Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <FloatingLogo 
                size="3xl" 
                className="justify-center mb-6"
                variant="glow"
              />
            </motion.div>

            {/* Hero Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Earn Money
              </span>
              <br />
              <span className="text-foreground">
                The Smart Way
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Complete simple tasks, refer friends, and earn real money with PromoHive. 
              Join thousands of users already earning daily rewards.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link to="/register">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-4 text-lg animate-glow"
                >
                  <Icon name="Zap" size={20} className="mr-2" />
                  Start Earning Now
                </Button>
              </Link>
              <Link to="/login">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg"
                >
                  <Icon name="LogIn" size={20} className="mr-2" />
                  Sign In
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="glass rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300"
                >
                  <Icon 
                    name={stat.icon} 
                    size={24} 
                    className="mx-auto mb-2 text-primary" 
                  />
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Why Choose
              </span>
              <span className="text-foreground"> PromoHive?</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              We make earning money online simple, secure, and rewarding for everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-xl p-6 h-full hover:scale-105 transition-all duration-300 hover:shadow-glass-xl">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:animate-bounce-in`}>
                    <Icon name={feature.icon} size={24} color="white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="relative container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <LogoWithGlow size="xl" className="justify-center mb-8" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Join PromoHive today and start your journey to financial freedom.
            </p>
            <Link to="/register">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-12 py-4 text-xl animate-glow"
              >
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Get Started Free
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo size="lg" className="mb-4 md:mb-0" />
            <div className="flex items-center space-x-6 text-text-secondary">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/support" className="hover:text-primary transition-colors">
                Support
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-text-secondary">
            <p>&copy; 2024 PromoHive. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
