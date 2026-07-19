"use client";

import { categories } from "../model/categories";

interface Props {
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryTabs({
  active,
  onChange,
}: Props) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onChange(category.id)}
          className={`rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
            active === category.id
              ? "bg-pink-600 text-white shadow-lg"
              : "border border-gray-200 bg-white hover:border-pink-300 hover:text-pink-600"
          }`}
        >
          <span className="mr-2">
            {category.emoji}
          </span>

          {category.title}
        </button>
      ))}
    </div>
  );
}