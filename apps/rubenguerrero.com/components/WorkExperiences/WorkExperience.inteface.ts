export interface WorkExperience {
  company: string;
  imagePath?: string;
  imageColor: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string;
  stack?: string[];
  showPlusDate?: boolean;
}

export interface WorkExperienceProps {
  work: WorkExperience;
  nextImageColor?: string;
}
