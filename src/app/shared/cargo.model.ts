export interface Cargo {
  id: number;
  shipment_id: number;
  payload: number;
  dimension_x: number;
  dimension_y: number;
  dimension_z: number;
  stackable: boolean;
  dangerous: boolean;
  created_at: string;
  updated_at: string;
}
