export const MEEVO_BOOKING_URL = "https://login.meevo.com/sozohairohio/ob?locationId=107183";

export const BOOKING_ENABLED: boolean =
  process.env.NEXT_PUBLIC_BOOKING_ENABLED !== undefined
    ? process.env.NEXT_PUBLIC_BOOKING_ENABLED === "true"
    : true; // Default: true for direct Meevo booking

