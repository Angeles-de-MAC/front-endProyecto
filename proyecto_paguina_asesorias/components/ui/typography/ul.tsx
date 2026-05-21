import * as React from "react";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@/lib/utils";

export interface ListProps extends React.ComponentPropsWithoutRef<"ul"> {
  render?: React.ReactElement;
}

const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, render, ...props }, ref) => {
    return useRender({
      render,
      ref,
      props: {
        className: cn("my-6 ml-6 list-disc [&>li]:mt-2", className),
        ...props,
      },
      defaultTagName: "ul",
    });
  },
);
List.displayName = "List";

export { List };
