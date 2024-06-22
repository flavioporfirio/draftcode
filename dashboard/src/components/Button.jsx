import "./button.css";

export default function Button({
  children,
  bgColor = "#ffffff",
  color = "#272727",
  active = false,
}) {
  return (
    <button
      style={{
        backgroundColor: active ? "#9E6EFE0F" : bgColor,
        color: active ? "#9E6EFE" : color,
      }}
    >
      {children}
    </button>
  );
}
