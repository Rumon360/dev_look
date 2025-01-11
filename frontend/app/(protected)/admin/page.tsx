import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

function AdminPage() {
  const sections = [
    {
      id: 1,
      title: "Work Section",
      description:
        "Showcase your past work or portfolio. Add images, descriptions, and links.",
      link: "/work",
    },
    {
      id: 2,
      title: "Service Section",
      description:
        "Edit the list of services or products you offer, including descriptions and icons.",
      link: "/service",
    },
  ];

  return (
    <div className="py-16 px-container">
      <div>
        <h1 className="scroll-m-20 max-w-3xl text-4xl font-bold tracking-tight lg:text-5xl">
          Welcome to Your Content Management System (CMS)
        </h1>
        <p className="mt-10 text-2xl font-semibold tracking-tight max-w-2xl">
          Here, you can edit the contents of your landing page. Click on the
          cards below href manage each section.
        </p>
      </div>
      {/* Sections List */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section) => (
          <Card key={section.id}>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {section.title}
              </CardTitle>
              <CardDescription className="text-base text-gray-600">
                {section.description}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link
                className="px-4 py-1 rounded-lg bg-black text-white shadow"
                href={"/admin/" + section.link}
              >
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
