import { DateTime } from "luxon";

export interface Discovery {
  id: number;
  ip_address: string;
  hostname: string;
  device_id: number;
  scan_id: number;
}

export interface Scan {
  id: number;
  scan_time: DateTime;
  network_id: string;
  discoveries: Discovery[];
}

export interface ScanSummary {
  id: number;
  scan_time: DateTime;
  network_id: string;
  devices_discovered_count: number;
  people_seen_count: number;
  primary_devices_seen_count: number;
}

export interface Person {
  id: number;
  name: string;
  note: string;
  first_seen: DateTime;
  last_seen: DateTime;
}

export interface PersonSummary {
  id: number;
  name: string;
  note: string;
  first_seen: DateTime;
  last_seen: DateTime;
}

export interface Device {
  id: number;
  mac_address: string;
  name: string;
  note: string;
  owner_id: number;
  is_primary: boolean;
  first_seen: DateTime;
  last_seen: DateTime;
}

export interface DeviceSummary {
  id: number;
  mac_address: string;
  name: string;
  note: string;
  owner_id: number;
  is_primary: boolean;
  first_seen: DateTime;
  last_seen: DateTime;
}
