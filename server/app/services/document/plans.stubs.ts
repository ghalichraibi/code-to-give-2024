import { InterventionPlan } from "@common/interfaces/documents/intervention-plan.interface";
import { PersonRole } from "@common/interfaces/stakeholders/persons";
import { Term } from "@common/enums/term.enum";
import { Status } from "@common/enums/status.enum";
import { HealthFactor } from "@common/enums/health-factor.enum";

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
    objectives: [
        {
            title: "Améliorer les habitudes de consommation",
            description: "Maintenir routine de consommation en utilisant les services adaptés : arriver à ne consommer que la médication prescrite (méthadone, dilaudid)",
            term: Term.Medium,
            status: Status.Paused,
            means: "Utiliser les services toxicos  et respecter la routine établie (en moyenne 4 injections par jour)",
            healthFactor: [HealthFactor.Physical, HealthFactor.Economic, HealthFactor.Physical],
        },
        {
            title: "Améliorer la santé physique",
            description: "Eviter les infections et les maladies en adoptant des habitudes saines",
            term: Term.Short,
            status: Status.InProgress,
            means: "Se laver les mains régulièrement, éviter les contacts avec les personnes malades, prendre les médicaments prescrits",
            healthFactor: [ HealthFactor.Physical],
        }
    ]
};

export const PLANS = [plan1]