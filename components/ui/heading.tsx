import type { FilterUnionType } from "@/lib/utils"
import {
  Typography,
  type TypographyVariantType,
  type VariantPropsTypographyWithoutVariant,
} from "./typography"

type AllowedVariants = FilterUnionType<
  TypographyVariantType,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
>
type HTMLTypographyElement = HTMLHeadingElement

interface HeadingProps
  extends React.HTMLAttributes<HTMLTypographyElement>,
    VariantPropsTypographyWithoutVariant {
  variant: AllowedVariants
  as?: string
  ref?: React.Ref<HTMLTypographyElement>
}

const Heading = ({ ref, variant, ...props }: HeadingProps) => (
  <Typography ref={ref} variant={variant} {...props} />
)

Heading.displayName = "Heading"

export { Heading }
