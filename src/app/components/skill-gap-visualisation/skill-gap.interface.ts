// Interface for representing a single skill gap
export interface SkillGap {
  [category: string]: string[]; // Maps category names to arrays of skill names
}

// Interface for statistics of a single category
export interface CategoryStat {
  categoryName: string;
  totalSkills: number;
  knownSkills: number;
  progressPercentage: number;
  missingSkills: string[];
}
