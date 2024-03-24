import { BaseDocument } from './base-document.interface';
import { Objective } from './objective.interface';
import { UserId } from '../stakeholders/users';
import { MedicalStaff } from '../stakeholders/persons'

export interface InterventionPlan extends BaseDocument {
    resident: UserId;
    isFirstVisit: boolean;
    planStart: Date;
    startOfStay: Date; // debut sejour
    endOfStay: Date; // fin sejour

    caregivers: UserId[];
    treatmentTeam: MedicalStaff[];

    objectives: Objective[];

}