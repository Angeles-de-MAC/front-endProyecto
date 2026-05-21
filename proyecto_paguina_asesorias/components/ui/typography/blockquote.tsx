import * as React from "react";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@/lib/utils";

export interface BlockquoteProps extends React.ComponentPropsWithoutRef<"blockquote"> {
  render?: React.ReactElement;
}

const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, render, ...props }, ref) => {
    return useRender({
      render,
      ref,
      props: {
        className: cn("mt-6 border-l-2 pl-6 italic", className),
        ...props,
      },
      defaultTagName: "blockquote",
    });
  },
);
Blockquote.displayName = "Blockquote";

export { Blockquote };
