import { InterventionPlan } from "@common/interfaces/documents/intervention-plan.interface";
import { PersonRole } from "@common/interfaces/stakeholders/persons";

const plan1: InterventionPlan = {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    resident: '2',
    isFirstVisit: false,
    planStart: new Date(),
    startOfStay: new Date(new Date().setDate(new Date().getDate() - 7)),
    endOfStay: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    caregivers: ["1"],
    treatmentTeam: [{
        role: PersonRole.Doctor,
        name: "XYZ",
        address: "1234 Sherbrooke Est"
    }],
    objectives: [],
};

export const PLANS = [plan1]