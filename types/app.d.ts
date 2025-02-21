/**
 * Global types
 */
declare global {
  /**
   * Custom utility types
   */
  export type Keys<T extends Record<string, unknown>> = keyof T;

  /**
   * ⚠️ FSD
   *
   * This is a hacky way to export Redux types inferred from @/app
   * and use them in @/shared/model/hooks.ts
   */
  declare type RootState = import('../src/app/rootStore').RootState;
  declare type AppDispatch = import('../src/app/rootStore').AppDispatch;
}

export {};
