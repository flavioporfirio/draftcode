import "./button.css";

export default function Button({ children, btnColor, padding, type = "true" }) {
  return (
    <button
      style={{
        background: btnColor,
        border: type === "true" ? "none" : "2px solid white",
        padding: padding,
      }}
    >
      {children}
    </button>
  );
}
