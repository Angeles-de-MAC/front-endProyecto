import * as React from "react";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@/lib/utils";

export interface PProps extends React.ComponentPropsWithoutRef<"p"> {
  render?: React.ReactElement;
}

const P = React.forwardRef<HTMLParagraphElement, PProps>(
  ({ className, render, ...props }, ref) => {
    return useRender({
      render,
      ref,
      props: {
        className: cn("leading-7 [&:not(:first-child)]:mt-6", className),
        ...props,
      },
      defaultTagName: "p",
    });
  },
);
P.displayName = "P";

export interface LeadProps extends React.ComponentPropsWithoutRef<"p"> {
  render?: React.ReactElement;
}

const Lead = React.forwardRef<HTMLParagraphElement, LeadProps>(
  ({ className, render, ...props }, ref) => {
    return useRender({
      render,
      ref,
      props: {
        className: cn("text-xl text-muted-foreground", className),
        ...props,
      },
      defaultTagName: "p",
    });
  },
);
Lead.displayName = "Lead";

export interface MutedProps extends React.ComponentPropsWithoutRef<"p"> {
  render?: React.ReactElement;
}

const Muted = React.forwardRef<HTMLParagraphElement, MutedProps>(
  ({ className, render, ...props }, ref) => {
    return useRender({
      render,
      ref,
      props: {
        className: cn("text-sm text-muted-foreground", className),
        ...props,
      },
      defaultTagName: "p",
    });
  },
);
Muted.displayName = "Muted";

export { P, Lead, Muted };
