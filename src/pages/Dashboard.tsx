import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, FileText, MessageSquare, Plus, Search, Sparkles, TrendingUp, Users } from "lucide-react";
import { groups } from "@/data/groups";

const Dashboard = () => {
  const myGroups = groups.slice(0, 3);
  return (
    <Layout>
      <div className="container py-10 space-y-8">
        {/* Greeting */}
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-primary font-medium flex items-center gap-1.5">
              <Sparkles className="h-4 w-4" /> Good to see you, Alex
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mt-1">Let's make today a great study day.</h1>
            <p className="text-muted-foreground mt-1">You have 2 sessions this week and 4 unread group posts.</p>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline"><Link to="/groups"><Search className="h-4 w-4" />Find a group</Link></Button>
            <Button asChild variant="hero"><Link to="/groups/create"><Plus className="h-4 w-4" />Create group</Link></Button>
          </div>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Active groups", value: "3", icon: Users },
            { label: "Notes shared", value: "12", icon: FileText },
            { label: "Questions asked", value: "8", icon: MessageSquare },
            { label: "Study streak", value: "6 days", icon: TrendingUp },
          ].map((s) => (
            <Card key={s.label} className="border-border/60">
              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary-soft text-primary grid place-items-center">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* My groups */}
          <section className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Your study groups</h2>
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
                      <Progress value={g.activity === "High" ? 85 : g.activity === "Medium" ? 55 : 25} className="h-1.5" />
                    </div>
                    <Button asChild variant="soft" size="sm" className="w-full">
                      <Link to={`/groups/${g.id}`}>Open group</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-dashed border-2 border-border bg-secondary/30">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-1">Looking for something new?</h3>
                <p className="text-sm text-muted-foreground mb-3">Discover groups for your modules — there's always room for one more.</p>
                <Button asChild variant="hero"><Link to="/groups">Browse all groups</Link></Button>
              </CardContent>
            </Card>
          </section>

          {/* Side: schedule + buddies */}
          <aside className="space-y-6">
            <Card className="border-border/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> Upcoming sessions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { day: "Wed", time: "5pm", t: "Algorithms practice", w: "Library, room 3.04" },
                  { day: "Thu", time: "7pm", t: "Psychology revision", w: "Online — Zoom" },
                  { day: "Sat", time: "11am", t: "UX crit session", w: "Design studio" },
                ].map((s, i) => (
                  <div key={i} className="flex gap-3 items-center p-2 rounded-lg hover:bg-secondary">
                    <div className="h-12 w-12 rounded-lg bg-primary-soft text-primary grid place-items-center flex-shrink-0">
                      <div className="text-center">
                        <div className="text-[10px] uppercase font-semibold">{s.day}</div>
                        <div className="text-xs font-bold">{s.time}</div>
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate">{s.t}</div>
                      <div className="text-xs text-muted-foreground truncate">{s.w}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Study buddies</CardTitle>
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
                        <Avatar className="h-9 w-9"><AvatarFallback className="bg-accent text-accent-foreground text-xs">{b.n.split(" ").map(x=>x[0]).join("")}</AvatarFallback></Avatar>
                        {b.on && <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-success ring-2 ring-background" />}
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
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
