import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Calendar, MapPin, Edit3, FileText, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { groups } from "@/data/groups";

const Profile = () => {
  return (
    <Layout>
      {/* Header banner */}
      <div className="bg-gradient-hero border-b border-border">
        <div className="container py-10 flex flex-wrap items-center gap-6">
          <Avatar className="h-24 w-24 ring-4 ring-background shadow-card">
            <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl font-bold">OR</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-bold">Oratile Rapolai</h1>
            <p className="text-muted-foreground">Information Technology · Year 3 · Rosebank College</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge className="bg-primary-soft text-primary border-0">Human Computer Interaction 6322</Badge>
              <Badge className="bg-primary-soft text-primary border-0">Introduction to Research for ICT 7311</Badge>
              <Badge className="bg-primary-soft text-primary border-0">Business Analysis 7321</Badge>
              <Badge className="bg-primary-soft text-primary border-0">IT Risk Management 7311</Badge>
            </div>
          </div>
          <Button variant="outline"><Edit3 className="h-4 w-4" />Edit profile</Button>
        </div>
      </div>

      <div className="container py-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border/60">
            <CardHeader><CardTitle className="text-base">About me</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Hi! I'm Oratile 👋 I'm a third-year IT student at Rosebank College who enjoys learning with people who share ideas openly. Currently diving into HCI, research methods, and business analysis.</p>
              <p>Looking for: study buddies for HCI 6322 and Research 7311, weekly revision sessions, and people keen to chat about IT risk and business analysis. ☕</p>
            </CardContent>
          </Card>

          <Card className="border-border/60">
            <CardHeader className="flex-row items-center justify-between"><CardTitle className="text-base">My groups</CardTitle><Link to="/groups" className="text-sm text-primary hover:underline">Find more</Link></CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-3">
              {groups.slice(0, 4).map((g) => (
                <Link to={`/groups/${g.id}`} key={g.id} className="border border-border rounded-lg p-3 hover:bg-secondary transition-colors">
                  <div className="text-xs text-primary font-medium">{g.module}</div>
                  <div className="font-medium text-sm mt-1">{g.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{g.members} members</div>
                </Link>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/60">
            <CardHeader><CardTitle className="text-base">Edit details</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-1.5"><Label>Display name</Label><Input defaultValue="Oratile Rapolai" /></div>
                <div className="space-y-1.5"><Label>Pronouns</Label><Input defaultValue="she/her" /></div>
                <div className="space-y-1.5"><Label>Course</Label><Input defaultValue="Information Technology" /></div>
                <div className="space-y-1.5"><Label>Year</Label><Input defaultValue="Year 3" /></div>
              </div>
              <div className="space-y-1.5"><Label>Bio</Label><Textarea defaultValue="I love studying with people who explain things kindly." /></div>
              <Button variant="hero">Save changes</Button>
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-6">
          <Card className="border-border/60">
            <CardHeader className="pb-3"><CardTitle className="text-base">Activity snapshot</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm">
              {[
                { icon: BookOpen, label: "4 groups joined" },
                { icon: FileText, label: "12 notes shared" },
                { icon: MessageSquare, label: "8 questions asked" },
                { icon: Calendar, label: "6 sessions attended" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2 text-muted-foreground">
                  <s.icon className="h-4 w-4 text-primary" />{s.label}
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardHeader className="pb-3"><CardTitle className="text-base">Availability</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1.5">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />Mostly on campus</div>
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" />Weekday evenings, weekends</div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </Layout>
  );
};

export default Profile;
