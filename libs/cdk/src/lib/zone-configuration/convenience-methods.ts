import {
  ZoneConfigConfiguration,
  ZoneConfigConvenienceMethods,
} from './model/zone-cfg.types';
import { xhrEvents } from './event-names';

export const convenienceMethods = (
  config: ZoneConfigConfiguration
): ZoneConfigConvenienceMethods => ({
  unpatchXHR: () => {
    config.global.disable.XHR();
    config.events.disable.UNPATCHED_EVENTS([...xhrEvents]);
  },
  useUnpatchedPassiveScrollEvents: () => {
    config.events.disable.PASSIVE_EVENTS(['scroll']);
    config.events.disable.UNPATCHED_EVENTS(['scroll']);
  },
});
