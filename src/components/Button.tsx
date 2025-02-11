
export default function Button({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant?: "secondary";
}) {

  const variantClass =
    variant === "secondary"
      ? "bg-white text-neutral-800"
      : "bg-neutral-800 text-white";

  if (variant === "secondary") {
    return (
      <button
        type="button"
        className={`px-[26px] py-[10px] rounded-full ${variantClass} btnLight`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type="button"
      className={`px-[26px] py-[10px] ${variantClass} rounded-full btnDark`}
    >
      {children}
    </button>
  );
}
