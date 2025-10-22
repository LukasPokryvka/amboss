/**
 * Sources:
 * - typography component: https://github.com/shadcn-ui/ui/pull/363#issuecomment-1659259897
 * - heading.tsx & text.tsx wrappers: https://github.com/shadcn-ui/ui/pull/363#issuecomment-1868196508
 */

import type React from 'react'
import type { FilterUnionType } from '@/lib/utils'
import {
  Typography,
  type TypographyVariantType,
  type VariantPropsTypographyWithoutVariant
} from './typography'

// Specify the variants you want to allow (linting error will be thrown when using exported component with a variant (1) not specified here or (2) not within TypographyVariant)
type AllowedVariants = FilterUnionType<
  TypographyVariantType,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
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

Heading.displayName = 'Heading'

export { Heading }
