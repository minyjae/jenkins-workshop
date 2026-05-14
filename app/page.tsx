import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {/* กล่องสีดำ */}
      <div className="bg-black text-white p-8 rounded-lg flex flex-col justify-center items-center shadow-lg">
        <h1>Welcome to Jenkins pipeline</h1>
      </div>
    </div>
  );
}
