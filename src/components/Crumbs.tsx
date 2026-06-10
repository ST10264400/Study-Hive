import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface Crumb {
  label: string;
  to?: string;
}

const Crumbs = ({ items }: { items: Crumb[] }) => (
  <nav aria-label="Breadcrumb" className="text-sm">
    <ol className="flex flex-wrap items-center gap-1 text-muted-foreground">
      <li>
        <Link to="/" className="inline-flex items-center gap-1 hover:text-primary transition-colors" aria-label="Home">
          <Home className="h-3.5 w-3.5" aria-hidden /> Home
        </Link>
      </li>
      {items.map((c, i) => (
        <li key={i} className="inline-flex items-center gap-1">
          <ChevronRight className="h-3.5 w-3.5" aria-hidden />
          {c.to && i < items.length - 1 ? (
            <Link to={c.to} className="hover:text-primary transition-colors">{c.label}</Link>
          ) : (
            <span aria-current="page" className="text-foreground font-medium">{c.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Crumbs;
