

import { IoIosSettings } from "react-icons/io";

export default function Home() {
  return (
    <main className="min-h-screen p-20">
      <div className="w-100 flex justify-end">
        <div>
          <button className="rounded-full bg-indigo-800	p-2 text-white shadow-xl transition hover:bg-violet-700">
            <IoIosSettings size={50} />
          </button>
        </div>
      </div>
    </main>
  );
}
