
interface ArrowButtonProps {
  className?: string;
  height?: number;
  width?: number;
  rotate?: number;
  onClick?: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  className = "",
  height = 48,
  width = 48,
  rotate = 0,
  onClick = () => {},
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        height,
        width,
        borderRadius: "9999px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      className="z-10"
    >
      <svg
        width={height / 2}
        height={height / 2}
        viewBox="0 0 24 24"
        className={`stroke-[#FD853A] ${className}`}
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </div>
  );
};

export default ArrowButton;