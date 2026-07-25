interface FrameCornersProps {
  className?: string;
  size?: number;
}

// The signature motif of the redesign: camera-viewfinder / film registration
// corner brackets. Dropped onto the hero frame, every portfolio card, and
// the contact cards to tie the whole page back to one idea — everything
// here is a frame on Muna's contact sheet.
const FrameCorners = ({ className = "", size = 16 }: FrameCornersProps) => {
  const corner = "absolute pointer-events-none";
  const s = `${size}px`;
  return (
    <div className={`absolute inset-0 ${className}`}>
      <span
        className={`${corner} left-0 top-0 border-l-2 border-t-2`}
        style={{ width: s, height: s }}
      />
      <span
        className={`${corner} right-0 top-0 border-r-2 border-t-2`}
        style={{ width: s, height: s }}
      />
      <span
        className={`${corner} left-0 bottom-0 border-l-2 border-b-2`}
        style={{ width: s, height: s }}
      />
      <span
        className={`${corner} right-0 bottom-0 border-r-2 border-b-2`}
        style={{ width: s, height: s }}
      />
    </div>
  );
};

export default FrameCorners;
