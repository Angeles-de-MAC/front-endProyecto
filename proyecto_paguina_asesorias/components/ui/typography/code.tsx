import * as React from "react"
import { useRender } from "@base-ui/react/use-render"

import { cn } from "@/lib/utils"

export interface InlineCodeProps
  extends React.ComponentPropsWithoutRef<"code"> {
  render?: React.ReactElement
}

const InlineCode = React.forwardRef<HTMLElement, InlineCodeProps>(
  ({ className, render, ...props }, ref) => {
    return useRender({
      render,
      ref,
      props: {
        className: cn(
          "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
          className
        ),
        ...props,
      },
      defaultTagName: "code",
    })
  }
)
InlineCode.displayName = "InlineCode"

export { InlineCode }
