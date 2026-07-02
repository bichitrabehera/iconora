"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { useAtom } from "jotai";
import { motion } from "motion/react";
import type { IconData } from "@/lib/icon-data";
import { AnimatedIcon } from "@/components/icons/AnimatedIcon";
import { brandModeAtom } from "@/components/brand-colors-toggle";
import { getBrandColor } from "@/lib/brand-colors";

export function IconCard({ icon }: { icon: IconData }) {
  const [brandMode] = useAtom(brandModeAtom);
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const brandColor = brandMode ? getBrandColor(icon.slug) : undefined;
  const showBrand = brandMode && (hovered || tapped) && brandColor;

  const flashBrand = useCallback(() => {
    setTapped(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setTapped(false), 2000);
  }, []);

  return (
    <div className="relative">
      <Link
        href={`/icon/${icon.slug}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setTapped(false);
        }}
        className="border-border/60 group relative flex flex-col items-center justify-center gap-2.5 rounded-xl border p-5 transition-all duration-300 hover:scale-[1.03]"
      >
        <AnimatedIcon
          slug={icon.slug}
          size={36}
          color={showBrand ? brandColor : "currentColor"}
        />
        <span className="text-muted-foreground group-hover:text-foreground text-center text-xs transition-colors duration-300">
          {icon.name}
        </span>
      </Link>
    </div>
  );
}
