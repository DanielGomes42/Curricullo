import { CurriculumCardItem } from './curriculum-card-item';

export interface CurriculumSection {
    cardItems: CurriculumCardItem[];
    expanded: boolean;
    name: string;
}
