import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search, Users, BookOpen, MessageSquare, Sparkles, Calendar, ShieldCheck, ArrowRight,
} from "lucide-react";
import hero from "@/assets/hero-students.jpg";

const features = [
  { icon: Search, title: "Find your people", text: "Search by subject, module code, or study style. Filters make it easy to find groups that fit." },
  { icon: Users, title: "Join in seconds", text: "One click to join open groups, or request access to private cohorts. No awkward intros." },
  { icon: BookOpen, title: "Share notes", text: "Upload lecture notes and resources inside each group so nothing gets lost in chat." },
  { icon: MessageSquare, title: "Ask questions", text: "Post questions to your group and get answers from buddies who actually take the same module." },
  { icon: Calendar, title: "Plan study sessions", text: "Schedule meetups in the library, on campus, or online — everyone gets a friendly reminder." },
  { icon: ShieldCheck, title: "Calm by design", text: "Quiet, distraction-light interface with WCAG-friendly contrast and keyboard navigation." },
];

const subjects = ["Computer Science", "Psychology", "Law", "Economics", "Biology", "Mathematics", "Engineering", "Design"];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary-soft text-primary hover:bg-primary-soft border-0">
              <Sparkles className="h-3 w-3 mr-1" /> New term, new study buddies
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Find your <span className="text-primary">study group</span>.<br />
              Learn together, stress less.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              StudyHive helps university students discover the right study partners, share lecture notes,
              and stay on top of coursework — all in one calm, supportive space.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero">
                <Link to="/auth?mode=signup">Get started — it's free <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/groups">Browse groups</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 text-sm text-muted-foreground">
              <span>Popular:</span>
              {subjects.slice(0, 4).map((s) => (
                <Link key={s} to="/groups" className="text-primary hover:underline">{s}</Link>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-10 blur-3xl rounded-full" aria-hidden />
            <img
              src={hero}
              alt="Illustration of diverse students studying together at a shared table"
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
                    <div className="font-semibold">CS201 Algorithms</div>
                    <div className="text-muted-foreground">12 active members</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Everything you need to study together</h2>
          <p className="text-muted-foreground mt-3">
            We focus on one thing well: helping you find and join the right study group. The rest of your group's life happens here too.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How StudyHive works</h2>
          <ol className="grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Create your profile", d: "Tell us your course, year, and subjects you're studying." },
              { n: "02", t: "Search for groups", d: "Filter by module, level, and meeting style — online or on campus." },
              { n: "03", t: "Join in one click", d: "Open groups welcome you instantly. Private ones just need a quick hello." },
              { n: "04", t: "Study together", d: "Share notes, ask questions, and plan sessions with your new buddies." },
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

      {/* CTA */}
      <section className="container py-16 md:py-24">
        <Card className="border-0 bg-gradient-primary text-primary-foreground overflow-hidden">
          <CardContent className="p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to find your study crew?</h2>
            <p className="opacity-90 max-w-xl mx-auto mb-6">Join thousands of students already learning together on StudyHive. It only takes a minute.</p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/auth?mode=signup">Create your free account</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default Index;
