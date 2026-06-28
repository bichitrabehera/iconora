"use client";

import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { motion, useAnimate } from "motion/react";
import type { AnimatedIconProps, AnimatedIconHandle } from "./types";
import type { AnimationOptions } from "motion/react";

export const DiscordIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    {
      size = 24,
      color = "currentColor",
      strokeWidth = 2,
      animateOnHover = true,
      autoPlay = false,
      loop = true,
      duration,
      className = "",
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();
    const controls = useRef<Array<ReturnType<typeof animate>>>([]);
    const isHovering = useRef(false);

    type AnimDef = {
      selector: string;
      keyframes: Record<string, number[]>;
      options: { duration: number; ease: string; repeat: number };
    };

    const start = useCallback(async () => {
      controls.current.forEach((c) => c.stop());
      controls.current = [];

      const anims: AnimDef[] = [
        {
          selector: ".dc-head",
          keyframes: { y: [0, -2, 0] },
          options: { duration: 1, ease: "easeInOut", repeat: Infinity },
        },
        {
          selector: ".dc-eyes",
          keyframes: { scale: [1, 1.3, 1] },
          options: { duration: 0.6, ease: "easeInOut", repeat: Infinity },
        },
      ];

      for (const anim of anims) {
        const opts = {
          ...anim.options,
          ...(duration ? { duration } : {}),
          ...(!loop ? { repeat: 0 } : {}),
        } as AnimationOptions;
        const ctrl = animate(anim.selector, anim.keyframes, opts);
        controls.current.push(ctrl);
      }
    }, [animate, loop, duration]);

    const stop = useCallback(async () => {
      controls.current.forEach((c) => c.stop());
      controls.current = [];
      animate(".dc-head", { y: 0 }, { duration: 0.3 });
      animate(".dc-eyes", { scale: 1 }, { duration: 0.3 });
    }, [animate]);

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    useEffect(() => {
      if (autoPlay) {
        start();
        return () => {
          stop();
        };
      }
    }, [autoPlay, start, stop]);

    return (
      <motion.svg
        ref={scope}
        onHoverStart={
          animateOnHover
            ? () => {
                isHovering.current = true;
                start();
              }
            : undefined
        }
        onHoverEnd={
          animateOnHover
            ? () => {
                isHovering.current = false;
                stop();
              }
            : undefined
        }
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <motion.g
          className="dc-head"
          style={{ originX: "12px", originY: "12px" }}
        >
          <path d="M8.5 17c0 0-1.5 1-3.5 1 0 0 .5-3.5 0-5C3.5 10 4 7.5 6 5c2-1.5 4-1.5 6-1.5s4 0 6 1.5c2 2.5 2.5 5 1 8-.5 1.5 0 5 0 5-2 0-3.5-1-3.5-1" />
          <path d="M5.5 13.5C7 15 9 16 12 16s5-1 6.5-2.5" />
        </motion.g>
        <motion.g
          className="dc-eyes"
          style={{ originX: "12px", originY: "12px" }}
        >
          <path d="M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
          <path d="M14 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
        </motion.g>
      </motion.svg>
    );
  },
);

DiscordIcon.displayName = "DiscordIcon";
