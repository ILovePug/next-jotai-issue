import { atom, useAtomValue } from "jotai";

const fakeAtom = atom();

export function useAtom() {
  useAtomValue(fakeAtom);

  return "hello";
}
