import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import Crumbs from "@/components/Crumbs";
import MotivationCard from "@/components/MotivationCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Users, MapPin, Activity, Calendar, FileText, MessageSquare, Upload, Check, Heart, Reply, Download,
} from "lucide-react";
import { groups } from "@/data/groups";

type Comment = { id: string; user: string; time: string; body: string; likes: number; replies: Comment[] };

const initialDiscussions: (Comment & { title: string })[] = [
  {
    id: "d1", user: "Maya C.", time: "2h ago", title: "Stuck on Q4 of the problem set — anyone get the recurrence?",
    body: "I've tried master theorem but my T(n) doesn't fit. Anyone want to walk through it?", likes: 7,
    replies: [
      { id: "r1", user: "Jordan L.", time: "1h ago", body: "I had the same issue! Try substitution method instead, it works cleaner here.", likes: 3, replies: [
        { id: "r1a", user: "Maya C.", time: "45m ago", body: "Oh that makes sense — thank you so much! 🙌", likes: 1, replies: [] },
      ] },
      { id: "r2", user: "Sam P.", time: "30m ago", body: "Posting my full solution to the notes tab in a sec.", likes: 2, replies: [] },
    ],
  },
  {
    id: "d2", user: "Jordan L.", time: "Yesterday", title: "Sharing my notes from Tuesday's lecture",
    body: "Cleaned up my notes on dynamic programming — feedback welcome!", likes: 12,
    replies: [
      { id: "r3", user: "Riya S.", time: "20h ago", body: "These are gorgeous. The memoisation diagram clicked for me instantly.", likes: 4, replies: [] },
    ],
  },
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

const CommentNode = ({ c, depth = 0 }: { c: Comment; depth?: number }) => {
  const [showReply, setShowReply] = useState(false);
  const [reply, setReply] = useState("");
  const [liked, setLiked] = useState(false);
  return (
    <div className={depth > 0 ? "border-l-2 border-border pl-4 mt-3" : ""}>
      <div className="flex items-start gap-3">
        <Avatar className="h-8 w-8"><AvatarFallback className="bg-accent text-accent-foreground text-xs">{c.user.split(" ").map(x => x[0]).join("")}</AvatarFallback></Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="font-medium text-sm">{c.user}</span>
            <span className="text-xs text-muted-foreground">{c.time}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{c.body}</p>
          <div className="flex gap-4 text-xs text-muted-foreground mt-2">
            <button
              type="button"
              className={`flex items-center gap-1 rounded transition-colors ${liked ? "text-primary" : "hover:text-primary"}`}
              onClick={() => { setLiked(!liked); toast.success(liked ? "Like removed" : "Thanks for the support!"); }}
              aria-pressed={liked}
              aria-label={`${liked ? "Unlike" : "Like"} comment from ${c.user}`}
            >
              <Heart className="h-3.5 w-3.5" aria-hidden fill={liked ? "currentColor" : "none"} />{c.likes + (liked ? 1 : 0)}
            </button>
            <button
              type="button"
              className="flex items-center gap-1 hover:text-primary transition-colors"
              onClick={() => setShowReply((v) => !v)}
              aria-expanded={showReply}
            >
              <Reply className="h-3.5 w-3.5" aria-hidden />Reply
            </button>
          </div>
          {showReply && (
            <form
              className="mt-3 space-y-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (!reply.trim()) return;
                toast.success("Reply posted");
                setReply(""); setShowReply(false);
              }}
            >
              <Label htmlFor={`reply-${c.id}`} className="sr-only">Reply to {c.user}</Label>
              <Textarea id={`reply-${c.id}`} value={reply} onChange={(e) => setReply(e.target.value)} placeholder="Write a thoughtful reply…" className="bg-secondary border-0 min-h-16 text-sm" />
              <div className="flex gap-2 justify-end">
                <Button type="button" size="sm" variant="ghost" onClick={() => setShowReply(false)}>Cancel</Button>
                <Button type="submit" size="sm" variant="hero">Post reply</Button>
              </div>
            </form>
          )}
          {c.replies.map((r) => <CommentNode key={r.id} c={r} depth={depth + 1} />)}
        </div>
      </div>
    </div>
  );
};

const GroupDetail = () => {
  const { id } = useParams();
  const group = groups.find((g) => g.id === id) ?? groups[0];
  const [joined, setJoined] = useState(false);
  const [postQ, setPostQ] = useState("");

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero border-b border-border">
        <div className="container py-8 space-y-4">
          <Crumbs items={[{ label: "Find Groups", to: "/groups" }, { label: group.name }]} />
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary text-primary-foreground border-0">{group.module}</Badge>
                <Badge variant="outline">{group.subject}</Badge>
                <Badge variant="outline">{group.level}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{group.name}</h1>
              <p className="text-muted-foreground">{group.description}</p>
              <div className="flex flex-wrap gap-5 text-sm text-muted-foreground pt-2">
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4" aria-hidden />{group.members} members</span>
                <span className="flex items-center gap-1.5"><Activity className="h-4 w-4" aria-hidden />{group.activity} activity</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" aria-hidden />{group.meeting}</span>
              </div>
            </div>
            <div className="flex gap-2">
              {joined ? (
                <Button variant="soft" disabled><Check className="h-4 w-4" aria-hidden />Joined</Button>
              ) : (
                <Button variant="hero" size="lg" onClick={() => { setJoined(true); toast.success(`Welcome to ${group.name}!`, { description: "You're all set — say hi in discussions." }); }}>
                  Join Group
                </Button>
              )}
              <Button variant="outline" size="lg" onClick={() => toast.success("Link copied to clipboard")}>Share</Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <MotivationCard index={1} />

          <Tabs defaultValue="discussions">
            <TabsList>
              <TabsTrigger value="discussions"><MessageSquare className="h-4 w-4 mr-1.5" aria-hidden />Discussion Forum</TabsTrigger>
              <TabsTrigger value="notes"><FileText className="h-4 w-4 mr-1.5" aria-hidden />Notes</TabsTrigger>
              <TabsTrigger value="sessions"><Calendar className="h-4 w-4 mr-1.5" aria-hidden />Upcoming Study Sessions</TabsTrigger>
            </TabsList>

            <TabsContent value="discussions" className="space-y-4 mt-4">
              <Card className="border-border/60">
                <CardContent className="p-4 space-y-3">
                  <form
                    onSubmit={(e) => { e.preventDefault(); if (!postQ.trim()) return; toast.success("Discussion posted!", { description: "Your buddies will see it shortly." }); setPostQ(""); }}
                    className="space-y-3"
                  >
                    <Label htmlFor="new-discussion" className="text-sm font-semibold">Start a Discussion</Label>
                    <Input id="new-discussion" value={postQ} onChange={(e) => setPostQ(e.target.value)} placeholder="Ask a question…" className="bg-secondary border-0" />
                    <Textarea placeholder="Add details so your buddies can help (optional)" className="bg-secondary border-0 min-h-20" aria-label="Discussion details" />
                    <div className="flex justify-end">
                      <Button type="submit" variant="hero" size="sm">Start Discussion</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {initialDiscussions.map((d) => (
                <Card key={d.id} className="border-border/60">
                  <CardContent className="p-5 space-y-3">
                    <div>
                      <h3 className="font-semibold text-base">{d.title}</h3>
                    </div>
                    <CommentNode c={d} />
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="notes" className="space-y-3 mt-4">
              <Card className="border-2 border-dashed border-border bg-secondary/30">
                <CardContent className="p-6 text-center">
                  <Upload className="h-6 w-6 mx-auto text-primary mb-2" aria-hidden />
                  <p className="font-medium">Drop notes here, or click to upload</p>
                  <p className="text-xs text-muted-foreground mt-1">PDF, DOCX, images — up to 20 MB</p>
                  <Button variant="hero" size="sm" className="mt-4" onClick={() => toast.success("Notes uploaded successfully!", { description: "Your group can now see them." })}>
                    Upload Notes
                  </Button>
                </CardContent>
              </Card>
              {notes.map((n, i) => (
                <Card key={i} className="border-border/60">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary-soft text-primary grid place-items-center"><FileText className="h-5 w-5" aria-hidden /></div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{n.name}</div>
                      <div className="text-xs text-muted-foreground">Shared by {n.by} · {n.size} · {n.date}</div>
                    </div>
                    <Button variant="ghost" size="sm" aria-label={`Download ${n.name}`} onClick={() => toast.success(`Downloading ${n.name}`)}><Download className="h-4 w-4" aria-hidden /></Button>
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
                <Button variant="soft" size="sm" onClick={() => toast.success("RSVP confirmed — see you Wednesday!")}>RSVP</Button>
              </CardContent></Card>
              <Card className="border-border/60"><CardContent className="p-5 flex justify-between items-center">
                <div>
                  <div className="text-xs text-primary font-medium">SUN · 3:00 PM</div>
                  <div className="font-semibold mt-1">Past paper review</div>
                  <div className="text-sm text-muted-foreground">Online — Zoom · 5 attending</div>
                </div>
                <Button variant="soft" size="sm" onClick={() => toast.success("RSVP confirmed for Sunday")}>RSVP</Button>
              </CardContent></Card>
              <Button variant="outline" className="w-full" onClick={() => toast.success("Session scheduled — invites sent.")}>+ Schedule new session</Button>
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
                    <Avatar className="h-9 w-9"><AvatarFallback className="bg-accent text-accent-foreground text-xs">{m.n.split(" ").map(x => x[0]).join("")}</AvatarFallback></Avatar>
                    {m.on && <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-success ring-2 ring-background" aria-label="Online" />}
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
