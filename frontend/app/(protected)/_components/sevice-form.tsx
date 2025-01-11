"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Plus, Minus } from "lucide-react";
import {
  ServicesSectionFormValues,
  servicesSectionSchema,
} from "@/schemas/service";
import { toast } from "sonner";
import { updateServiceSection } from "@/actions/service";

const ServicesSectionForm = ({ data }: { data: ServicesSectionFormValues }) => {
  const form = useForm<ServicesSectionFormValues>({
    resolver: zodResolver(servicesSectionSchema),
    defaultValues: {
      heading: data.heading,
      description: data.description,
      num_of_projects: data.num_of_projects,
      num_of_awards: data.num_of_awards,
      services: data.services,
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "services",
    control: form.control,
  });

  const onSubmit = async (data: ServicesSectionFormValues) => {
    const res = await updateServiceSection(data);
    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Services Section</CardTitle>
        <CardDescription>Update the services section content</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="heading"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Heading</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter section heading" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter section description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="num_of_projects"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Projects</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="num_of_awards"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Awards</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Services</h3>
                <Button
                  type="button"
                  onClick={() =>
                    append({
                      name: "",
                      case_study: {
                        title: "",
                        image: "",
                      },
                    })
                  }
                  className="flex items-center gap-2 text-white"
                >
                  <Plus className="w-4 h-4" />
                  Add Service
                </Button>
              </div>

              {fields.map((field, index) => (
                <Card key={field.id} className="p-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Service {index + 1}</h4>
                      {index > 0 && (
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="border"
                          onClick={() => remove(index)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <FormField
                      control={form.control}
                      name={`services.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter service name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-4">
                      <h5 className="font-medium">Case Study</h5>

                      <FormField
                        control={form.control}
                        name={`services.${index}.case_study.title`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter case study title"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`services.${index}.case_study.image`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Image URL</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter image URL" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>

          <CardFooter>
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="text-white"
            >
              {form.formState.isSubmitting ? "Saving..." : "Save"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default ServicesSectionForm;
