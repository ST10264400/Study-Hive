import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const buddies = [
  { id: "maya", n: "Maya Chen", c: "CS, Year 2", on: true, last: "See you Wednesday at 5!", time: "2m" },
  { id: "jordan", n: "Jordan Lee", c: "Psychology, Year 1", on: true, last: "Sharing my flashcards now ✨", time: "1h" },
  { id: "sam", n: "Sam Patel", c: "Economics, Year 2", on: false, last: "Library at 3pm Sunday?", time: "Yesterday" },
  { id: "riya", n: "Riya Singh", c: "Design, Year 2", on: true, last: "Loved your wireframes!", time: "Yesterday" },
  { id: "ben", n: "Ben Adams", c: "Engineering, Year 1", on: false, last: "Thanks for the notes!", time: "Mon" },
];

const initialMessages = [
  { from: "them", text: "Hey! Are you joining the algorithms session on Wednesday?", time: "10:02" },
  { from: "me", text: "Yes definitely. Want to meet beforehand to compare notes?", time: "10:04" },
  { from: "them", text: "Perfect 🙌 4:30 in the library?", time: "10:05" },
  { from: "me", text: "Done. I'll bring the practice problems.", time: "10:06" },
  { from: "them", text: "See you Wednesday at 5!", time: "10:08" },
];

const Messages = () => {
  const [active, setActive] = useState(buddies[0]);
  const [text, setText] = useState("");
  const [msgs, setMsgs] = useState(initialMessages);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    setMsgs([...msgs, { from: "me", text, time: "now" }]);
    setText("");
  };

  return (
    <Layout>
      <div className="container py-6">
        <h1 className="text-2xl font-bold mb-1">Messages</h1>
        <p className="text-sm text-muted-foreground mb-5">Stay in touch with your study buddies.</p>

        <Card className="border-border/60 overflow-hidden">
          <div className="grid md:grid-cols-[280px_1fr] h-[600px]">
            {/* Sidebar */}
            <aside className="border-r border-border bg-secondary/30 flex flex-col">
              <div className="p-3 border-b border-border">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search buddies" className="pl-9 bg-background border-0" />
                </div>
              </div>
              <div className="overflow-y-auto flex-1">
                {buddies.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setActive(b)}
                    className={cn(
                      "w-full text-left p-3 flex gap-3 items-center hover:bg-background transition-colors border-b border-border/50",
                      active.id === b.id && "bg-background"
                    )}
                  >
                    <div className="relative">
                      <Avatar className="h-10 w-10"><AvatarFallback className="bg-accent text-accent-foreground text-xs">{b.n.split(" ").map(x=>x[0]).join("")}</AvatarFallback></Avatar>
                      {b.on && <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-success ring-2 ring-secondary" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <span className="font-medium text-sm truncate">{b.n}</span>
                        <span className="text-[10px] text-muted-foreground">{b.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{b.last}</p>
                    </div>
                  </button>
                ))}
              </div>
            </aside>

            {/* Chat */}
            <section className="flex flex-col">
              <header className="p-4 border-b border-border flex items-center gap-3">
                <Avatar className="h-9 w-9"><AvatarFallback className="bg-accent text-accent-foreground text-xs">{active.n.split(" ").map(x=>x[0]).join("")}</AvatarFallback></Avatar>
                <div>
                  <div className="font-semibold text-sm">{active.n}</div>
                  <div className="text-xs text-muted-foreground">{active.on ? "Online" : "Offline"} · {active.c}</div>
                </div>
              </header>
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-secondary/20">
                {msgs.map((m, i) => (
                  <div key={i} className={cn("flex", m.from === "me" ? "justify-end" : "justify-start")}>
                    <div className={cn(
                      "max-w-[75%] rounded-2xl px-4 py-2 text-sm",
                      m.from === "me" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-background border border-border rounded-bl-sm"
                    )}>
                      {m.text}
                      <div className={cn("text-[10px] mt-0.5", m.from === "me" ? "text-primary-foreground/70" : "text-muted-foreground")}>{m.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={send} className="p-3 border-t border-border flex gap-2">
                <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a friendly message…" className="bg-secondary border-0" />
                <Button type="submit" variant="hero" size="icon"><Send className="h-4 w-4" /></Button>
              </form>
            </section>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Messages;
