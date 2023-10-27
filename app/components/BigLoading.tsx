"use client";

export default function BigLoading() {
  return (
    <div className="w-full h-screen grid justify-center items-center">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
