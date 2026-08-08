import { PERSONAL_INFO, SOCIAL_LINKS, NAV_ITEMS } from "@/lib/constants";

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
              Information Systems graduate passionate about creating innovative web solutions,
              integrating AI, and contributing to technological advancement.
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
                    href={item.href}
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
                  aria-label={link.name}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {link.icon === "mail" && (
                      <>
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </>
                    )}
                    {(link.icon === "github" || link.icon === "globe") && (
                      <circle cx="12" cy="12" r="10" />
                    )}
                    {(link.icon === "linkedin" || link.icon === "external-link") && (
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    )}
                    {link.icon === "instagram" && (
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    )}
                  </svg>
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
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}