import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users, BookOpen, MessageSquare, HeartHandshake, Sparkles, ArrowRight,
  Eye, Keyboard, Type, Smartphone, Accessibility as A11y,
} from "lucide-react";
import hero from "@/assets/hero-students.jpg";

const features = [
  { icon: Users, title: "Academic Collaboration", text: "Connect with students studying the same modules and learn together." },
  { icon: BookOpen, title: "Resource Sharing", text: "Upload and share lecture notes, slides, and study materials with your group." },
  { icon: MessageSquare, title: "Study Discussions", text: "Participate in meaningful academic conversations that deepen understanding." },
  { icon: HeartHandshake, title: "Peer Support", text: "Learn together, encourage one another, and stay motivated through every term." },
];

const a11yFeatures = [
  { icon: Eye, t: "High contrast colours", d: "WCAG 2.0 AA compliant palettes in light and dark modes." },
  { icon: Type, t: "Readable typography", d: "Generous spacing and scalable type for comfortable reading." },
  { icon: Keyboard, t: "Keyboard navigation", d: "Every action reachable without a mouse, with visible focus rings." },
  { icon: Smartphone, t: "Responsive design", d: "Optimised for desktop, tablet, and mobile devices." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary-soft text-primary hover:bg-primary-soft border-0">
              <Sparkles className="h-3 w-3 mr-1" aria-hidden /> Collaborative Learning Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Study Buddies <span className="text-primary">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-foreground/80">
              Connect, Collaborate, and Succeed Together.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              Study Buddies Connect is a collaborative learning platform that helps students find
              study groups, share resources, participate in discussions, and achieve academic success
              through teamwork.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero">
                <Link to="/groups">Join a Study Group <ArrowRight className="h-4 w-4" aria-hidden /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/groups/create">Create a Study Group</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-10 blur-3xl rounded-full" aria-hidden />
            <img
              src={hero}
              alt="Diverse university students collaborating around a shared table with laptops and notes"
              width={1280}
              height={896}
              className="relative rounded-2xl shadow-card w-full h-auto"
            />
            <Card className="absolute -bottom-6 -left-4 hidden md:block shadow-card border-0 w-56">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["A", "M", "J"].map((c, i) => (
                      <div key={c} className={`h-8 w-8 rounded-full grid place-items-center text-xs font-semibold ring-2 ring-background ${i === 0 ? "bg-primary-soft text-primary" : i === 1 ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground"}`}>{c}</div>
                    ))}
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold">HCI 6322 Study Circle</div>
                    <div className="text-muted-foreground">12 active members</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Built for academic collaboration</h2>
          <p className="text-muted-foreground mt-3">
            Everything students need to study together — in one supportive, easy-to-use platform.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="border-border/60 hover:shadow-card transition-shadow">
              <CardContent className="p-6">
                <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center mb-4">
                  <f.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How it works</h2>
          <ol className="grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Create your profile", d: "Tell us your course, year, and the modules you're studying." },
              { n: "02", t: "Search for groups", d: "Filter by module, level, and meeting style — online or on campus." },
              { n: "03", t: "Join in one click", d: "Open groups welcome you instantly. Private ones just need a quick hello." },
              { n: "04", t: "Study together", d: "Share notes, ask questions, and plan sessions with your buddies." },
            ].map((s) => (
              <li key={s.n} className="bg-background rounded-2xl p-6 shadow-soft">
                <div className="text-primary font-bold text-sm mb-2">{s.n}</div>
                <h3 className="font-semibold mb-1">{s.t}</h3>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Accessibility features */}
      <section className="container py-16 md:py-24" aria-labelledby="a11y-heading">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <Badge className="bg-accent text-accent-foreground border-0 mb-3">
              <A11y className="h-3 w-3 mr-1" aria-hidden /> WCAG 2.0 Accessible
            </Badge>
            <h2 id="a11y-heading" className="text-3xl md:text-4xl font-bold">Designed for every student</h2>
            <p className="text-muted-foreground mt-3">
              Study Buddies Connect follows WCAG 2.0 principles so everyone — regardless of ability or device — can learn together.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/accessibility">Read our accessibility statement</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {a11yFeatures.map((f) => (
            <Card key={f.t} className="border-border/60">
              <CardContent className="p-6">
                <div className="h-11 w-11 rounded-xl bg-accent text-accent-foreground grid place-items-center mb-4">
                  <f.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-semibold mb-1">{f.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 md:py-24">
        <Card className="border-0 bg-gradient-primary text-primary-foreground overflow-hidden">
          <CardContent className="p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to find your study crew?</h2>
            <p className="opacity-90 max-w-xl mx-auto mb-6">Join thousands of students already learning together on Study Buddies Connect.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/auth?mode=signup">Create your free account</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/groups">Browse groups</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default Index;
