import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import Crumbs from "@/components/Crumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { subjects, levels } from "@/data/groups";
import { CheckCircle2 } from "lucide-react";

const CreateGroup = () => {
  const navigate = useNavigate();
  const [meeting, setMeeting] = useState("Hybrid");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <Layout>
        <div className="container max-w-xl py-20 text-center">
          <CheckCircle2 className="h-14 w-14 text-success mx-auto mb-4" aria-hidden />
          <h1 className="text-2xl font-bold">Your group is live! 🎉</h1>
          <p className="text-muted-foreground mt-2 mb-6">Invite a buddy or share the link to grow your circle.</p>
          <div className="flex justify-center gap-2">
            <Button variant="hero" onClick={() => navigate("/groups/cs201")}>Go to group</Button>
            <Button variant="outline" onClick={() => navigate("/dashboard")}>Back to dashboard</Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container max-w-3xl py-10 space-y-4">
        <Crumbs items={[{ label: "Find Groups", to: "/groups" }, { label: "Create Group" }]} />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Create a study group</h1>
          <p className="text-muted-foreground mt-2">Set the basics — you can always tweak things later.</p>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); toast.success("Group created successfully! 🎉", { description: "Invite your buddies to get started." }); setDone(true); }}
          className="mt-4 space-y-5"
        >
          <Card className="border-border/60">
            <CardContent className="p-6 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="title">Group name</Label>
                <Input id="title" placeholder="e.g. CS201 Algorithms Crew" required />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select defaultValue="Computer Science">
                    <SelectTrigger id="subject"><SelectValue /></SelectTrigger>
                    <SelectContent>{subjects.filter(s=>s!=="All subjects").map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="module">Module / course code</Label>
                  <Input id="module" placeholder="CS201" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="level">Year / level</Label>
                  <Select defaultValue="Year 2">
                    <SelectTrigger id="level"><SelectValue /></SelectTrigger>
                    <SelectContent>{levels.filter(s=>s!=="All levels").map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="size">Ideal group size</Label>
                  <Input id="size" type="number" defaultValue={10} min={2} max={50} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="desc">Description</Label>
                <Textarea id="desc" placeholder="What's your group about? When do you meet? Anything new members should know?" className="min-h-32" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60">
            <CardContent className="p-6 space-y-5">
              <div>
                <Label className="mb-3 block">Meeting style</Label>
                <RadioGroup value={meeting} onValueChange={setMeeting} className="grid sm:grid-cols-3 gap-3">
                  {["Online", "On campus", "Hybrid"].map((m) => (
                    <Label key={m} htmlFor={m} className={`flex items-center gap-2 border rounded-lg p-3 cursor-pointer transition-colors ${meeting === m ? "border-primary bg-primary-soft" : "border-border hover:bg-secondary"}`}>
                      <RadioGroupItem value={m} id={m} />
                      <span className="text-sm font-medium">{m}</span>
                    </Label>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div>
                  <p className="font-medium text-sm">Open to anyone</p>
                  <p className="text-xs text-muted-foreground">Students can join instantly. Turn off to require approval.</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input id="tags" placeholder="exam prep, problem sets, beginner-friendly" />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
            <Button type="submit" variant="hero">Create New Group</Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateGroup;
