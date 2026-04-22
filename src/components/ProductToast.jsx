import Image from "next/image";

export function ProductToast({ title, subtitle, product }) {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <Image
        src={product.thumbnail}
        width={40}
        height={40}
        alt={product.title}
        style={{ borderRadius: "6px", objectFit: "cover" }}
      />

      <div>
        <div style={{ fontWeight: 600 }}>{title}</div>
        <div style={{ fontSize: "12px" }}>{subtitle}</div>
      </div>
    </div>
  );
}
