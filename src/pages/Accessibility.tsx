import Layout from "@/components/Layout";
import Crumbs from "@/components/Crumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Accessibility as A11yIcon, Keyboard, Eye, Type, MousePointer2, Mail } from "lucide-react";

const principles = [
  { icon: Eye, t: "Perceivable", d: "High colour contrast (AA), readable typography, descriptive alt text on every image, and clear visual hierarchy." },
  { icon: Keyboard, t: "Operable", d: "Full keyboard navigation, visible focus rings, skip-to-content link, and tap targets sized 44×44px or larger on mobile." },
  { icon: Type, t: "Understandable", d: "Plain student-friendly language, consistent navigation on every page, and form fields with clear labels and helper text." },
  { icon: MousePointer2, t: "Robust", d: "Semantic HTML landmarks (header, nav, main, footer), ARIA roles where appropriate, and tested with screen readers." },
];

const Accessibility = () => (
  <Layout>
    <section className="bg-gradient-hero border-b border-border">
      <div className="container py-10 space-y-4">
        <Crumbs items={[{ label: "Accessibility" }]} />
        <div className="flex items-center gap-3">
          <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
            <A11yIcon className="h-6 w-6" aria-hidden />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Accessibility statement</h1>
            <p className="text-muted-foreground mt-1 max-w-2xl">StudyHive is built so every student can learn together — regardless of ability, device, or assistive technology.</p>
          </div>
        </div>
      </div>
    </section>

    <div className="container py-10 space-y-8">
      <Card className="border-border/60">
        <CardContent className="p-6 space-y-3 text-sm text-muted-foreground">
          <p><span className="font-semibold text-foreground">Our commitment.</span> We design StudyHive to conform with the Web Content Accessibility Guidelines (WCAG) 2.0 Level AA. Accessibility is part of every design and code review, not an afterthought.</p>
          <p><span className="font-semibold text-foreground">Standards we follow.</span> WCAG 2.0 AA, WAI-ARIA 1.2 authoring practices, and platform conventions for iOS, Android, and desktop browsers.</p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-5">
        {principles.map((p) => (
          <Card key={p.t} className="border-border/60 hover:shadow-card transition-shadow">
            <CardContent className="p-6">
              <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center mb-3">
                <p.icon className="h-5 w-5" aria-hidden />
              </div>
              <h2 className="font-semibold text-lg mb-1">{p.t}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border/60">
        <CardContent className="p-6 space-y-2">
          <h2 className="font-semibold text-lg">What we've implemented</h2>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Skip-to-content link at the top of every page</li>
            <li>Semantic landmarks (header, nav, main, footer) and one h1 per page</li>
            <li>Visible focus rings on all interactive elements</li>
            <li>Form inputs paired with labels (visible or via aria-label)</li>
            <li>Alt text on all meaningful images; decorative icons marked aria-hidden</li>
            <li>Colour contrast meets WCAG AA in light and dark modes</li>
            <li>Responsive layouts from 320px up to large desktops</li>
            <li>Keyboard support throughout — no mouse required</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-border/60 bg-primary-soft/40">
        <CardContent className="p-6 flex items-start gap-3">
          <Mail className="h-5 w-5 text-primary mt-0.5" aria-hidden />
          <div>
            <h2 className="font-semibold">Found a barrier?</h2>
            <p className="text-sm text-muted-foreground">Email <a href="mailto:access@studyhive.edu" className="text-primary underline">access@studyhive.edu</a> and we'll respond within two working days.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  </Layout>
);

export default Accessibility;
