export function Spinner({ size = "md" }) {
    const sizes: { [key: string]: string } = {
      sm: "w-4 h-4 border-2",
      md: "w-6 h-6 border-4",
      lg: "w-8 h-8 border-4",
    };
  
    return (
      <div
        className={`${sizes[size]} animate-spin inline-block size-8 border-[2px] border-current border-t-transparent text-white rounded-full dark:text-white`}
      />
    );
  }
  