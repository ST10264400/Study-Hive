import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { LifeBuoy, Mail, MessageCircle, Search, BookOpen, ShieldCheck, Sparkles } from "lucide-react";

const faqs = [
  { q: "How do I join a study group?", a: "Head to Find Groups, use the search and filters to find one that fits your subject and level, then click Join. Open groups welcome you instantly; private groups will quickly review your request." },
  { q: "Can I be in more than one group?", a: "Absolutely — most students are in 2 to 4 groups. Your dashboard keeps everything organised so nothing gets lost." },
  { q: "Who can see the notes I upload?", a: "Notes are only visible to members of the specific group you upload them in. They're never shared publicly." },
  { q: "How do I create my own group?", a: "Click Create on the top nav, give it a name, subject, and meeting style, and you're set. You can invite buddies right after." },
  { q: "Is StudyHive free?", a: "Yes — StudyHive is free for students. Always." },
  { q: "Is the platform accessible?", a: "We design with WCAG 2.0 in mind: high colour contrast, keyboard navigation, descriptive labels, and screen-reader-friendly structure." },
];

const Help = () => {
  return (
    <Layout>
      <section className="bg-gradient-hero border-b border-border">
        <div className="container py-12 text-center max-w-2xl mx-auto">
          <div className="inline-grid place-items-center h-12 w-12 rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow mx-auto mb-4">
            <LifeBuoy className="h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">How can we help?</h1>
          <p className="text-muted-foreground mt-2">Search FAQs, browse guides, or message us — we usually reply within a day.</p>
          <div className="relative mt-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search help articles…" className="pl-9 bg-background border-0 shadow-soft h-12" />
          </div>
        </div>
      </section>

      <div className="container py-12 grid lg:grid-cols-3 gap-6">
        {[
          { icon: BookOpen, t: "Getting started", d: "Set up your profile and find your first group." },
          { icon: Sparkles, t: "Group life", d: "Notes, sessions, discussions — make the most of your group." },
          { icon: ShieldCheck, t: "Safety & privacy", d: "How we keep your data and conversations safe." },
        ].map((c) => (
          <Card key={c.t} className="border-border/60 hover:shadow-card transition-shadow">
            <CardContent className="p-6">
              <div className="h-10 w-10 rounded-lg bg-primary-soft text-primary grid place-items-center mb-3"><c.icon className="h-5 w-5" /></div>
              <h2 className="font-semibold mb-1">{c.t}</h2>
              <p className="text-sm text-muted-foreground">{c.d}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="container pb-16 grid lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="bg-card rounded-xl border border-border px-4">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f${i}`} className="border-border/60">
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <aside>
          <Card className="border-border/60">
            <CardContent className="p-6">
              <h2 className="font-semibold flex items-center gap-2 mb-1"><MessageCircle className="h-4 w-4 text-primary" />Still need help?</h2>
              <p className="text-sm text-muted-foreground mb-4">Drop us a message and our student support team will get back to you.</p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <div className="space-y-1.5"><Label htmlFor="topic">Topic</Label><Input id="topic" placeholder="e.g. Trouble joining a group" /></div>
                <div className="space-y-1.5"><Label htmlFor="msg">Message</Label><Textarea id="msg" placeholder="Tell us what's going on…" className="min-h-28" /></div>
                <Button variant="hero" className="w-full"><Mail className="h-4 w-4" />Send message</Button>
              </form>
            </CardContent>
          </Card>
        </aside>
      </div>
    </Layout>
  );
};

export default Help;
