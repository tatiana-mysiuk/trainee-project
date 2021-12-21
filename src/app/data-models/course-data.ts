export interface CourseData {
  id: number | null;
  //alias: string;
  name: string;
  date: string;
  length: number;
  description: string;
  authors: AuthorData;
  isTopRated: boolean;
}

export interface AuthorData {
  id: number;
  name: string;
}
