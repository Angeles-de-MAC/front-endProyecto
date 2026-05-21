import * as React from "react";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@/lib/utils";

export interface H1Props extends React.ComponentPropsWithoutRef<"h1"> {
  render?: React.ReactElement;
}

const H1 = React.forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, render, ...props }, ref) => {
    return useRender({
      render,
      ref,
      props: {
        className: cn(
          "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
          className,
        ),
        ...props,
      },
      defaultTagName: "h1",
    });
  },
);
H1.displayName = "H1";

export { H1 };
