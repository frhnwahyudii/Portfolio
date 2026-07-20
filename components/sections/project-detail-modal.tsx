"use client";

import { X, Check, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/types";

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto pt-16 pb-8 px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm -z-10" />

      {/* Modal content */}
      <div className="relative w-full max-w-3xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-colors"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header image */}
        <div className="aspect-video relative overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <Badge variant="secondary" className="mb-2">
              {project.category}
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.highlights.map((h) => (
                <div
                  key={h.title}
                  className="bg-primary/5 border border-primary/10 rounded-xl p-4"
                >
                  <h4 className="font-semibold text-sm mb-2">{h.title}</h4>
                  <p className="text-sm text-muted-foreground">{h.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Architecture */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Architecture & Concepts</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.architecture.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Screenshots gallery */}
          {project.images.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Screenshots</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden border border-border"
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-32 object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </Button>
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2">
                  <ExternalLink className="size-4" />
                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}