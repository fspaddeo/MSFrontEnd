export interface WorkerCreationDto {
    code:         number;
    name:         string;
    surname:      string;
    dateOfBirth:  Date;
    email:        string;
    phoneNumber:  string;
    birthPlace:   string;
    workHistory:  WorkHistory[];
    skills:       Skills;
    studyHistory: StudyHistory[];
    pictureUrl:   string | null;
}

export interface WorkerDto {
    id:           string;
    code:         number;
    name:         string;
    surname:      string;
    dateOfBirth:  Date;
    email:        string;
    phoneNumber:  string;
    birthPlace:   string;
    workHistory:  WorkHistory[];
    skills:       Skills;
    studyHistory: StudyHistory[];
    pictureUrl:   string | null;
}

export interface Skills {
    knownLanguages: KnownLanguage[];
    softSkills:     KnownLanguage[];
    techSkills:     KnownLanguage[];
}

export interface KnownLanguage {
    skill: string;
    level: string;
}

export interface StudyHistory {
    school:          string;
    studyPath:       string;
    qualification:   string;
    finalGrade:      number;
    additionalInfos: string;
    startDate:       Date;
    endDate:         Date;
}

export interface WorkHistory {
    currentWork:     string;
    workPlace:       string;
    additionalInfos: string;
    startDate:       Date;
    endDate:         Date;
}
