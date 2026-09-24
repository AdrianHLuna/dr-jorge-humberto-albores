import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  isDark?: boolean;
}

export function Breadcrumbs({ items, isDark = false }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://drjorgealbores.com",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: item.href ? `https://drjorgealbores.com${item.href}` : undefined,
      })),
    ],
  };

  const baseTextColor = isDark ? "text-neutral-300" : "text-neutral-500";
  const hoverTextColor = isDark ? "hover:text-white" : "hover:text-[#653A57]";
  const activeTextColor = isDark ? "text-white font-medium" : "text-[#2B1D26] font-semibold";
  const separatorColor = isDark ? "text-neutral-500" : "text-neutral-400";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Migas de pan" className="py-2.5">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
          <li>
            <Link
              href="/"
              className={`inline-flex items-center gap-1 transition-colors ${baseTextColor} ${hoverTextColor}`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Inicio</span>
            </Link>
          </li>

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx} className="flex items-center gap-1.5">
                <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${separatorColor}`} />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className={`transition-colors ${baseTextColor} ${hoverTextColor}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={activeTextColor} aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
