/**
 * Feature Flag: Online Booking System Integration (Meevo)
 * Set `BOOKING_ENABLED` to `true` once Meevo integration is complete to re-enable online booking.
 * Set `BOOKING_ENABLED` to `false` to hide/disable online booking links and show Coming Soon message.
 *
 * Can be overridden by setting environment variable NEXT_PUBLIC_BOOKING_ENABLED="true" or "false".
 */
export const BOOKING_ENABLED: boolean =
  process.env.NEXT_PUBLIC_BOOKING_ENABLED !== undefined
    ? process.env.NEXT_PUBLIC_BOOKING_ENABLED === "true"
    : false; // Default: disabled until Meevo integration
