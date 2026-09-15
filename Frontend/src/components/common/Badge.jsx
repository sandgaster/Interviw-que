const TONE_CLASSES = {
  success: 'bg-green-50 text-success border-green-100',
  warning: 'bg-amber-50 text-warning border-amber-100',
  danger: 'bg-red-50 text-danger border-red-100',
  neutral: 'bg-slate-50 text-muted border-border',
  primary: 'bg-primary-light text-primary border-primary-light',
};

export default function Badge({ children, tone = 'neutral', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium leading-none ${TONE_CLASSES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
