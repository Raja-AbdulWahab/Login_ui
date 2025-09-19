import Image from "next/image";

export default function Logo() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Image src="/logo.png" alt="CirrusAI Logo" width={140} height={45} />
    </div>
  );
}
