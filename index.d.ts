/**
 * Retarget events to shadow dow react components
 *
 */
export interface RetargetEvents {
    (target: any): void;

}

export const retargetEvents: RetargetEvents;
