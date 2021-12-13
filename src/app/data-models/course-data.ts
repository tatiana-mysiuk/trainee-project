export interface CourseData {
  id: number | null;
  alias: string;
  title: string;
  creationDate: Date;
  durationMin: number;
  description: string;
  topRated: boolean;
}
