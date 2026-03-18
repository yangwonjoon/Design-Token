type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-(--color-primary) text-(--color-text-inverse) text-sm font-semibold px-6 py-2 rounded-lg shadow-sm hover:opacity-85 transition-opacity cursor-pointer border-none"
    >
      {label}
    </button>
  );
}
