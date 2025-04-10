import { cn } from "@/lib/utils";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image"; // Importing Image from next/image

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  img,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none border-red-500",
        className,
      )}
      style={{
        backgroundColor: "linear-gradient(90deg, rgba(45,20,83,1) 35%, rgba(47,75,121,1) 54%)",
      }}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}

        {/* Title div */}
        <div className="mt-2 mb-2 font-inter text-xl font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>

        {/* Description div */}
        <div className="adaptive font-sans text-l font-inter text-neutral-600 dark:text-neutral-300 overflow-hidden text-ellipsis">
          {typeof description === "string" ? (
            description.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line.includes("linkedin.com") ? (
                  <div className="flex items-center gap-2">
                    <FaLinkedin className="text-blue-600 text-lg" />
                    <a
                      href={line.replace("LinkedIn: ", "")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {line.replace("LinkedIn: ", "")}
                    </a>
                  </div>
                ) : (
                  line
                )}
                <br />
              </React.Fragment>
            ))
          ) : (
            description
          )}
        </div>

        {/* Image div */}
        <div>
          {img && (
            <Image
              className="w-full h-60 object-cover rounded-lg border-0"
              src={img}
              alt="Bento Grid Image" // Added alt text
              width={600} // Specify width
              height={240} // Specify height
            />
          )}
        </div>
      </div>
    </div>
  );
};
