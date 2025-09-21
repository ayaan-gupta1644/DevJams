import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Shield, Sparkles, TrendingUp } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{ background: 'var(--gradient-secondary)' }}>
      <div className="w-full max-w-sm space-y-6">
        {/* Logo and Welcome */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="p-3 rounded-2xl" style={{ background: 'var(--gradient-primary)' }}>
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                FinanceAI
              </h1>
              <p className="text-sm text-muted-foreground">Smart money for students</p>
            </div>
          </div>
          <p className="text-lg text-foreground">
            Welcome! Let's get you started on your financial journey 🚀
          </p>
        </div>

        {/* Login/Signup Tabs */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="space-y-4 px-6 pb-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-xl"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full rounded-xl h-12 text-white" 
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  Sign In
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup" className="space-y-4 px-6 pb-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    className="rounded-xl"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full rounded-xl h-12 text-white" 
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  Create Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-2">
            <div className="mx-auto w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-emerald-600" />
            </div>
            <p className="text-xs text-muted-foreground">AI Insights</p>
          </div>
          <div className="space-y-2">
            <div className="mx-auto w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-cyan-600" />
            </div>
            <p className="text-xs text-muted-foreground">Smart Savings</p>
          </div>
          <div className="space-y-2">
            <div className="mx-auto w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Shield className="h-5 w-5 text-blue-600" />
            </div>
            <p className="text-xs text-muted-foreground">Secure</p>
          </div>
        </div>
      </div>
    </div>
  );
}