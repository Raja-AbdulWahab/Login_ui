import Image from "next/image";

export default function Logo() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
      <Image src="/logo.png" alt="CirrusAI Logo" width={120} height={40} />
    </div>
  );
}
