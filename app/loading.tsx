"use client";

export default function Loading() {
  return (
    <div className="w-full h-full grid justify-center items-center">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
