import {IFile} from "./i-file";

export interface INews {
  id: number;
  title: string;
  imgUrl: IFile;
  description: string;
  content: string;
  postDate: string;
  author: string;
  category: string;
}
