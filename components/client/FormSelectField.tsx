import type { Control, FieldValues, Path } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

type FormInputSelectProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label?: string
  placeholder?: string
  description?: string
  isDisabled?: boolean
  isRequired?: boolean
  options: { label: string; value: string }[]
  defaultValue?: string
}

export const FormSelectField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder = "Vyberte",
  isDisabled,
  isRequired,
  options,
  defaultValue,
}: FormInputSelectProps<T>) => (
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
        <Select
          defaultValue={field.value || defaultValue}
          onValueChange={field.onChange}
        >
          <FormControl>
            <SelectTrigger className='w-full' disabled={isDisabled}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
)
