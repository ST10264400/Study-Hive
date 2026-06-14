import { Link } from "react-router-dom";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import Crumbs from "@/components/Crumbs";
import MotivationCard from "@/components/MotivationCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Calendar, FileText, MessageSquare, Plus, Search, Sparkles, TrendingUp, Users,
  Upload, Award, Trophy, Star, Crown, Clock, BookOpen, GraduationCap, HeartHandshake,
} from "lucide-react";
import { groups } from "@/data/groups";

const quickActions = [
  { t: "Join Group", d: "Browse open study groups", icon: Search, to: "/groups", variant: "soft" as const },
  { t: "Create Group", d: "Start your own study circle", icon: Plus, to: "/groups/create", variant: "hero" as const },
  { t: "Upload Notes", d: "Share resources with your group", icon: Upload, to: "/groups/cs201", variant: "soft" as const },
  { t: "Messages", d: "5 unread conversations", icon: MessageSquare, to: "/messages", variant: "soft" as const },
  { t: "Schedule Session", d: "Plan a study meetup", icon: Calendar, to: "/groups/cs201", variant: "soft" as const },
];

const badges = [
  { t: "First Group Joined", icon: Star, earned: true },
  { t: "Active Collaborator", icon: Award, earned: true },
  { t: "Top Contributor", icon: Trophy, earned: true },
  { t: "Study Champion", icon: Crown, earned: false },
  { t: "Peer Mentor", icon: HeartHandshake, earned: true },
  { t: "Academic Achiever", icon: GraduationCap, earned: false },
];

const recentActivity = [
  { icon: Users, t: "Joined HCI 6322 Study Circle", w: "2 hours ago" },
  { icon: FileText, t: "Uploaded Research Methods summary notes", w: "Yesterday" },
  { icon: MessageSquare, t: "Replied to discussion in Business Analysis 7321", w: "Yesterday" },
  { icon: Calendar, t: "RSVP'd to Saturday study session", w: "2 days ago" },
  { icon: Trophy, t: "Earned the Peer Mentor badge", w: "3 days ago" },
];

const Dashboard = () => {
  const myGroups = groups.slice(0, 3);
  const recommended = groups.slice(3, 6);

  return (
    <Layout>
      <div className="container py-10 space-y-8">
        <Crumbs items={[{ label: "Dashboard" }]} />

        {/* Greeting */}
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-primary font-medium flex items-center gap-1.5">
              <Sparkles className="h-4 w-4" aria-hidden /> Welcome back, Oratile
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mt-1 tracking-tight">Welcome back!</h1>
            <p className="text-muted-foreground mt-2 max-w-xl text-base">
              Continue building your academic success through collaboration.
            </p>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" onClick={() => toast.success("Opening group search")}>
              <Link to="/groups"><Search className="h-4 w-4" aria-hidden />Find a group</Link>
            </Button>
            <Button asChild variant="hero">
              <Link to="/groups/create"><Plus className="h-4 w-4" aria-hidden />Create group</Link>
            </Button>
          </div>
        </header>

        {/* Motivation strip */}
        <section aria-label="Motivational messages" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[0, 1, 2, 3].map((i) => <MotivationCard key={i} index={i} />)}
        </section>

        {/* Quick actions */}
        <section aria-labelledby="quick-actions-heading">
          <h2 id="quick-actions-heading" className="text-xl font-semibold mb-4">Quick actions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((a) => (
              <Card key={a.t} className="border-border/60 hover:shadow-card hover:-translate-y-0.5 transition-all">
                <CardContent className="p-5 space-y-3">
                  <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center">
                    <a.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold">{a.t}</h3>
                    <p className="text-sm text-muted-foreground">{a.d}</p>
                  </div>
                  <Button asChild variant={a.variant} size="sm" className="w-full"
                    onClick={() => toast.success(`${a.t} — opening…`)}>
                    <Link to={a.to}>{a.t}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Student statistics */}
        <section aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="text-xl font-semibold mb-4">Your student statistics</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Groups Joined", value: "4", icon: Users },
              { label: "Notes Shared", value: "12", icon: FileText },
              { label: "Discussions Participated", value: "27", icon: MessageSquare },
              { label: "Study Hours Logged", value: "48h", icon: Clock },
            ].map((s) => (
              <Card key={s.label} className="border-border/60">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center">
                      <s.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{s.value}</div>
                      <div className="text-xs text-muted-foreground">{s.label}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* My groups */}
          <section className="lg:col-span-2 space-y-4" aria-labelledby="my-groups-heading">
            <div className="flex items-center justify-between">
              <h2 id="my-groups-heading" className="text-xl font-semibold">Your study groups</h2>
              <Link to="/groups" className="text-sm text-primary hover:underline">See all</Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {myGroups.map((g) => (
                <Card key={g.id} className="hover:shadow-card transition-shadow border-border/60">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Badge className="bg-primary-soft text-primary border-0 mb-2">{g.module}</Badge>
                        <CardTitle className="text-base">{g.name}</CardTitle>
                      </div>
                      <span className="text-xs text-muted-foreground">{g.members} members</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground line-clamp-2">{g.description}</p>
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Weekly activity</span><span>{g.activity}</span>
                      </div>
                      <Progress value={g.activity === "High" ? 85 : g.activity === "Medium" ? 55 : 25} className="h-1.5" aria-label={`Weekly activity ${g.activity}`} />
                    </div>
                    <Button asChild variant="soft" size="sm" className="w-full">
                      <Link to={`/groups/${g.id}`}>Open group</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recommended groups */}
            <section aria-labelledby="recommended-heading" className="pt-4">
              <div className="flex items-center justify-between mb-3">
                <h2 id="recommended-heading" className="text-xl font-semibold">Recommended Study Groups</h2>
                <Link to="/groups" className="text-sm text-primary hover:underline">Browse all</Link>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {recommended.map((g) => (
                  <Card key={g.id} className="border-border/60 hover:shadow-card transition-all hover:-translate-y-0.5">
                    <CardContent className="p-4 space-y-2">
                      <Badge className="bg-accent text-accent-foreground border-0">{g.subject}</Badge>
                      <h3 className="font-semibold text-sm leading-tight">{g.name}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{g.description}</p>
                      <Button
                        asChild variant="hero" size="sm" className="w-full"
                        onClick={() => toast.success(`Joined ${g.name}!`, { description: "Find it in your dashboard." })}
                      >
                        <Link to={`/groups/${g.id}`}>Join Group</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </section>

          {/* Side: schedule + badges + buddies */}
          <aside className="space-y-6">
            <Card className="border-border/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" aria-hidden /> Upcoming Study Sessions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { day: "Wed", time: "5pm", t: "HCI 6322 design crit", w: "Library, room 3.04" },
                  { day: "Thu", time: "7pm", t: "Research methods recap", w: "Online — Zoom" },
                  { day: "Sat", time: "11am", t: "Business Analysis 7321", w: "Campus, block B" },
                ].map((s, i) => (
                  <div key={i} className="flex gap-3 items-center p-2 rounded-lg hover:bg-secondary transition-colors">
                    <div className="h-12 w-12 rounded-lg bg-primary-soft text-primary grid place-items-center flex-shrink-0">
                      <div className="text-center">
                        <div className="text-[10px] uppercase font-semibold">{s.day}</div>
                        <div className="text-xs font-bold">{s.time}</div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-sm truncate">{s.t}</div>
                      <div className="text-xs text-muted-foreground truncate">{s.w}</div>
                    </div>
                    <Button size="sm" variant="ghost" onClick={() => toast.success(`RSVP confirmed for ${s.t}`)}>RSVP</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" aria-hidden /> Achievement badges
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3">
                {badges.map((b) => (
                  <div key={b.t} className={`rounded-xl p-3 text-center border ${b.earned ? "bg-primary-soft border-primary/20" : "bg-secondary border-border opacity-60"}`}>
                    <div className={`h-10 w-10 mx-auto rounded-full grid place-items-center mb-2 ${b.earned ? "bg-gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      <b.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="text-xs font-semibold leading-tight">{b.t}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{b.earned ? "Earned" : "Locked"}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" aria-hidden /> Study buddies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { n: "Maya Chen", c: "CS, Year 2", on: true },
                  { n: "Jordan Lee", c: "Psychology, Year 1", on: true },
                  { n: "Sam Patel", c: "Economics, Year 2", on: false },
                  { n: "Riya Singh", c: "Design, Year 2", on: false },
                ].map((b) => (
                  <div key={b.n} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="h-9 w-9"><AvatarFallback className="bg-accent text-accent-foreground text-xs">{b.n.split(" ").map(x => x[0]).join("")}</AvatarFallback></Avatar>
                        {b.on && <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-success ring-2 ring-background" aria-label="Online" />}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{b.n}</div>
                        <div className="text-xs text-muted-foreground">{b.c}</div>
                      </div>
                    </div>
                    <Button asChild variant="ghost" size="sm"><Link to="/messages">Message</Link></Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-dashed border-2 border-border bg-secondary/30">
              <CardContent className="p-5 text-center">
                <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" aria-hidden />
                <h3 className="font-semibold mb-1">6-day study streak 🔥</h3>
                <p className="text-sm text-muted-foreground">Keep showing up — small steps lead to big results.</p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
