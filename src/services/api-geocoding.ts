import { COORDINATE_TYPE, POSITION_TYPE } from "../utils/types/data-types";

const getAddress = async ({ latitude, longitude }:COORDINATE_TYPE)=> {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data:POSITION_TYPE = await res.json();
  return data;
}
export  {getAddress}