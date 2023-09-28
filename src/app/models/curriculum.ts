export interface CurriculumSection {
    cardItems: CurriculumCardItem[];
    expanded: boolean;
    name: string;
}

export interface CurriculumCardItem {
    data: any;
    identifier: string;
    readonly: boolean;
}
