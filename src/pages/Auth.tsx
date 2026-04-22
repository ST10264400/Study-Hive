import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { GraduationCap, Mail, Lock, User } from "lucide-react";

const Auth = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const initial = params.get("mode") === "signup" ? "signup" : "login";
  const [tab, setTab] = useState(initial);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <Layout hideNavCta>
      <div className="min-h-[calc(100vh-4rem)] grid lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-between bg-gradient-hero p-12">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-primary text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
            </span>
            StudyHive
          </Link>
          <div className="space-y-4 max-w-md">
            <h2 className="text-3xl font-bold">Welcome back, scholar 👋</h2>
            <p className="text-muted-foreground">
              Pick up where you left off. Your study groups, notes, and discussions are waiting.
            </p>
            <Card className="border-0 shadow-card">
              <CardContent className="p-5">
                <p className="text-sm italic">"I went from studying alone in my dorm to having three regular study buddies. My grades — and stress — both got way better."</p>
                <p className="text-xs text-muted-foreground mt-2">— Amara, 2nd year Psychology</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-muted-foreground">© StudyHive Prototype</p>
        </div>

        <div className="flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-bold mb-2">{tab === "login" ? "Log in to StudyHive" : "Create your account"}</h1>
            <p className="text-muted-foreground mb-6 text-sm">{tab === "login" ? "Welcome back — let's get studying." : "Free for students. Always."}</p>

            <Tabs value={tab} onValueChange={setTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Log in</TabsTrigger>
                <TabsTrigger value="signup">Sign up</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">University email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="email" type="email" placeholder="you@university.edu" className="pl-9" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="password" type="password" placeholder="••••••••" className="pl-9" required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" variant="hero">Log in</Button>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="name" placeholder="Alex Morgan" className="pl-9" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email2">University email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="email2" type="email" placeholder="you@university.edu" className="pl-9" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="course">Course</Label>
                      <Input id="course" placeholder="Computer Science" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year">Year</Label>
                      <Input id="year" placeholder="Year 2" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password2">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="password2" type="password" placeholder="At least 8 characters" className="pl-9" required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" variant="hero">Create account</Button>
                  <p className="text-xs text-muted-foreground text-center">By signing up you agree to our community guidelines.</p>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
