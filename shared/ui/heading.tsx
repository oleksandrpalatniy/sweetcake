import { cn } from "@/shared/lib/utils";

interface HeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export function Heading({
  title,
  description,
  className,
}: HeadingProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}