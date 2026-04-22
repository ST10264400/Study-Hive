import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Users, MapPin, Activity, Calendar, FileText, MessageSquare, Upload, Check, Heart, Reply, Download,
} from "lucide-react";
import { groups } from "@/data/groups";

const discussions = [
  { user: "Maya C.", time: "2h ago", title: "Stuck on Q4 of the problem set — anyone get the recurrence?", body: "I've tried master theorem but my T(n) doesn't fit. Anyone want to walk through it?", replies: 4, likes: 7 },
  { user: "Jordan L.", time: "Yesterday", title: "Sharing my notes from Tuesday's lecture", body: "Cleaned up my notes on dynamic programming — feedback welcome!", replies: 2, likes: 12 },
  { user: "Sam P.", time: "2 days ago", title: "Library room booked for Sunday 3pm 📚", body: "Room 3.04 is ours. Bring your laptops — we'll work through past papers.", replies: 6, likes: 9 },
];

const notes = [
  { name: "Week 5 — Dynamic Programming.pdf", by: "Jordan L.", size: "1.2 MB", date: "Yesterday" },
  { name: "Algorithms cheatsheet.pdf", by: "Maya C.", size: "640 KB", date: "3 days ago" },
  { name: "Past paper solutions 2023.pdf", by: "Sam P.", size: "2.1 MB", date: "1 week ago" },
];

const members = [
  { n: "Maya Chen", r: "Group lead", on: true },
  { n: "Jordan Lee", r: "Member", on: true },
  { n: "Sam Patel", r: "Member", on: false },
  { n: "Riya Singh", r: "Member", on: true },
  { n: "Ben Adams", r: "Member", on: false },
];

const GroupDetail = () => {
  const { id } = useParams();
  const group = groups.find((g) => g.id === id) ?? groups[0];
  const [joined, setJoined] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero border-b border-border">
        <div className="container py-8">
          <Link to="/groups" className="text-sm text-primary hover:underline">← Back to groups</Link>
          <div className="mt-4 flex flex-wrap justify-between items-start gap-4">
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary text-primary-foreground border-0">{group.module}</Badge>
                <Badge variant="outline">{group.subject}</Badge>
                <Badge variant="outline">{group.level}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{group.name}</h1>
              <p className="text-muted-foreground">{group.description}</p>
              <div className="flex gap-5 text-sm text-muted-foreground pt-2">
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4" />{group.members} members</span>
                <span className="flex items-center gap-1.5"><Activity className="h-4 w-4" />{group.activity} activity</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{group.meeting}</span>
              </div>
            </div>
            <div className="flex gap-2">
              {joined ? (
                <Button variant="soft" disabled><Check className="h-4 w-4" />Joined</Button>
              ) : (
                <Button variant="hero" size="lg" onClick={() => setJoined(true)}>Join group</Button>
              )}
              <Button variant="outline" size="lg">Share</Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="discussions">
            <TabsList>
              <TabsTrigger value="discussions"><MessageSquare className="h-4 w-4 mr-1.5" />Discussions</TabsTrigger>
              <TabsTrigger value="notes"><FileText className="h-4 w-4 mr-1.5" />Notes</TabsTrigger>
              <TabsTrigger value="sessions"><Calendar className="h-4 w-4 mr-1.5" />Sessions</TabsTrigger>
            </TabsList>

            <TabsContent value="discussions" className="space-y-4 mt-4">
              <Card className="border-border/60">
                <CardContent className="p-4 space-y-3">
                  <Input placeholder="Ask a question…" className="bg-secondary border-0" />
                  <Textarea placeholder="Add details so your buddies can help (optional)" className="bg-secondary border-0 min-h-20" />
                  <div className="flex justify-end">
                    <Button variant="hero" size="sm">Post question</Button>
                  </div>
                </CardContent>
              </Card>

              {discussions.map((d, i) => (
                <Card key={i} className="border-border/60">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Avatar><AvatarFallback className="bg-accent text-accent-foreground text-xs">{d.user.split(" ").map(x=>x[0]).join("")}</AvatarFallback></Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span className="font-medium text-sm">{d.user}</span>
                          <span className="text-xs text-muted-foreground">{d.time}</span>
                        </div>
                        <h3 className="font-semibold mt-1">{d.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{d.body}</p>
                        <div className="flex gap-4 text-xs text-muted-foreground mt-3">
                          <button className="flex items-center gap-1 hover:text-primary"><Heart className="h-3.5 w-3.5" />{d.likes}</button>
                          <button className="flex items-center gap-1 hover:text-primary"><Reply className="h-3.5 w-3.5" />{d.replies} replies</button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="notes" className="space-y-3 mt-4">
              <Card className="border-2 border-dashed border-border bg-secondary/30">
                <CardContent className="p-6 text-center">
                  <Upload className="h-6 w-6 mx-auto text-primary mb-2" />
                  <p className="font-medium">Drop notes here, or click to upload</p>
                  <p className="text-xs text-muted-foreground mt-1">PDF, DOCX, images — up to 20 MB</p>
                  <Button variant="hero" size="sm" className="mt-4">Upload notes</Button>
                </CardContent>
              </Card>
              {notes.map((n, i) => (
                <Card key={i} className="border-border/60">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary-soft text-primary grid place-items-center"><FileText className="h-5 w-5" /></div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{n.name}</div>
                      <div className="text-xs text-muted-foreground">Shared by {n.by} · {n.size} · {n.date}</div>
                    </div>
                    <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="sessions" className="space-y-3 mt-4">
              <Card className="border-border/60"><CardContent className="p-5 flex justify-between items-center">
                <div>
                  <div className="text-xs text-primary font-medium">WED · 5:00 PM</div>
                  <div className="font-semibold mt-1">Algorithms problem set practice</div>
                  <div className="text-sm text-muted-foreground">Library room 3.04 · 8 attending</div>
                </div>
                <Button variant="soft" size="sm">RSVP</Button>
              </CardContent></Card>
              <Card className="border-border/60"><CardContent className="p-5 flex justify-between items-center">
                <div>
                  <div className="text-xs text-primary font-medium">SUN · 3:00 PM</div>
                  <div className="font-semibold mt-1">Past paper review</div>
                  <div className="text-sm text-muted-foreground">Online — Zoom · 5 attending</div>
                </div>
                <Button variant="soft" size="sm">RSVP</Button>
              </CardContent></Card>
              <Button variant="outline" className="w-full">+ Schedule new session</Button>
            </TabsContent>
          </Tabs>
        </div>

        <aside className="space-y-6">
          <Card className="border-border/60">
            <CardHeader className="pb-3"><CardTitle className="text-base">Members ({group.members})</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {members.map((m) => (
                <div key={m.n} className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-9 w-9"><AvatarFallback className="bg-accent text-accent-foreground text-xs">{m.n.split(" ").map(x=>x[0]).join("")}</AvatarFallback></Avatar>
                    {m.on && <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-success ring-2 ring-background" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{m.n}</div>
                    <div className="text-xs text-muted-foreground">{m.r}</div>
                  </div>
                  <Button asChild variant="ghost" size="sm"><Link to="/messages">Chat</Link></Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-primary-soft/40">
            <CardContent className="p-5">
              <h3 className="font-semibold text-sm mb-1">Group guidelines</h3>
              <p className="text-xs text-muted-foreground">Be kind. Ask questions freely. Share your notes generously. We learn faster — and feel better — together. ✨</p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </Layout>
  );
};

export default GroupDetail;
