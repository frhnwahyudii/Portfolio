import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink, Mail } from "lucide-react";
import { projects, getProjectById } from "@/data/projects";
import { SITE_METADATA, PERSONAL_INFO } from "@/lib/constants";
import { getLocalImageSize } from "@/lib/image-size";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/ui/social-icon";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) return {};

  const url = `${SITE_METADATA.url}/projects/${project.id}`;
  return {
    title: `${project.title} | Farhan Wahyudi`,
    description: project.shortDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.shortDescription,
      url,
      images: [{ url: `${SITE_METADATA.url}${project.thumbnail}` }],
    },
  };
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
      <span className="h-6 w-1 bg-primary rounded-full inline-block" />
      {children}
    </h2>
  );
}

function SectionShell({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        {children}
      </div>
    </section>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) notFound();

  // Natural sizes so screenshots render fully — no cropping or distortion.
  const thumbnailSize = getLocalImageSize(project.thumbnail);
  const galleryImages = project.images
    .map((image) => ({ image, size: getLocalImageSize(image) }))
    // The header already shows the thumbnail — don't repeat it in the gallery.
    .filter((entry) => entry.image !== project.thumbnail);

  return (
    <article className="pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          All projects
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="secondary">{project.category}</Badge>
            <Badge variant="outline">{project.status}</Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-primary font-medium max-w-3xl">
            {project.subtitle}
          </p>
          <p className="text-muted-foreground mt-5 max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>
        </header>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
          <Image
            src={project.thumbnail}
            alt={`${project.title} overview`}
            width={thumbnailSize.width}
            height={thumbnailSize.height}
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Overview */}
        <SectionShell>
          <SectionHeading>Overview</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            {project.fullDescription}
          </p>
        </SectionShell>
        {/* Problem & Solution */}
        <SectionShell>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <SectionHeading>Problem</SectionHeading>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div>
              <SectionHeading>Solution</SectionHeading>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </SectionShell>

        {/* The story */}
        <SectionShell>
          <SectionHeading>The Story</SectionHeading>
          <ol className="relative border-l border-border ml-2 space-y-8">
            {project.story.map((step, index) => (
              <li key={step.title} className="relative pl-8">
                <span className="absolute -left-[11px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </SectionShell>

        {/* My role */}
        <SectionShell>
          <SectionHeading>My Role</SectionHeading>
          <ul className="space-y-3">
            {project.myRole.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-muted-foreground leading-relaxed"
              >
                <ArrowUpRight className="h-4 w-4 mt-1 text-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </SectionShell>

        {/* Key features */}
        <SectionShell>
          <SectionHeading>Key Features</SectionHeading>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </SectionShell>
        {/* Architecture */}
        <SectionShell>
          <SectionHeading>Architecture & Approach</SectionHeading>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {project.architecture.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </SectionShell>

        {/* Tech stack */}
        <SectionShell>
          <SectionHeading>Tech Stack</SectionHeading>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </SectionShell>

        {/* Screenshots */}
        {galleryImages.length > 0 && (
          <SectionShell>
            <SectionHeading>Screenshots</SectionHeading>
            <p className="text-sm text-muted-foreground -mt-3 mb-6">
              Captures from the deployed application — hover to open the
              full-size image.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {galleryImages.map((entry, i) => {
                const { image, size } = entry;
                return (
                  <div
                    key={`${image}-${i}`}
                    className="group relative overflow-hidden rounded-xl border border-border bg-muted/40"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${i + 1}`}
                      width={size.width}
                      height={size.height}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      className="h-auto w-full"
                    />
                    <a
                      href={image}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} screenshot ${i + 1} full size`}
                      className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background/90 text-muted-foreground opacity-0 shadow-sm transition-opacity hover:text-foreground focus-visible:opacity-100 group-hover:opacity-100"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </SectionShell>
        )}

        {/* Challenges & decisions */}
        <div className="grid md:grid-cols-2 gap-6">
          <SectionShell>
            <SectionHeading>Challenges</SectionHeading>
            <div className="space-y-5">
              {project.challenges.map((challenge) => (
                <div key={challenge.title}>
                  <h3 className="font-semibold text-sm mb-1.5">
                    {challenge.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </SectionShell>
          <SectionShell>
            <SectionHeading>Technical Decisions</SectionHeading>
            <div className="space-y-5">
              {project.decisions.map((decision) => (
                <div key={decision.title}>
                  <h3 className="font-semibold text-sm mb-1.5">
                    {decision.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {decision.description}
                  </p>
                </div>
              ))}
            </div>
          </SectionShell>
        </div>
        {/* Actions */}
        <div className="mt-14 rounded-2xl border border-border bg-card p-8 flex flex-col items-center text-center gap-5">
          <h2 className="text-xl md:text-2xl font-bold">Want the full story?</h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            The code is on GitHub and I&apos;m happy to walk through the
            architecture, trade-offs, and what I&apos;d do differently.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Button>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2">
                  <SocialIcon icon="github" className="size-4" />
                  View Repository
                </Button>
              </a>
            )}
            <a href={`mailto:${PERSONAL_INFO.email}`}>
              <Button variant="outline" className="gap-2">
                <Mail className="h-4 w-4" />
                Ask me about it
              </Button>
            </a>
          </div>
        </div>

        {/* Other projects */}
        <nav
          aria-label="Other projects"
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {projects
            .filter((p) => p.id !== project.id)
            .map((other) => (
              <Link
                key={other.id}
                href={`/projects/${other.id}`}
                className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors"
              >
                <span>
                  <span className="block text-xs text-muted-foreground mb-1">
                    {other.category}
                  </span>
                  <span className="block font-semibold group-hover:text-primary transition-colors">
                    {other.title}
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary shrink-0 transition-colors" />
              </Link>
            ))}
        </nav>

        {/* Back to home */}
        <div className="mt-12 text-center">
          <Link href="/">
            <Button size="lg" className="gap-2 px-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <p className="mt-3 text-xs text-muted-foreground">
            Back to the landing page — hero, experience &amp; more projects
          </p>
        </div>
      </div>
    </article>
  );
}
