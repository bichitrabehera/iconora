"use client";

import { useRef, useCallback, useState } from "react";
import { Play, Pause } from "lucide-react";
import type { IconData } from "@/lib/icon-data";
import type { AnimatedIconHandle } from "@iconora/icons";
import { AnimatedIcon } from "@/components/icons/AnimatedIcon";
import BackButton from "../shared/BackButton";

export function IconPreview({ icon }: { icon: IconData }) {
  const ref = useRef<AnimatedIconHandle>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = useCallback(() => {
    if (playing) {
      ref.current?.stopAnimation();
      setPlaying(false);
    } else {
      ref.current?.startAnimation();
      setPlaying(true);
    }
  }, [playing]);

  return (
    <div className="mb-12 flex flex-col items-center gap-6 text-center">
      <div className="flex w-full items-start justify-start">
        <BackButton />
      </div>
      <div className="border-border/60 relative flex size-28 items-center justify-center rounded-2xl border bg-gradient-to-b from-blue-500/[0.03] to-transparent transition-all duration-300 hover:border-blue-500/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
        <AnimatedIcon ref={ref} slug={icon.slug} size={44} />
      </div>
      <button
        onClick={toggle}
        className="border-border/60 text-muted-foreground hover:text-foreground hover:border-neutral-600 flex items-center gap-1.5 rounded-lg border px-4 py-2 text-xs transition-all duration-200"
        aria-label={playing ? "Pause animation" : "Play animation"}
      >
        {playing ? (
          <Pause className="size-3.5" />
        ) : (
          <Play className="size-3.5" />
        )}
        {playing ? "Pause" : "Play"}
      </button>
      <div>
        <h1 className="text-muted-foreground text-2xl font-semibold tracking-tight">
          {icon.name}
        </h1>
        <p className="text-muted-foreground mt-3 text-sm">
          {icon.tags.map((tag, index) => (
            <span key={tag}>
              <span className="underline decoration-blue-500/50 decoration-dashed underline-offset-4">
                {tag}
              </span>
              {index < icon.tags.length - 1 && (
                <span className="text-border mx-1.5">·</span>
              )}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
