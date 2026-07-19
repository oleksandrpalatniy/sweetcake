"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
}

export default function CakeGallery({
  images,
  title,
}: Props) {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-3xl border bg-white shadow-sm">
        <Image
          src={images[selected]}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelected(index)}
              className={`relative h-20 w-20 overflow-hidden rounded-xl border transition ${
                selected === index
                  ? "border-pink-600"
                  : "border-gray-200"
              }`}
            >
              <Image
                src={image}
                alt={`${title} ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}