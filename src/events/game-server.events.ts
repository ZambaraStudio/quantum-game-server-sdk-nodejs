export const BASE_EVENT_TYPES = {
  GENERIC_MESSAGE: 'generic-message',
} as const;

export type BaseEventType =
  (typeof BASE_EVENT_TYPES)[keyof typeof BASE_EVENT_TYPES];

export const TO_GS_EVENT_TYPES = {
  ...BASE_EVENT_TYPES,
  PLAYER_CONNECTED: 'player-connected',
  PLAYER_DISCONNECTED: 'player-disconnected',
} as const;

export const FROM_GS_EVENT_TYPES = {
  ...BASE_EVENT_TYPES,
  PLAYER_KICK: 'player-kick',
  SHUTDOWN_SERVER: 'shutdown-server',
} as const;

export type ToGSEventType =
  (typeof TO_GS_EVENT_TYPES)[keyof typeof TO_GS_EVENT_TYPES];

export type FromGSEventType =
  (typeof FROM_GS_EVENT_TYPES)[keyof typeof FROM_GS_EVENT_TYPES];

export function isFromGSEventType(value: string): value is FromGSEventType {
  return Object.values(FROM_GS_EVENT_TYPES).includes(value as FromGSEventType);
}
