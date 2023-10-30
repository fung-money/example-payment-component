"use client";
import { Checkout, CheckoutEvent } from "@fung-sdk/checkout";
import React, { useEffect, useState } from "react";

export function PaymentComponent({ checkoutId }: { checkoutId: string }) {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const containerId = "checkout-container";

  // Create a new checkout in the background
  // and render it into the DOM
  useEffect(() => {
    const checkoutClient = new Checkout({
      checkoutId,
      containerId: containerId,
      env: "sandbox",
    });

    checkoutClient.render();

    checkoutClient.on(CheckoutEvent.Completed, () => {
      setIsCompleted(true);
    });

    setIsReady(true);
    setIsLoading(false);
  }, []);

  return (
    <div className="mx-auto mt-8 flex max-w-2xl justify-center sm:text-center lg:mx-0 lg:max-w-none">
      {!isCompleted && (
        <div
          id={containerId}
          className={
            isReady ? "shown rounded-xl px-5 ring-1 ring-gray-200" : "hidden"
          }
        ></div>
      )}
      {isCompleted && (
        <div id="success" className="rounded-xl px-5 ring-1 ring-gray-200">
          {/* Success message */}
          <div className="flex h-full flex-col items-center justify-center">
            <p className="mt-4 text-lg font-bold p-5 ">Payment completed!</p>
          </div>
        </div>
      )}
    </div>
  );
}
