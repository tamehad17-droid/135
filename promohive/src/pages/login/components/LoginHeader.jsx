import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Logo, { LogoWithGlow } from '../../../components/ui/Logo';

const LoginHeader = () => {
  return (
    <div className="text-center mb-8">
      {/* Logo */}
      <Link to="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
        <LogoWithGlow 
          size="xl" 
          className="justify-center"
          animated={true}
        />
        <p className="text-sm text-text-secondary mt-2 font-medium tracking-wide">
          GLOBAL PROMO NETWORK
        </p>
      </Link>

      {/* Welcome Text */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          Welcome Back
        </h1>
        <p className="text-text-secondary">
          Sign in to your account to continue earning rewards
        </p>
      </div>
    </div>
  );
};

export default LoginHeader;
