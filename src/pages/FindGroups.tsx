import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import Crumbs from "@/components/Crumbs";
import MotivationCard from "@/components/MotivationCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Users, MapPin, Activity } from "lucide-react";
import { groups, subjects, levels, meetings } from "@/data/groups";

const FindGroups = () => {
  const [q, setQ] = useState("");
  const [subject, setSubject] = useState("All subjects");
  const [level, setLevel] = useState("All levels");
  const [meeting, setMeeting] = useState("Any format");

  const filtered = useMemo(() => {
    return groups.filter((g) => {
      const matchQ = q === "" || (g.name + g.module + g.description + g.tags.join(" ")).toLowerCase().includes(q.toLowerCase());
      const matchS = subject === "All subjects" || g.subject === subject;
      const matchL = level === "All levels" || g.level === level;
      const matchM = meeting === "Any format" || g.meeting === meeting;
      return matchQ && matchS && matchL && matchM;
    });
  }, [q, subject, level, meeting]);

  const handleJoin = (name: string) => {
    toast.success(`Joined ${name}!`, { description: "You'll find it on your dashboard." });
  };

  return (
    <Layout>
      <div className="bg-gradient-hero border-b border-border">
        <div className="container py-10 space-y-4">
          <Crumbs items={[{ label: "Find Groups" }]} />
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Find your study group</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl text-base">
              Search by module, subject, or vibe. Join open groups instantly — your future buddies are one click away.
            </p>
          </div>

          {/* Prominent search */}
          <form
            onSubmit={(e) => { e.preventDefault(); toast.success(`Showing results for "${q || "all groups"}"`); }}
            className="mt-2"
            role="search"
            aria-label="Search study groups"
          >
            <Label htmlFor="group-search" className="sr-only">Search study groups</Label>
            <div className="relative bg-background rounded-2xl shadow-soft p-2 flex flex-col md:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" aria-hidden />
                <Input
                  id="group-search"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search by module, subject, or topic — e.g. 'HCI 6322' or 'exam prep'"
                  className="pl-12 h-14 text-base border-0 bg-secondary/60 focus-visible:ring-2"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="h-14 px-8">
                <Search className="h-5 w-5" aria-hidden />Search
              </Button>
            </div>

            <div className="mt-3 grid sm:grid-cols-3 gap-2">
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger aria-label="Subject" className="bg-background"><SelectValue /></SelectTrigger>
                <SelectContent>{subjects.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
              <Select value={level} onValueChange={setLevel}>
                <SelectTrigger aria-label="Year / level" className="bg-background"><SelectValue /></SelectTrigger>
                <SelectContent>{levels.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
              <Select value={meeting} onValueChange={setMeeting}>
                <SelectTrigger aria-label="Meeting format" className="bg-background"><SelectValue /></SelectTrigger>
                <SelectContent>{meetings.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </div>
          </form>
        </div>
      </div>

      <div className="container py-8 space-y-6">
        <MotivationCard index={0} />

        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{filtered.length}</span> groups found
          </p>
          <Button asChild variant="hero" size="sm"><Link to="/groups/create">+ Create New Group</Link></Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((g) => (
            <Card key={g.id} className="border-border/60 hover:shadow-card transition-all hover:-translate-y-0.5 flex flex-col">
              <CardContent className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge className="bg-primary-soft text-primary border-0">{g.module}</Badge>
                  <Badge variant="outline" className="text-xs">{g.subject}</Badge>
                </div>
                <h3 className="font-semibold text-lg leading-tight mb-1">{g.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{g.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {g.tags.slice(0, 3).map((t) => <span key={t} className="text-xs bg-secondary px-2 py-0.5 rounded-md text-muted-foreground">{t}</span>)}
                </div>
                <div className="grid grid-cols-3 text-xs text-muted-foreground border-t border-border pt-3 mb-4">
                  <span className="flex items-center gap-1"><Users className="h-3 w-3" aria-hidden />{g.members}</span>
                  <span className="flex items-center gap-1"><Activity className="h-3 w-3" aria-hidden />{g.activity}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" aria-hidden />{g.meeting}</span>
                </div>
                <div className="mt-auto flex gap-2">
                  <Button asChild variant="hero" size="sm" className="flex-1" onClick={() => handleJoin(g.name)}>
                    <Link to={`/groups/${g.id}`}>Join Group</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm"><Link to={`/groups/${g.id}`}>View</Link></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No groups match those filters yet — why not start one?</p>
            <Button asChild variant="hero" className="mt-4"><Link to="/groups/create">Create a group</Link></Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default FindGroups;
