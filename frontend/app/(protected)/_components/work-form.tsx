"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { WorkSectionFormValues, workSectionSchema } from "@/schemas/work";
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
import { Plus, Minus, X } from "lucide-react";
import { updateWorkSection } from "@/actions/work";
import { toast } from "sonner";

const WorkSectionForm = ({ data }: { data: WorkSectionFormValues }) => {
  const form = useForm<WorkSectionFormValues>({
    resolver: zodResolver(workSectionSchema),
    defaultValues: {
      description: data.description,
      years_of_work: data.years_of_work,
      works: data.works,
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "works",
    control: form.control,
  });

  const onSubmit = async (data: WorkSectionFormValues) => {
    const res = await updateWorkSection(data);
    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Work Section</CardTitle>
        <CardDescription>
          Create or update the work section content
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter section description"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="years_of_work"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Years of Work</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="0" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Work Items</h3>
                <Button
                  type="button"
                  onClick={() =>
                    append({
                      title: "",
                      image: "",
                      tags: [""],
                    })
                  }
                  className="flex text-white items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Item
                </Button>
              </div>

              {fields.map((field, index) => (
                <Card key={field.id} className="p-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Work Item {index + 1}</h4>
                      {index > 0 && (
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          onClick={() => remove(index)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <FormField
                      control={form.control}
                      name={`works.${index}.title`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter work title" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`works.${index}.image`}
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

                    <div className="space-y-2">
                      <FormLabel>Tags</FormLabel>
                      <div className="flex flex-wrap gap-2">
                        {form
                          .watch(`works.${index}.tags`)
                          .map((_, tagIndex) => (
                            <div
                              key={tagIndex}
                              className="flex items-center gap-2"
                            >
                              <FormField
                                control={form.control}
                                name={`works.${index}.tags.${tagIndex}`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <div className="flex gap-2">
                                        <Input
                                          placeholder="Enter tag"
                                          {...field}
                                        />
                                        {tagIndex > 0 && (
                                          <Button
                                            type="button"
                                            variant="destructive"
                                            size="icon"
                                            onClick={() => {
                                              const currentTags =
                                                form.getValues(
                                                  `works.${index}.tags`
                                                );
                                              form.setValue(
                                                `works.${index}.tags`,
                                                currentTags.filter(
                                                  (_, i) => i !== tagIndex
                                                )
                                              );
                                            }}
                                          >
                                            <X className="w-4 h-4" />
                                          </Button>
                                        )}
                                      </div>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          ))}
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const currentTags = form.getValues(
                              `works.${index}.tags`
                            );
                            form.setValue(`works.${index}.tags`, [
                              ...currentTags,
                              "",
                            ]);
                          }}
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Tag
                        </Button>
                      </div>
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

export default WorkSectionForm;
