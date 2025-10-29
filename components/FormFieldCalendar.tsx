import { ChevronDownIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import {
  type Control,
  Controller,
  type FieldValues,
  type Path
} from 'react-hook-form'
import { Button } from './ui/button'
import { Calendar } from './ui/calendar'
import { Field, FieldDescription, FieldError, FieldLabel } from './ui/field'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

type FormFieldCalendarProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label?: string
  isRequired?: boolean
  description?: string
  disabled?: boolean
}

export const FormFieldCalendar = <T extends FieldValues>({
  control,
  name,
  label,
  isRequired = false,
  description,
  disabled = false
}: FormFieldCalendarProps<T>) => {
  const [open, setOpen] = useState(false)
  const t = useTranslations('form.calendar')

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          {label && (
            <FieldLabel htmlFor={field.name}>
              {label}{' '}
              {isRequired && <span className="text-destructive">*</span>}
            </FieldLabel>
          )}
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date"
                className="w-48 justify-between font-normal"
                disabled={disabled}
              >
                {field.value
                  ? field.value.toLocaleDateString()
                  : t('select_date')}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={field.value}
                captionLayout="dropdown"
                onSelect={date => {
                  field.onChange(date)
                  setOpen(false)
                }}
              />
            </PopoverContent>
          </Popover>
          {description && <FieldDescription>{description}</FieldDescription>}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}
