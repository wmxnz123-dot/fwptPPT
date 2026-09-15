export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  coreView: string;
  category: string;
  summaryBullets: string[];
  visualConcept: string;
  layoutDescription: string;
  fullCopywriting: {
    heroQuote: string;
    sections: {
      title: string;
      description?: string;
      items?: string[];
    }[];
    conclusion: string;
  };
}

export interface ArchitectureLayer {
  id: string;
  name: string;
  badge: string;
  description: string;
  subModules: {
    category: string;
    items: string[];
  }[];
}
