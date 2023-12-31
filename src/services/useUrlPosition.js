/* eslint-disable react-hooks/rules-of-hooks */
import { useSearchParams } from "react-router-dom";

export function getUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat, lng];
}
