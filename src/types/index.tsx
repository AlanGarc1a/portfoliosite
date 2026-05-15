export type Project = {
  id: number;
  type: string[];
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export interface Email {
  name: string;
  email: string;
  message: string;
}
