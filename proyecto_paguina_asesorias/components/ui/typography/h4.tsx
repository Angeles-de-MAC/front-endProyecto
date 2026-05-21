import * as React from "react";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@/lib/utils";

export interface H4Props extends React.ComponentPropsWithoutRef<"h4"> {
  render?: React.ReactElement;
}

const H4 = React.forwardRef<HTMLHeadingElement, H4Props>(
  ({ className, render, ...props }, ref) => {
    return useRender({
      render,
      ref,
      props: {
        className: cn(
          "scroll-m-20 text-xl font-semibold tracking-tight",
          className,
        ),
        ...props,
      },
      defaultTagName: "h4",
    });
  },
);
H4.displayName = "H4";

export { H4 };
