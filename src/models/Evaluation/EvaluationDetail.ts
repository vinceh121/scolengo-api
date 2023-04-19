import { SimpleUser } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'

export type EvaluationDetailAttributes = {
    title: string|null;
    topic: string|null;
    dateTime: string|null;
    coefficient: number;
    min: number|null;
    max: number|null;
    average: number|null;
    scale: number|null;
}

export type EvaluationDetailRelationships = {
    subSkills: {
        data: BaseObject[] | null;
    };
    subSubject: {
        data: BaseObject[] | null;
    };
    evaluationService: {
        data: BaseObject
    };
    evaluationResult: {
        data: BaseObject
    };
}

export type EvaluationDetail = BaseResponse<EvaluationDetailAttributes, EvaluationDetailRelationships, 'evaluation'>

export type EvaluationDetailIncludedAttributes = SimpleUser | {
    mark: number|null;
    nonEvaluationReason: null;
    comment: string|null;
} | {
    coefficient: number|null
    average: number|null
    scale: number|null
    studentAverage: number|null
} | {
    color: string;
    label: string
}

export type EvaluationDetailIncludedRelationships = {
    subSkillsEvaluationResults?: {
        data: BaseObject[] | null;
    };
    subject?: {
        data: BaseObject<'subject'>
    };
    teachers?: {
        data: BaseObject<'teacher'>[] | null;
    };
}

export type EvaluationDetailIncluded = BaseResponse<EvaluationDetailIncludedAttributes, EvaluationDetailIncludedRelationships >
