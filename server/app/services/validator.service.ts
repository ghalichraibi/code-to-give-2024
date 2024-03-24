import { Objective } from "@common/interfaces/documents/objective.interface";
import { InterventionPlan } from "@common/interfaces/documents/intervention-plan.interface";
import { MedicalStaff } from "@common/interfaces/stakeholders/persons";

export class TypeValidator {
    static isValidObjctive(object: any): object is Objective {
        return 'title' in object && typeof object.title === 'string' &&
               'description' in object && typeof object.description === 'string' &&
               'term' in object &&
               'status' in object &&
               (!('means' in object) || ('means' in object && typeof object.means === 'string')) &&
               'healthFactor' in object && Array.isArray(object.healthFactor);
    }

    static isValidMedicalStaff(object: any): object is MedicalStaff {
        const hasAtLeastOneContact = ('phoneNumber' in object && typeof object.phoneNumber === 'string') ||
                                     ('email' in object && typeof object.email === 'string');
        return 'name' in object && typeof object.name === 'string' &&
               'phoneNumber' in object && typeof object.phoneNumber === 'string' &&
               'email' in object && typeof object.email === 'string' &&
               'address' in object && typeof object.address === 'string';
    }

    static isValidInterventionPlan(object: any): object is InterventionPlan {
        return 'id' in object &&
               'createdAt' in object && object.createdAt instanceof Date &&
               'updatedAt' in object && object.updatedAt instanceof Date &&
               'resident' in object &&
               'isFirstVisit' in object && typeof object.isFirstVisit === 'boolean' &&
               'planStart' in object && object.planStart instanceof Date &&
               'startOfStay' in object && object.startOfStay instanceof Date &&
               'endOfStay' in object && object.endOfStay instanceof Date &&
               'caregivers' in object && Array.isArray(object.caregivers) &&
               'treatmentTeam' in object && Array.isArray(object.treatmentTeam) &&
               'objectives' in object && object.objectives.every((objective: any) => TypeValidator.isValidObjctive(objective));
    }
}