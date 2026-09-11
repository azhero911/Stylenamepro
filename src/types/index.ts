export type ToolCategory =
  | 'all'
  | 'gaming'
  | 'free-fire'
  | 'pubg'
  | 'aesthetic'
  | 'love'
  | 'urdu-pak'
  | 'symbols'
  | 'glitch';

export interface StyleResult {
  id: string;
  styleName: string;
  text: string;
  category: ToolCategory;
  charCount: number;
  isZalgo?: boolean;
}

export interface CategoryTab {
  id: ToolCategory;
  label: string;
  count: number;
}

export interface FavoriteItem {
  id: string;
  text: string;
  savedAt: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    location?: string;
  };
  keywords: string[];
  content: string;
}
