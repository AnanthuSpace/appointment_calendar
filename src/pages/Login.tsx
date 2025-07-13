import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = ({ className, ...props }: React.ComponentProps<"div">) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (email === "test@gmail.com" && password === "test@123") {
        localStorage.setItem("loggedIn", "true");
        toast.success("Login successful! Welcome back.");
        navigate("/calendar");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-6 min-h-screen items-center justify-center",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-md">
        <CardContent className="p-8">
          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Welcome back</h1>
              <p className="text-muted-foreground text-sm">
                Login to your clinic account
              </p>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="gmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Login"}
            </Button>

            <div className="text-center text-xs text-muted-foreground">
              By continuing, you agree to our{" "}
              <a href="#" className="underline hover:text-primary">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="underline hover:text-primary">
                Privacy Policy
              </a>
              .
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
