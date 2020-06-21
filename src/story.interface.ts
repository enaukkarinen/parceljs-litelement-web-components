import { GalleryItem } from './components/gallery/gallery';

export interface Story {
  breaks?: { url: string; text: string }[];
  galleries: GalleryItem[][];
}
