"use client";
import { useAtom } from "./jotai-atom";
export default function JotaiPage() {
  useAtom();
  console.log("jotai page rendered");
  return <h1>I am page with jotai</h1>;
}
