import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-ring">
      {/* Overlay link → case study page */}
      <Link
        href={`/projects/${project.id}`}
        aria-label={`Read the ${project.title} case study`}
        className="absolute inset-0 z-10 focus-visible:outline-none"
      >
        <span className="sr-only">Read case study</span>
      </Link>

      {/* Card content (clicks pass through to the overlay link) */}
      <div className="pointer-events-none">
        {/* Thumbnail */}
        <div className="relative overflow-hidden aspect-video">
          <Image
            src={project.thumbnail}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <Badge
            className="absolute top-3 left-3"
            variant="secondary"
          >
            {project.category}
          </Badge>

          {/* Live demo link */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Open ${project.title} live demo`}
              className="pointer-events-auto absolute top-3 right-3 z-20 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-primary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Live Demo
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>

          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            Read case study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

