const TONE_CLASSES = {
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
  primary: 'bg-primary',
};

export default function ProgressBar({
  percentage,
  tone = 'primary',
  label,
  className = '',
}) {
  return (
    <div
      className={`h-2 w-full overflow-hidden rounded-full bg-slate-100 ${className}`}
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div
        className={`h-full rounded-full transition-[width] duration-500 ease-out ${TONE_CLASSES[tone]}`}
        style={{ width: `${Math.min(Math.max(percentage, 0), 100)}%` }}
      />
    </div>
  );
}
