import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
        Design Token System
      </h1>
      <p className="mt-4 text-base" style={{ color: "var(--color-text-secondary)" }}>
        Style Dictionary로 생성된 CSS 변수를 사용합니다.
      </p>
      <div className="mt-6">
        <Button label="토큰 적용 버튼" />
      </div>
    </main>
  );
}
