export type WorkExperience = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  company: string;
  description: string | null;
  imagePath: string | null;
  imageColor: string;
  position: string;
  startDate: string;
  endDate: string | null;
  showPlusDate: boolean;
  stack: string | null;
};
