// prefix: __Zone_disable_
export interface ZoneGlobalDisableConfigurations {
  EventEmitter?: boolean;
  fs?: boolean;
  node_timers?: boolean;
  nextTick?: boolean;
  crypto?: boolean;
  defineProperty?: boolean;
  registerElement?: boolean;
  EventTargetLegacy?: boolean;
  /**
   * Don't patch timing API – setTimeout ans setInterval
   **/
  timers?: boolean;
  /**
   * Don't patch requestAnimationFrame
   **/
  requestAnimationFrame?: boolean;
  blocking?: boolean;
  EventTarget?: boolean;
  /**
   ** Don't patch FileReaded API calls
   **/
  FileReader?: boolean;
  MutationObserver?: boolean;
  IntersectionObserver?: boolean;
  on_property?: boolean;
  customElements?: boolean;
  /**
   * Don't patch XHR requests(better be used through unpatchXHR() method)
   **/
  XHR?: boolean;
  /**
   * Don't patch geolocation API calls
   **/
  geolocation?: boolean;
  canvas?: boolean;
  ZoneAwarePromise?: boolean;
}
export type ZoneGlobalDisableConfigurationsKey = keyof ZoneGlobalDisableConfigurations;
export const zoneGlobalDisableConfigurationsKeys: ZoneGlobalDisableConfigurationsKey[] = [
  'EventEmitter',
  'fs',
  'node_timers',
  'nextTick',
  'crypto',
  'defineProperty',
  'registerElement',
  'EventTargetLegacy',
  'timers',
  'requestAnimationFrame',
  'blocking',
  'EventTarget',
  'FileReader',
  'MutationObserver',
  'IntersectionObserver',
  'on_property',
  'customElements',
  'XHR',
  'geolocation',
  'canvas',
  'ZoneAwarePromise',
];

// prefix: __zone_symbol__
export interface ZoneGlobalEventsConfigurations {
  /**
   * Array of events which should be unpatched. i.e. 'click', 'scroll', 'load'
   **/
  UNPATCHED_EVENTS?: string[];
  PASSIVE_EVENTS?: string[];
}
export type ZoneGlobalEventsConfigurationsKey = keyof ZoneGlobalEventsConfigurations;
export const zoneGlobalEventsConfigurationsKeys: ZoneGlobalEventsConfigurationsKey[] = [
  'UNPATCHED_EVENTS',
  'PASSIVE_EVENTS',
];

// prefix: __zone_symbol__
export interface ZoneGlobalSettingsConfigurations {
  DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION?: boolean;
}
export type ZoneGlobalSettingsConfigurationsKey = keyof ZoneGlobalSettingsConfigurations;
export const zoneGlobalSettingsConfigurationsKeys: ZoneGlobalSettingsConfigurationsKey[] = [
  'DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION',
];

// prefix: __zone_symbol__
export interface ZoneRuntimeConfigurations {
  ignoreConsoleErrorUncaughtError?: boolean;
}
export type ZoneRuntimeConfigurationsKey = keyof ZoneRuntimeConfigurations;
export const zoneRuntimeConfigurationsKeys: ZoneRuntimeConfigurationsKey[] = [
  'ignoreConsoleErrorUncaughtError',
];

// prefix: __Zone_disable_
export interface ZoneTestDisableConfigurations {
  jasmine?: boolean;
  mocha?: boolean;
  jest?: boolean;
}
export type ZoneTestDisableConfigurationsKey = keyof ZoneTestDisableConfigurations;
export const zoneTestDisableConfigurationsKeys: ZoneTestDisableConfigurationsKey[] = [
  'jasmine',
  'mocha',
  'jest',
];

// prefix: __zone_symbol__
export interface ZoneTestSettingsConfigurations {
  fakeAsyncDisablePatchingClock?: boolean;
  fakeAsyncAutoFakeAsyncWhenClockPatched?: boolean;
  supportWaitUnResolvedChainedPromise?: boolean;
}
export type ZoneTestSettingsConfigurationsKey = keyof ZoneTestSettingsConfigurations;
export const zoneTestSettingsConfigurationsKeys: ZoneTestSettingsConfigurationsKey[] = [
  'fakeAsyncDisablePatchingClock',
  'fakeAsyncAutoFakeAsyncWhenClockPatched',
  'supportWaitUnResolvedChainedPromise',
];

export interface ZoneFlagsHelperFunctions {
  __rxa_zone_config__log?: () => void;
}
