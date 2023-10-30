import { PaymentComponent } from "@/app/PaymentComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PaymentComponent checkoutId="112102010150e005766f57bc043" />
    </main>
  );
}
