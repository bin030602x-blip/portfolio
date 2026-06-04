type ImageSlotProps = {
  /** Optional image URL. When omitted, an empty placeholder is shown. */
  src?: string;
  alt?: string;
  /** Caption shown in the empty state. */
  placeholder?: string;
  radius?: number;
  className?: string;
};

/**
 * Static replacement for the original <image-slot> web component.
 * The omelette drag-to-fill runtime isn't available in Next.js, so this
 * renders the image when `src` is provided, otherwise a labelled placeholder.
 */
export default function ImageSlot({
  src,
  alt = "",
  placeholder = "Drop an image",
  radius = 12,
  className,
}: ImageSlotProps) {
  return (
    <div
      className={`image-slot${className ? ` ${className}` : ""}`}
      style={{ borderRadius: radius }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} style={{ borderRadius: radius }} />
      ) : (
        <span className="ph">{placeholder}</span>
      )}
    </div>
  );
}
