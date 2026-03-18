"use client";

interface MediaPlaceholderProps {
  type: "image" | "video";
  label: string;
  aspectRatio?: string;
  className?: string;
}

export default function MediaPlaceholder({
  type,
  label,
  aspectRatio = "16/9",
  className = "",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`media-placeholder ${className}`}
      style={{ aspectRatio }}
    >
      <div className="text-center p-6">
        {type === "video" ? (
          <svg
            className="w-12 h-12 mx-auto mb-3 text-pats-silver/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        ) : (
          <svg
            className="w-12 h-12 mx-auto mb-3 text-pats-silver/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
            />
          </svg>
        )}
        <p className="text-pats-silver/60 text-sm font-medium">{label}</p>
        <p className="text-pats-silver/30 text-xs mt-1">
          {type === "video" ? "Add video file or embed URL" : "Add image file here"}
        </p>
      </div>
    </div>
  );
}
