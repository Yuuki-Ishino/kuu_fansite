"use client";

import { useState } from "react";
import { createClient } from "$/utils/supabase/client";

export default function TestInsertPage() {
  const supabase = createClient();
  const [message, setMessage] = useState("");

  const handleInsert = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .insert([
        {
          user_id: "1a7a2dd6-4882-43fe-8f96-0c00055e1e83",   // 固定のID
          email: "test@example.com", // 固定のメール
          role: "visitor",
        },
      ]);

    if (error) {
      console.error("挿入失敗:", error);
      setMessage(`挿入失敗: ${error.message}`);
    } else {
      console.log("挿入成功:", data);
      setMessage("挿入成功！");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={handleInsert}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        データ挿入
      </button>
      {message && <p className="mt-4 text-white">{message}</p>}
    </section>
  );
}
