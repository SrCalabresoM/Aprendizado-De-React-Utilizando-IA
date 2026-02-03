function Titulo({ children }) {
  return (
    <h1 style={{
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px"
    }}>
      {children}
    </h1>
  );
}
export default Titulo;