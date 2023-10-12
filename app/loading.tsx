"use client";

export default function Loading() {
  return (
    <div className="w-full h-full grid justify-center items-start py-40">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
