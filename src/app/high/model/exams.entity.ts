export class Exams{
  id: number;
  patientId: number;
  examinerId: number;
  examDate: string;
  orientationScore: number;
  registrationScore: number;
  attentionAndCalculationScore: number;
  recallScore: number;
  languageScore: number;
  constructor(){
    this.id = 0;
    this.patientId = 0;
    this.examinerId = 0;
    this.examDate = "";
    this.orientationScore = 0;
    this.registrationScore = 0;
    this.attentionAndCalculationScore = 0;
    this.recallScore = 0;
    this.languageScore = 0;
  }
}
