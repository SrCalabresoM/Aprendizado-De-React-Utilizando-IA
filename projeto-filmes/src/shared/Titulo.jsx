function Titulo({ children }) {
  return (
    <p style={{
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.01em",
      color: "#e8e8e8",
      borderLeft: "5px solid #646cff",
      paddingLeft: "15px",
      lineHeight: 1,
      textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
    }}>
      {children}
    </p>
  );
}

export default Titulo;
