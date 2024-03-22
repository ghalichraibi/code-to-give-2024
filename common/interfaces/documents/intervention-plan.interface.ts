import { BaseDocument } from './base-document.interface';
import { Objective } from './objective.interface';

export interface InterventionPlan extends BaseDocument {
    objectives: Objective[];
}