import dynamic from "next/dynamic";

const ErrorComponent = dynamic(() => import("@/components/ErrorComponent"), {
  loading: () => <p>Loading...</p>,
});

export default function Custom404() {
  return <ErrorComponent />;
}
