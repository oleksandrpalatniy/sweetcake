type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
  };
  
  export default function Button({
    children,
    onClick,
    variant = "primary",
  }: ButtonProps) {
    const styles =
      variant === "primary"
        ? "bg-amber-500 hover:bg-amber-600 text-white"
        : "bg-white border border-amber-500 text-amber-600 hover:bg-amber-50";
  
    return (
      <button
        onClick={onClick}
        className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${styles}`}
      >
        {children}
      </button>
    );
  }