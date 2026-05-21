import * as React from "react";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@/lib/utils";

export interface LargeProps extends React.ComponentPropsWithoutRef<"div"> {
  render?: React.ReactElement;
}

const Large = React.forwardRef<HTMLDivElement, LargeProps>(
  ({ className, render, ...props }, ref) => {
    return useRender({
      render,
      ref,
      props: {
        className: cn("text-lg font-semibold", className),
        ...props,
      },
      defaultTagName: "div",
    });
  },
);
Large.displayName = "Large";

export { Large };
