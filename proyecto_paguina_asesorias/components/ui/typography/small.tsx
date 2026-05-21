import * as React from "react"
import { useRender } from "@base-ui/react/use-render"

import { cn } from "@/lib/utils"

export interface SmallProps extends React.ComponentPropsWithoutRef<"small"> {
  render?: React.ReactElement
}

const Small = React.forwardRef<HTMLElement, SmallProps>(
  ({ className, render, ...props }, ref) => {
    return useRender({
      render,
      ref,
      props: {
        className: cn("text-sm leading-none font-medium", className),
        ...props,
      },
      defaultTagName: "small",
    })
  }
)
Small.displayName = "Small"

export { Small }
