export interface MatchedRoleData {
  role: string;
  topSkills: any[];
  roleDetails?: JobRoleDetails;
}

export interface JobRoleDetails {
  description?: string;
  responsibilities?: string[];
  skills?: string[];
  fitsWell?: string;
}

export interface CategoryTopSkillsDTO {
  category: string;
  skills: SkillDTO[];
}

export interface SkillDTO {
  id: number;
  skillName: string;
  type: SkillTypeDTO;
}

export interface SkillTypeDTO {
  id: number;
  typeName: string;
}
