import * as React from "react";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@/lib/utils";

export interface H2Props extends React.ComponentPropsWithoutRef<"h2"> {
  render?: React.ReactElement;
}

const H2 = React.forwardRef<HTMLHeadingElement, H2Props>(
  ({ className, render, ...props }, ref) => {
    return useRender({
      render,
      ref,
      props: {
        className: cn(
          "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
          className,
        ),
        ...props,
      },
      defaultTagName: "h2",
    });
  },
);
H2.displayName = "H2";

export { H2 };
