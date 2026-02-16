import { useOutletContext } from "react-router-dom";

export function useUI() {
  return useOutletContext();
}

