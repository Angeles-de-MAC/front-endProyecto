import * as React from "react"
import { useRender } from "@base-ui/react/use-render"

import { cn } from "@/lib/utils"

export interface H3Props extends React.ComponentPropsWithoutRef<"h3"> {
  render?: React.ReactElement
}

const H3 = React.forwardRef<HTMLHeadingElement, H3Props>(
  ({ className, render, ...props }, ref) => {
    return useRender({
      render,
      ref,
      props: {
        className: cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight",
          className
        ),
        ...props,
      },
      defaultTagName: "h3",
    })
  }
)
H3.displayName = "H3"

export { H3 }
