"use client"

import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-balance font-extrabold text-4xl tracking-tight",
      h2: "scroll-m-20 pb-2 font-semibold text-3xl tracking-tight first:mt-0",
      h3: "scroll-m-20 font-semibold text-2xl tracking-tight",
      h4: "scroll-m-20 font-semibold text-xl tracking-tight",
      h5: "scroll-m-20 font-semibold text-lg tracking-tight",
      h6: "scroll-m-20 font-semibold text-base tracking-tight",
      p: "leading-7",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      ul: "my-6 ml-6 list-disc [&>li]:mt-2",
      inlineCode:
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm",
      lead: "text-muted-foreground text-xl",
      largeText: "font-semibold text-lg",
      smallText: "font-medium text-sm leading-none",
      mutedText: "text-muted-foreground text-sm",
    },
  },
  defaultVariants: {
    variant: "p",
  },
})

type VariantPropType = VariantProps<typeof typographyVariants>

type TypographyVariantType = NonNullable<
  VariantProps<typeof typographyVariants>["variant"]
>

interface VariantPropsTypographyWithoutVariant
  extends Omit<VariantProps<typeof typographyVariants>, "variant"> {
  asChild?: boolean
}

const variantElementMap: Record<
  NonNullable<VariantPropType["variant"]>,
  string
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  blockquote: "blockquote",
  inlineCode: "code",
  largeText: "div",
  smallText: "small",
  lead: "p",
  mutedText: "p",
  ul: "ul",
}

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean
  as?: string
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, asChild, ...props }, ref) => {
    const Comp = asChild
      ? Slot
      : (as ?? (variant ? variantElementMap[variant] : undefined) ?? "div")
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Typography.displayName = "Typography"

export type { VariantPropsTypographyWithoutVariant, TypographyVariantType }
export { Typography, typographyVariants }
