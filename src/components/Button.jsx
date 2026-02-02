export default function Button({ text, variant = "primary", onClick }) {
  const base =
    "px-6 py-3 font-semibold rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-strawberry/40"

  const variants = {
    primary:
      "bg-strawberry text-white shadow-md hover:bg-pink-500 hover:shadow-lg dark:shadow-pink-500/20",
    secondary:
      "bg-blush text-cocoa border border-strawberry hover:bg-strawberry hover:text-white dark:bg-night dark:text-cream dark:border-cream/30",
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
    >
      {text}
    </button>
  )
}
