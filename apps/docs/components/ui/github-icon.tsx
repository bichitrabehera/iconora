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

export const GitHubIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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
          selector: ".gh-body",
          keyframes: { y: [0, -2, 0] },
          options: { duration: 1, ease: "easeInOut", repeat: Infinity },
        },
        {
          selector: ".gh-arm",
          keyframes: { rotate: [0, 15, 0, -15, 0] },
          options: { duration: 1.5, ease: "easeInOut", repeat: Infinity },
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
      animate(".gh-body", { y: 0 }, { duration: 0.3 });
      animate(".gh-arm", { rotate: 0 }, { duration: 0.3 });
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
        <motion.path
          className="gh-body"
          d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
        />
        <motion.path
          className="gh-arm"
          d="M9 18c-4.51 2-5-2-7-2"
          style={{ originX: "9px", originY: "17px" }}
        />
      </motion.svg>
    );
  },
);

GitHubIcon.displayName = "GitHubIcon";
