export interface NavLink {
  link: string;
  content: string;
}

export interface Post {
  fields: field;
}

export interface field {
  Date: string;
  image: string;
  Title: string;
  content: string;
  id: string;
  url: string;
  alt: string;
  author: string;
  keys: contentTags;
}
export interface contentTags {
  contentTags: string[];
}

export type posts = Post[];

export interface displayedBlog {
  alt?: string;
  date: string;
  image?: string;
  title: string;
  id?: string;
  url?: string;
  content: string;
  author: string;
  key?: string;
}

//

export interface Project {
  name: string;
  html_url: string;
  language: string;
  description: string;
  size: number;
  created_at: string;
  updated_at: string;
}

export interface GitProjects {
  data: Project[];
}
