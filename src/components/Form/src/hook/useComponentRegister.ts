import type { ComponentType } from "../types/index";
import { useEffect } from "react";
import { add, del, has } from "../componentMap";

export function useComponentRegister(
  compName: ComponentType,
  comp: JSX.Element
) {
  if (!has(compName)) {
    add(compName, comp);
  }
  useEffect(() => {
    return () => {
        del(compName);
    };
  });
}
