export interface Category {
  id: number;
  name: string;
}

export interface RegistrationPayload {
  email: string;
  phone_number: string;
  team_name: string;
  group_size: number;
  project_topic: string;
  category: number;
  privacy_poclicy_accepted: boolean;
}
