import type { InputHTMLAttributes } from 'react'
import {
  type Control,
  Controller,
  type FieldValues,
  type Path
} from 'react-hook-form'
import { Field, FieldDescription, FieldError, FieldLabel } from './ui/field'
import { Input } from './ui/input'

type FormFieldInputProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label?: string
  isRequired?: boolean
  description?: string
} & InputHTMLAttributes<HTMLInputElement>

export const FormFieldInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = 'text',
  isRequired = false,
  description
}: FormFieldInputProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState }) => (
      <Field data-invalid={fieldState.invalid}>
        {label && (
          <FieldLabel htmlFor={field.name}>
            {label} {isRequired && <span className="text-destructive">*</span>}
          </FieldLabel>
        )}
        <Input
          {...field}
          id={field.name}
          aria-invalid={fieldState.invalid}
          placeholder={placeholder}
          type={type}
          onChange={e => {
            if (type === 'number') {
              field.onChange(Number(e.target.value))
            } else {
              field.onChange(e)
            }
          }}
        />
        {description && <FieldDescription>{description}</FieldDescription>}
        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
      </Field>
    )}
  />
)
