"use strict";
// 1)
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
// 2)
class Patient extends Person {
    constructor(firstName, lastName, patientID) {
        super(firstName, lastName);
        this.patientID = patientID;
    }
    patientInfo() {
        const patientInf = `patient's name: ${this.firstName} ${this.lastName}, patient's ID: ${this.patientID}`;
        console.log(patientInf);
        return patientInf;
    }
}
// 3)
class Doctor extends Person {
    constructor(firstName, lastName, doctorID, specialization) {
        super(firstName, lastName);
        this.doctorID = doctorID;
        this.specialization = specialization;
    }
    doctorInfo() {
        const docInfo = `name: ${this.firstName} ${this.lastName}, ID: ${this.doctorID}, specialization: ${this.specialization}`;
        console.log(docInfo);
        return docInfo;
    }
}
// 4)
class Appointment {
    constructor(patient, doctor, date, time) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
    }
    appointmentInfo() {
        const appoInfo = `
            patient: ${this.patient.patientInfo()}, 
            doctor: ${this.doctor.doctorInfo()}, 
            date: ${this.date}, 
            time: ${this.time} 
            `;
        console.log(appoInfo);
        return appoInfo;
    }
}
// 5)
class Hospital {
    constructor(patientsArr, doctorsArr, appointmentsArr, hospitalName) {
        this.patientsArr = patientsArr;
        this.doctorsArr = doctorsArr;
        this.appointmentsArr = appointmentsArr;
        this.hospitalName = hospitalName;
    }
    addPateint(newPatient) {
        this.patientsArr.push(newPatient);
    }
    addDoctor(newDoctor) {
        this.doctorsArr.push(newDoctor);
    }
    addAppointment(newAppointment) {
        this.appointmentsArr.push(newAppointment);
    }
    allAppointsInfo() {
        this.appointmentsArr.forEach((appoint) => {
            appoint.appointmentInfo();
        });
    }
    allAppointsByDoctorID(id) {
        this.appointmentsArr.forEach((appointment) => {
            if (appointment.doctor.doctorID === id)
                appointment.appointmentInfo();
        });
    }
    alltheAppoByPatientID(id) {
        this.appointmentsArr.forEach((appointment) => {
            if (appointment.patient.patientID === id)
                appointment.appointmentInfo();
        });
    }
    todayAppointments(date) {
        this.appointmentsArr.forEach((appointment) => {
            if (appointment.date === date)
                appointment.appointmentInfo;
        });
    }
}
let jony = new Patient("jony", "balboa", 12345);
let bilbo = new Patient("bilbo", "bagins", 54321);
let dolitel = new Doctor("mr.", "dolitel", 56789, "very mumche etc");
let rofeMadhim = new Doctor("rofew", "madhim", 6544325, "very mumche etc");
let appo1 = new Appointment(jony, dolitel, "27/08/23", "15:00");
let appo2 = new Appointment(bilbo, rofeMadhim, "27/08/23", "15:00");
let barzilay = new Hospital([], [], [], "Barzilay");
barzilay.addAppointment(appo1);
barzilay.addAppointment(appo2);
barzilay.alltheAppoByPatientID(12345);
