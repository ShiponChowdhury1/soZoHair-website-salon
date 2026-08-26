import { useEffect, useRef, useState } from "react";

export type AutosaveStatus = "saved" | "saving" | "unsaved" | "idle";

interface UseAutosaveOptions<T> {
  data: T;
  onSave: (data: T) => Promise<void> | void;
  delayMs?: number; // Default: 10000 (10s)
}

export function useAutosave<T>({ data, onSave, delayMs = 10000 }: UseAutosaveOptions<T>) {
  const [status, setStatus] = useState<AutosaveStatus>("idle");
  const isFirstRender = useRef(true);
  const dataRef = useRef(data);
  dataRef.current = data;

  useEffect(() => {
    // Skip initial load save
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setStatus("unsaved");

    const timer = setTimeout(async () => {
      try {
        setStatus("saving");
        await onSave(dataRef.current);
        setStatus("saved");
      } catch (err) {
        console.error("Autosave draft error:", err);
        setStatus("unsaved");
      }
    }, delayMs);

    return () => clearTimeout(timer);
  }, [data, delayMs, onSave]);

  return { status, setStatus };
}
