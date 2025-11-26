export interface MenuItem {
  id: number;
  title: string;
  description: string;
  image: string;
  price?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}