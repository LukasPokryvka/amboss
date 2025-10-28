import {
  type Control,
  Controller,
  type FieldValues,
  type Path
} from 'react-hook-form'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel
} from './ui/field'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select'

type FormFieldSelectProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label?: string
  description?: string
  placeholder?: string
  type?: React.HTMLInputTypeAttribute
  isRequired?: boolean
  options: { value: string; label: string }[]
  disabled?: boolean
}

export const FormFieldSelect = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  placeholder,
  isRequired = false,
  options,
  disabled = false
}: FormFieldSelectProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field, fieldState }) => (
      <Field orientation="responsive" data-invalid={fieldState.invalid}>
        <FieldContent>
          <FieldLabel htmlFor={field.name}>
            {label} {isRequired && <span className="text-destructive">*</span>}
          </FieldLabel>
          {description && <FieldDescription>{description}</FieldDescription>}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </FieldContent>
        <Select
          name={field.name}
          value={field.value}
          onValueChange={field.onChange}
          disabled={disabled}
        >
          <SelectTrigger
            id={field.name}
            aria-invalid={fieldState.invalid}
            className="min-w-[120px]"
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent position="item-aligned">
            {options.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
    )}
  />
)
