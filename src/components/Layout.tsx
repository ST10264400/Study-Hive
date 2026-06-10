import { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Search, LayoutDashboard, Users, User, HelpCircle, MessageCircle, Home, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/groups", label: "Find Groups", icon: Search },
  { to: "/groups/create", label: "Create Group", icon: Plus },
  { to: "/messages", label: "Messages", icon: MessageCircle },
  { to: "/profile", label: "Profile", icon: User },
  { to: "/help", label: "Help", icon: HelpCircle },
];

const Layout = ({ children, hideNavCta = false }: { children: ReactNode; hideNavCta?: boolean }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-3 focus:py-2 focus:rounded-md">Skip to main content</a>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/90 border-b border-border">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg group" aria-label="StudyHive home">
            <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform group-hover:scale-105">
              <GraduationCap className="h-5 w-5" aria-hidden />
            </span>
            <span className="tracking-tight">StudyHive</span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-all duration-150",
                    "text-muted-foreground hover:text-primary hover:bg-primary-soft hover:-translate-y-0.5",
                    isActive && "text-primary bg-primary-soft hover:bg-primary-soft"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {!hideNavCta && (
            <div className="flex items-center gap-2">
              <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
                <Link to="/auth">Log in</Link>
              </Button>
              <Button asChild size="sm" variant="hero">
                <Link to="/auth?mode=signup">Sign up free</Link>
              </Button>
            </div>
          )}
        </div>
        {/* Mobile / tablet nav */}
        <nav aria-label="Mobile" className="lg:hidden border-t border-border bg-background/95 overflow-x-auto">
          <div className="container flex gap-1 py-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors",
                    "text-muted-foreground hover:text-primary hover:bg-primary-soft",
                    isActive && "text-primary bg-primary-soft"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main id="main" className="flex-1">{children}</main>

      <footer className="border-t border-border bg-secondary/40 mt-12">
        <div className="container py-10 grid gap-8 md:grid-cols-4 text-sm">
          <div>
            <div className="flex items-center gap-2 font-bold mb-3">
              <span className="grid place-items-center h-7 w-7 rounded-lg bg-gradient-primary text-primary-foreground">
                <GraduationCap className="h-4 w-4" aria-hidden />
              </span>
              StudyHive
            </div>
            <p className="text-muted-foreground">A calmer way to find study partners and grow together.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/groups" className="hover:text-primary">Find groups</Link></li>
              <li><Link to="/groups/create" className="hover:text-primary">Create a group</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/help" className="hover:text-primary">Help centre</Link></li>
              <li><Link to="/accessibility" className="hover:text-primary">Accessibility statement</Link></li>
              <li><Link to="/help" className="hover:text-primary">Community guidelines</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">University</h3>
            <p className="text-muted-foreground">Built as an HCI/UX prototype for academic collaboration.</p>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="container py-4 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
            <span>© {new Date().getFullYear()} StudyHive — Prototype</span>
            <span>Designed with WCAG 2.0 in mind</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
