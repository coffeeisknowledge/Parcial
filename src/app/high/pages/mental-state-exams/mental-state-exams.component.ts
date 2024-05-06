import { Component } from '@angular/core';
import { Exams } from '../../model/exams.entity';
import { Examiners } from '../../model/examiners.entity';
import { Patients } from '../../model/patients.entity';
import { ExamsApiService } from '../../services/exams-api.service';
import { PatientsApiService } from '../../services/patients-api.service';
import { ExaminersApiService } from '../../services/examiners-api.service';

@Component({
  selector: 'app-mental-state-exams',
  templateUrl: './mental-state-exams.component.html',
  styleUrl: './mental-state-exams.component.css'
})
export class MentalStateExamsComponent {
  exams: Array<Exams> = [];
  examiners: Array<Examiners> = [];
  patients: Array<Patients> = [];
  mentalStateExams: Array<any> = [];

  constructor(private examsApi: ExamsApiService, private patientsApi: PatientsApiService, private examinersApi: ExaminersApiService) {
  }

  //getAllExams() {
  //  this.examsApi.getExams().subscribe((data:any) => {
  //    this.exams = data;
  //    console.log(this.exams);
  //  })
  //}

  //getAllExaminers() {
  //  this.examinersApi.getExaminers().subscribe((data:any) => {
  //    this.examiners = data;
  //    console.log(this.examiners);
  //  })
  //}

  //getAllPatients() {
  //  this.patientsApi.getPatients().subscribe((data:any) => {
  //    this.patients = data;
  //    console.log(this.patients);
  //  })
  //}

  //getAllData(){
  //  this.getAllExams();
  //  this.getAllExaminers();
  //  this.getAllPatients();
  //}

  //ngOnInit() {
  //  this.getAllData();

  //  this.exams.forEach((e) => {
  //    const auxObject = {
  //      idExam: 0,
  //      photoUrl: "",
  //      patientname: "",
  //      birthDate: "",
  //      examDate: "",
  //      examinerName: "",
  //      examinerNationalProviderIdentifier: "",
  //      totalScore: 0
  //    };
  //    const auxPatient = this.patients[e.patientId];
  //    const auxExaminer = this.examiners[e.examinerId];
  //    auxObject.idExam = e.id;
  //    auxObject.photoUrl = auxPatient.photoUrl;
  //    auxObject.patientname = `${auxPatient.firstName} ${auxPatient.lastName}`;
  //    auxObject.birthDate = auxPatient.birthDate;
  //    auxObject.examDate = e.examDate;
  //    auxObject.examinerName = `${auxExaminer.firstName} ${auxExaminer.lastName}`;
  //    auxObject.examinerNationalProviderIdentifier = auxExaminer.nationalProviderIdentifier;
  //    auxObject.totalScore = e.recallScore+e.languageScore+e.orientationScore+e.registrationScore+e.attentionAndCalculationScore;
  //    this.mentalStateExams.push(auxObject);
  //  })
  //  console.log(this.mentalStateExams);
  //}

  getAllExams(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.examsApi.getExams().subscribe((data:any) => {
        this.exams = data;
        console.log(this.exams);
        resolve();
      }, error => {
        reject(error);
      });
    });
  }

  getAllExaminers(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.examinersApi.getExaminers().subscribe((data:any) => {
        this.examiners = data;
        console.log(this.examiners);
        resolve();
      }, error => {
        reject(error);
      });
    });
  }

  getAllPatients(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.patientsApi.getPatients().subscribe((data:any) => {
        this.patients = data;
        console.log(this.patients);
        resolve();
      }, error => {
        reject(error);
      });
    });
  }

  async getAllData() {
    try {
      await Promise.all([this.getAllExams(), this.getAllExaminers(), this.getAllPatients()]);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  }

  async ngOnInit() {
    await this.getAllData();

    this.exams.forEach((e) => {
      const auxObject = {
        idExam: 0,
        photoUrl: "",
        patientname: "",
        birthDate: "",
        examDate: "",
        examinerName: "",
        examinerNationalProviderIdentifier: "",
        totalScore: 0
      };
      const auxPatient = this.patients.find(patient => patient.id === e.patientId);
      const auxExaminer = this.examiners.find(examiner => examiner.id === e.examinerId);
      if (auxPatient && auxExaminer) {
        auxObject.idExam = e.id;
        auxObject.photoUrl = auxPatient.photoUrl;
        auxObject.patientname = `${auxPatient.firstName} ${auxPatient.lastName}`;
        auxObject.birthDate = auxPatient.birthDate;
        auxObject.examDate = e.examDate;
        auxObject.examinerName = `${auxExaminer.firstName} ${auxExaminer.lastName}`;
        auxObject.examinerNationalProviderIdentifier = auxExaminer.nationalProviderIdentifier;
        auxObject.totalScore = e.recallScore + e.languageScore + e.orientationScore + e.registrationScore + e.attentionAndCalculationScore;
        this.mentalStateExams.push(auxObject);
      } else {
        console.error("No se encontró paciente o examinador para el examen con id", e.id);
      }
    });
    console.log(this.mentalStateExams);
  }
}
