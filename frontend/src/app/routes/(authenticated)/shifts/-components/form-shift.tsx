import { UseFormReturn } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { useEffect } from "react";
import { TCreateShiftValidation } from "../-validations/create-shift-validation";
import { TUpdateShiftValidation } from "../-validations/update-shift-validation";

type Props = {
  type: "create" | "update";
  form: UseFormReturn<TCreateShiftValidation | TUpdateShiftValidation>;
  onSubmit: (data: TCreateShiftValidation | TUpdateShiftValidation) => void;
  defaultValues?: TUpdateShiftValidation;
};

const FormShift = ({ type, form, onSubmit, defaultValues }: Props) => {
  const handleSubmit = form.handleSubmit((data) => {
    const parsedData = {
      ...data,
      tolerance_minutes: Number(data.tolerance_minutes),
    };

    onSubmit(parsedData);
  });

  useEffect(() => {
    if (type === "update" && defaultValues) {
      form.setValue("name", defaultValues.name);
      form.setValue("start_time", defaultValues.start_time);
      form.setValue("end_time", defaultValues.end_time);
      form.setValue("tolerance_minutes", defaultValues.tolerance_minutes);
    }
  }, [defaultValues]);

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 mx-auto w-full max-w-lg"
      >
        <FormField
          name="name"
          control={form.control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-x-5">
          <FormField
            name="start_time"
            control={form.control}
            rules={{
              required: true,
              pattern: {
                value: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
                message: "Invalid time format (HH:mm required)",
              },
            }}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Start Time</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Start Time" type="time" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="end_time"
            control={form.control}
            rules={{
              required: true,
              pattern: {
                value: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
                message: "Invalid time format (HH:mm required)",
              },
            }}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>End Time</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="End Time" type="time" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="tolerance_minutes"
          control={form.control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tolerance Minutes</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Tolerance Minutes"
                  type="number"
                  onChange={(e) => {
                    field.onChange(e.target.valueAsNumber);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormItem>
          <FormControl>
            <Button type="submit">Submit</Button>
          </FormControl>
        </FormItem>
      </form>
    </Form>
  );
};

export default FormShift;
