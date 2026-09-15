const VARIANT_CLASSES = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-card',
  secondary:
    'bg-white text-ink border border-border hover:bg-primary-light hover:text-primary hover:border-primary-light',
  ghost: 'bg-transparent text-muted hover:bg-primary-light hover:text-primary',
};

export default function Button({
  children,
  variant = 'primary',
  icon: Icon,
  className = '',
  type = 'button',
  ...rest
}) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none ${VARIANT_CLASSES[variant]} ${className}`}
      {...rest}
    >
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
      {children}
    </button>
  );
}
