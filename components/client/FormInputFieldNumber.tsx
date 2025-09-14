import type { Control, FieldValues, Path } from "react-hook-form"
import { cn } from "@/lib/utils"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"

type FormInputFieldNumberProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label?: string
  placeholder?: string
  description?: string
  isDisabled?: boolean
  isRequired?: boolean
  className?: string
}

export const FormInputFieldNumber = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  description,
  isDisabled = false,
  isRequired = false,
  className,
}: FormInputFieldNumberProps<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className='w-full'>
        {label && (
          <FormLabel>
            {label}
            {isRequired && <span className='text-red-500'>*</span>}
            {!isRequired && (
              <span className='text-muted-foreground'>- optional</span>
            )}
          </FormLabel>
        )}
        <FormControl>
          <Input
            placeholder={placeholder}
            {...field}
            className={cn("w-full", className)}
            disabled={isDisabled}
            type='number'
            onChange={(e) => field.onChange(Number(e.target.value))}
          />
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    )}
  />
)
