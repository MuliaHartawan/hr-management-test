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
import { TCreateDepartmentValidation } from "../-validations/create-department-validation";
import { TUpdateDepartmentValidation } from "../-validations/update-department-validation";
import { Textarea } from "@/app/_components/ui/textarea";

type Props = {
  type: "create" | "update";
  form: UseFormReturn<
    TCreateDepartmentValidation | TUpdateDepartmentValidation
  >;
  onSubmit: (
    data: TCreateDepartmentValidation | TUpdateDepartmentValidation
  ) => void;
  defaultValues?: TUpdateDepartmentValidation;
};

const FormDepartment = ({ type, form, onSubmit, defaultValues }: Props) => {
  const handleSubmit = form.handleSubmit((data) => {
    onSubmit(data);
  });

  useEffect(() => {
    if (type === "update" && defaultValues) {
      form.setValue("description", defaultValues.description);
      form.setValue("name", defaultValues.name);
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
        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descriptions</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Descriptions"
                  className="resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormItem>
          <FormControl>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              Submit
            </Button>
          </FormControl>
        </FormItem>
      </form>
    </Form>
  );
};

export default FormDepartment;
