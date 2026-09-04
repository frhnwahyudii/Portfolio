import { PERSONAL_INFO, SOCIAL_LINKS, NAV_ITEMS } from "@/lib/constants";
import { SocialIcon } from "@/components/ui/social-icon";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">Farhan</span>{" "}
              <span className="text-muted-foreground">Wahyudi</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Junior Full-Stack Developer building practical web applications
              with Laravel, PHP, JavaScript, and MySQL — with system analysis,
              GIS, and AI-assisted workflows.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={`/${item.href}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3 mb-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-background text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                  aria-label={`${link.name} — ${link.handle}`}
                >
                  <SocialIcon icon={link.icon} className="size-4" />
                  {link.name}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Email:{" "}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-foreground transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
