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

type FormInputFieldProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label?: string
  placeholder?: string
  description?: string
  type?: "text" | "email" | "password" | "number"
  isDisabled?: boolean
  isRequired?: boolean
  className?: string
}

export const FormInputField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  description,
  type = "text",
  isDisabled = false,
  isRequired = false,
  className,
}: FormInputFieldProps<T>) => (
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
            type={type}
          />
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    )}
  />
)
