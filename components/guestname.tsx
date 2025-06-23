"use client";

import { useSearchParams } from "next/navigation";

export default function GuestName() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to");

  return (
    <h2 className="text-2xl font-semibold">
      {guestName ? decodeURIComponent(guestName) : "Tamu Undangan"}
    </h2>
  );
}
