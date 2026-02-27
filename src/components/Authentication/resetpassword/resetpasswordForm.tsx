import React, { useState, useEffect } from 'react';
import { 
  FaEnvelope, 
  FaLock, 
  FaKey, 
  FaArrowLeft, 
  FaCheckCircle, 
  FaTimesCircle,
  FaPaperPlane,
  FaCheck
} from 'react-icons/fa';
//import './resetpasswordForm.tsx';

interface PasswordRequirements {
  length: boolean;
  uppercase: boolean;
  number: boolean;
  special: boolean;
}

interface ResetPasswordProps {
  onBackToLogin?: () => void;
  onSuccess?: () => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ 
  onBackToLogin, 
  onSuccess 
}) => {
  // State for form inputs
  const [email, setEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  
  // State for UI
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [resetToken, setResetToken] = useState<string>('');
  
  // Password requirements state
  const [passwordRequirements, setPasswordRequirements] = useState<PasswordRequirements>({
    length: false,
    uppercase: false,
    number: false,
    special: false
  });

  // Validate password on change
  useEffect(() => {
    if (currentStep === 2) {
      const requirements: PasswordRequirements = {
        length: newPassword.length >= 8,
        uppercase: /[A-Z]/.test(newPassword),
        number: /\d/.test(newPassword),
        special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(newPassword)
      };
      setPasswordRequirements(requirements);
    }
  }, [newPassword, currentStep]);

  // Check if all password requirements are met
  const isPasswordValid = (): boolean => {
    return Object.values(passwordRequirements).every(req => req === true);
  };

  // Handle email submission (Step 1)
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@') || !email.includes('.')) {
      setMessage({ text: 'Please enter a valid email address', type: 'error' });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      // In a real app, you would call your backend API here
      // Simulating API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, we'll simulate a successful response
      // In reality, you would get a token from your backend
      const mockToken = 'mock-reset-token-' + Date.now();
      setResetToken(mockToken);
      
      setMessage({ 
        text: `Reset instructions have been sent to ${email}. Please check your inbox.`, 
        type: 'success' 
      });
      
      // Move to step 2
      setTimeout(() => {
        setCurrentStep(2);
        setMessage(null);
      }, 2000);
      
    } catch (error) {
      setMessage({ 
        text: 'Failed to send reset instructions. Please try again.', 
        type: 'error' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle password reset (Step 2)
  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isPasswordValid()) {
      setMessage({ 
        text: 'Please make sure your password meets all requirements', 
        type: 'error' 
      });
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setMessage({ 
        text: 'Passwords do not match. Please try again.', 
        type: 'error' 
      });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      // In a real app, you would send the token and new password to your backend
      // Simulating API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setMessage({ 
        text: 'Your password has been successfully reset!', 
        type: 'success' 
      });
      
      // Move to step 3
      setTimeout(() => {
        setCurrentStep(3);
        setMessage(null);
      }, 2000);
      
    } catch (error) {
      setMessage({ 
        text: 'Failed to reset password. Please try again.', 
        type: 'error' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle back to login
  const handleBackToLogin = () => {
    if (onBackToLogin) {
      onBackToLogin();
    } else {
      // Default behavior - navigate to login page
      window.location.href = '/login';
    }
  };

  // Render password requirement item
  const renderRequirement = (met: boolean, text: string) => (
    <div className={`requirement ${met ? 'met' : 'not-met'}`}>
      {met ? <FaCheckCircle /> : <FaTimesCircle />}
      <span>{text}</span>
    </div>
  );

  return (
    <div className="reset-password-container">
      <div className="reset-password-card">
        {/* Left Section */}
        <div className="left-section">
          <div className="logo">
            <FaKey />
            <span>SecureAuth</span>
          </div>
          
          <h1>Reset Your Password</h1>
          <p>
            Enter your email address and we'll send you instructions to reset your password. 
            Make sure to create a strong password that you haven't used before.
          </p>
          
          <div className="illustration">
            <FaKey size={120} />
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h2>Reset Password</h2>
          <p>Enter your account details to reset your password</p>
          
          {/* Progress Steps */}
          <div className="steps">
            <div className={`step ${currentStep === 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
              <div className="step-number">1</div>
              <div className="step-text">Enter Email</div>
            </div>
            
            <div className={`step ${currentStep === 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
              <div className="step-number">2</div>
              <div className="step-text">Reset Password</div>
            </div>
            
            <div className={`step ${currentStep === 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <div className="step-text">Complete</div>
            </div>
          </div>
          
          {/* Form */}
          <form onSubmit={currentStep === 1 ? handleEmailSubmit : handlePasswordReset}>
            {currentStep === 1 && (
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-with-icon">
                  <FaEnvelope />
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <div className="input-with-icon">
                  <FaLock />
                  <input
                    type="password"
                    id="newPassword"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
                
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-with-icon">
                  <FaLock />
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
                
                <div className="password-requirements">
                  <p>Password must meet the following requirements:</p>
                  {renderRequirement(passwordRequirements.length, 'At least 8 characters long')}
                  {renderRequirement(passwordRequirements.uppercase, 'Contains at least one uppercase letter')}
                  {renderRequirement(passwordRequirements.number, 'Contains at least one number')}
                  {renderRequirement(passwordRequirements.special, 'Contains at least one special character')}
                </div>
              </div>
            )}
            
            {currentStep === 3 && (
              <div className="success-message">
                <div className="success-icon">
                  <FaCheck size={60} />
                </div>
                <h3>Password Reset Successful!</h3>
                <p>Your password has been reset successfully. You can now log in with your new password.</p>
              </div>
            )}
            
            {/* Message Display */}
            {message && (
              <div className={`message ${message.type}`}>
                {message.text}
              </div>
            )}
            
            {/* Buttons */}
            <div className="buttons">
              {currentStep < 3 && (
                <button
                  type="button"
                  className="back-btn"
                  onClick={currentStep === 1 ? handleBackToLogin : () => setCurrentStep(1)}
                  disabled={isLoading}
                >
                  <FaArrowLeft />
                  {currentStep === 1 ? 'Back to Login' : 'Back'}
                </button>
              )}
              
              {currentStep === 1 && (
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isLoading || !email}
                >
                  {isLoading ? 'Sending...' : 'Send Reset Instructions'}
                  {!isLoading && <FaPaperPlane />}
                </button>
              )}
              
              {currentStep === 2 && (
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isLoading || !isPasswordValid() || newPassword !== confirmPassword}
                >
                  {isLoading ? 'Resetting...' : 'Reset Password'}
                </button>
              )}
              
              {currentStep === 3 && (
                <button
                  type="button"
                  className="submit-btn"
                  onClick={handleBackToLogin}
                >
                  Go to Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;