import type { FilterUnionType } from "@/lib/utils"
import {
  Typography,
  type TypographyVariantType,
  type VariantPropsTypographyWithoutVariant,
} from "./typography"

// Specify the variants you want to allow (linting error will be thrown when using exported component with a variant (1) not specified here or (2) not within TypographyVariant)
type AllowedVariants = FilterUnionType<
  TypographyVariantType,
  "p" | "lead" | "largeText" | "mutedText" | "smallText"
>
type HTMLTypographyElement = HTMLParagraphElement

interface TextProps
  extends React.HTMLAttributes<HTMLTypographyElement>,
    VariantPropsTypographyWithoutVariant {
  variant?: AllowedVariants
  as?: string
  ref?: React.Ref<HTMLTypographyElement>
  dataIntercomTarget?: string
}

const Text = ({ ref, variant = "p", ...props }: TextProps) => (
  <Typography ref={ref} variant={variant} {...props} />
)

Text.displayName = "Text"

export { Text }
