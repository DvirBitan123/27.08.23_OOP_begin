"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Patient_patientID, _Doctor_doctorID, _Appointment_patient, _Appointment_doctor, _Appointment_date, _Appointment_time, _Hospital_patientsArr, _Hospital_doctorsArr, _Hospital_appointmentsArr, _Hospital_hospitalName;
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
        _Patient_patientID.set(this, void 0);
        __classPrivateFieldSet(this, _Patient_patientID, patientID, "f");
    }
    patientInfo() {
        const patientInf = `patient's name: ${this.firstName} ${this.lastName}, patient's ID: ${__classPrivateFieldGet(this, _Patient_patientID, "f")}`;
        console.log(patientInf);
        return patientInf;
    }
    getID() {
        return __classPrivateFieldGet(this, _Patient_patientID, "f");
    }
}
_Patient_patientID = new WeakMap();
// 3)
class Doctor extends Person {
    constructor(firstName, lastName, doctorID, specialization) {
        super(firstName, lastName);
        _Doctor_doctorID.set(this, void 0);
        __classPrivateFieldSet(this, _Doctor_doctorID, doctorID, "f");
        this.specialization = specialization;
    }
    doctorInfo() {
        const docInfo = `name: ${this.firstName} ${this.lastName}, ID: ${__classPrivateFieldGet(this, _Doctor_doctorID, "f")}, specialization: ${this.specialization}`;
        console.log(docInfo);
        return docInfo;
    }
    getID() {
        return __classPrivateFieldGet(this, _Doctor_doctorID, "f");
    }
}
_Doctor_doctorID = new WeakMap();
// 4)
class Appointment {
    constructor(patient, doctor, date, time) {
        _Appointment_patient.set(this, void 0);
        _Appointment_doctor.set(this, void 0);
        _Appointment_date.set(this, void 0);
        _Appointment_time.set(this, void 0);
        __classPrivateFieldSet(this, _Appointment_patient, patient, "f");
        __classPrivateFieldSet(this, _Appointment_doctor, doctor, "f");
        __classPrivateFieldSet(this, _Appointment_date, date, "f");
        __classPrivateFieldSet(this, _Appointment_time, time, "f");
    }
    appointmentInfo() {
        const appoInfo = `
            patient: ${__classPrivateFieldGet(this, _Appointment_patient, "f").patientInfo()}, 
            doctor: ${__classPrivateFieldGet(this, _Appointment_doctor, "f").doctorInfo()}, 
            date: ${__classPrivateFieldGet(this, _Appointment_date, "f")}, 
            time: ${__classPrivateFieldGet(this, _Appointment_time, "f")} 
            `;
        console.log(appoInfo);
        return appoInfo;
    }
    getPatient() {
        return __classPrivateFieldGet(this, _Appointment_patient, "f");
    }
    getDctor() {
        return __classPrivateFieldGet(this, _Appointment_doctor, "f");
    }
    getDate() {
        return __classPrivateFieldGet(this, _Appointment_date, "f");
    }
    getTime() {
        return __classPrivateFieldGet(this, _Appointment_time, "f");
    }
}
_Appointment_patient = new WeakMap(), _Appointment_doctor = new WeakMap(), _Appointment_date = new WeakMap(), _Appointment_time = new WeakMap();
// 5)
class Hospital {
    constructor(patientsArr, doctorsArr, appointmentsArr, hospitalName) {
        _Hospital_patientsArr.set(this, void 0);
        _Hospital_doctorsArr.set(this, void 0);
        _Hospital_appointmentsArr.set(this, void 0);
        _Hospital_hospitalName.set(this, void 0);
        __classPrivateFieldSet(this, _Hospital_patientsArr, patientsArr, "f");
        __classPrivateFieldSet(this, _Hospital_doctorsArr, doctorsArr, "f");
        __classPrivateFieldSet(this, _Hospital_appointmentsArr, appointmentsArr, "f");
        __classPrivateFieldSet(this, _Hospital_hospitalName, hospitalName, "f");
    }
    addPateint(newPatient) {
        __classPrivateFieldGet(this, _Hospital_patientsArr, "f").push(newPatient);
    }
    addDoctor(newDoctor) {
        __classPrivateFieldGet(this, _Hospital_doctorsArr, "f").push(newDoctor);
    }
    addAppointment(newAppointment) {
        __classPrivateFieldGet(this, _Hospital_appointmentsArr, "f").push(newAppointment);
    }
    allAppointsInfo() {
        __classPrivateFieldGet(this, _Hospital_appointmentsArr, "f").forEach((appoint) => {
            appoint.appointmentInfo();
        });
    }
    allAppointsByDoctorID(id) {
        __classPrivateFieldGet(this, _Hospital_appointmentsArr, "f").forEach((appointment) => {
            if (appointment.getDctor().getID() === id)
                appointment.appointmentInfo();
        });
    }
    alltheAppoByPatientID(id) {
        __classPrivateFieldGet(this, _Hospital_appointmentsArr, "f").forEach((appointment) => {
            if (appointment.getPatient().getID() === id)
                appointment.appointmentInfo();
        });
    }
    todayAppointments(date) {
        __classPrivateFieldGet(this, _Hospital_appointmentsArr, "f").forEach((appointment) => {
            if (appointment.getDate() === date)
                appointment.appointmentInfo;
        });
    }
}
_Hospital_patientsArr = new WeakMap(), _Hospital_doctorsArr = new WeakMap(), _Hospital_appointmentsArr = new WeakMap(), _Hospital_hospitalName = new WeakMap();
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
