import { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { TransactionsScreen } from './components/TransactionsScreen';
import { SavingsGoalsScreen } from './components/SavingsGoalsScreen';
import { ParentalControlsScreen } from './components/ParentalControlsScreen';
import { FriendsScreen } from './components/FriendsScreen';
import { TransactionInputScreen } from './components/TransactionInputScreen';
import { Navigation } from './components/Navigation';
import { TransactionProvider } from './components/TransactionContext';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [showTransactionInput, setShowTransactionInput] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleAddTransaction = () => {
    setShowTransactionInput(true);
  };

  const handleTransactionSave = () => {
    setShowTransactionInput(false);
  };

  const renderScreen = () => {
    if (showTransactionInput) {
      return (
        <TransactionInputScreen 
          onBack={() => setShowTransactionInput(false)}
          onSave={handleTransactionSave}
        />
      );
    }

    switch (activeScreen) {
      case 'dashboard':
        return <DashboardScreen />;
      case 'transactions':
        return <TransactionsScreen />;
      case 'friends':
        return <FriendsScreen />;
      case 'savings':
        return <SavingsGoalsScreen />;
      case 'parental':
        return <ParentalControlsScreen />;
      case 'profile':
        return (
          <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--gradient-secondary)' }}>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                A
              </div>
              <div>
                <h2 className="text-2xl font-bold">Alex Johnson</h2>
                <p className="text-muted-foreground">alex.johnson@email.com</p>
              </div>
              <div className="space-y-2 pt-4">
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full p-3 rounded-xl bg-red-100 text-red-700 font-medium hover:bg-red-200 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return <DashboardScreen />;
    }
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <TransactionProvider>
      <div className="min-h-screen">
        <div className="pb-20">
          {renderScreen()}
        </div>
        {!showTransactionInput && (
          <Navigation 
            activeScreen={activeScreen} 
            onScreenChange={setActiveScreen}
            onAddTransaction={handleAddTransaction}
          />
        )}
      </div>
    </TransactionProvider>
  );
}