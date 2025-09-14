"use client";

import { useState } from "react";
import { createClient } from "$/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function EditActivityForm({ activity }) {
  const supabase = createClient();
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: activity.title,
    date: activity.date,
    location: activity.location,
    numPeople: activity.numPeople,
    description: activity.description,
    imageUrl: activity.imageUrl,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("activities")
      .update(formData)
      .eq("id", activity.id);

    if (error) {
      alert("更新に失敗しました: " + error.message);
    } else {
      router.push("/activities");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="title"
        value={formData.title ?? ""}
        onChange={handleChange}
        className="border p-2 rounded"
        placeholder="タイトル"
      />
      <input
        type="date"
        name="date"
        value={formData.date ?? ""}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="location"
        value={formData.location ?? ""}
        onChange={handleChange}
        className="border p-2 rounded"
        placeholder="場所"
      />
      <input
        type="number"
        name="numPeople"
        value={formData.numPeople ?? ""}
        onChange={handleChange}
        className="border p-2 rounded"
        placeholder="人数"
      />
      <textarea
        name="description"
        value={formData.description ?? ""}
        onChange={handleChange}
        className="border p-2 rounded whitespace-pre-line"
        placeholder="説明"
      />
      <input
        type="text"
        name="imageUrl"
        value={formData.imageUrl ?? ""}
        onChange={handleChange}
        className="border p-2 rounded"
        placeholder="画像URL"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        更新
      </button>
    </form>
  );
}
