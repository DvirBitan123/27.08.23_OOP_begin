// 1)
abstract class Person{
    firstName: string;
    lastName: string;
    address?: string;
    age?: number;
    constructor(firstName: string, lastName: string, address: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.age = age;
    }
}

// 2)
class Patient extends Person{
    #patientID:number;
    phoneNumber: number;
    emergencyContact: number;
    medicalHistory: Appointment[];
    constructor(firstName: string, lastName:string, address: string,
                age: number, patientID: number, phoneNumber: number,
                emergencyContact: number, medicalHistory: Appointment[]) {
        super(firstName, lastName, address, age);
        this.#patientID = patientID;
        this.phoneNumber = phoneNumber;
        this.emergencyContact = emergencyContact;
        this.medicalHistory = medicalHistory;
    }
    patientInfo() {
        const patientInf = `patient's name: ${this.firstName} ${this.lastName}, patient's ID: ${this.#patientID}`;
        console.log(patientInf);
        return patientInf 
    }
    getID() {
        return this.#patientID
    }
    editMedicHistory(appo: Appointment) {
        this.medicalHistory.push(appo);
    }
}

class MedicalStaff extends Patient{
    staffID: number;
    position: number;
    department: string;
    constructor(firstName: string, lastName:string, address: string,
            age: number, patientID: number, phoneNumber: number,
            emergencyContact: number, medicalHistory: Appointment[],
            staffID: number, position: number, department: string) {
        super(firstName, lastName, address,
            age, patientID, phoneNumber,
            emergencyContact, medicalHistory);
        this.staffID = staffID;
        this.position = position;
        this.department = department;
        }   
}

// 3)
class Doctor extends MedicalStaff{
    #doctorID: number;
    specialization: string;
    availability: any // change!!!
    constructor(firstName: string, lastName: string, address: string, age: number, patientID: number,
        phoneNumber: number, emergencyContact: number, medicalHistory: Appointment[], staffID: number,
        position: number, department: string, doctorID: number, specialization: string, availability: any) { // CHANGE!!!
        super(firstName, lastName, address, age, patientID, phoneNumber,
            emergencyContact, medicalHistory, staffID, position, department);
        this.#doctorID = doctorID;
        this.specialization = specialization;
    }
    doctorInfo() {
        const docInfo = `name: ${this.firstName} ${this.lastName}, ID: ${this.#doctorID}, specialization: ${this.specialization}`
        console.log(docInfo);
        return docInfo
    }
    getID() {
        return this.#doctorID
    }
}

// 4)
type stateOptions = 'cancelled'|'planned'|'done';
class Appointment{
    #patient: Patient;
    #doctor: Doctor;
    #date: string;
    #time: string;
    #state: stateOptions;
    constructor(patient: Patient, doctor: Doctor, date: string, time: string, state: stateOptions) {
        this.#patient = patient;
        this.#doctor = doctor;
        this.#date = date;
        this.#time = time;
        this.#state = state;
    }
    appointmentInfo() {
        const appoInfo = `
            patient: ${this.#patient.patientInfo()}, 
            doctor: ${this.#doctor.doctorInfo()}, 
            date: ${this.#date}, 
            time: ${this.#time} 
            `; 
            console.log(appoInfo);
            return appoInfo 
    }
    changeState(newState: stateOptions) {
        this.#state = newState;
    }
    getPatient() {
        return this.#patient
    }
    getDctor() {
        return this.#doctor
    }
    getDate() {
        return this.#date
    }
    getTime() {
        return this.#time
    }
}

class MedicalRecord{
    patient: Patient;
    doctor: Doctor;
    diagnosis: string;
    prescription: string;
    constructor(patient: Patient, doctor: Doctor, diagnosis: string, prescription: string) {
        this.patient = patient;
        this.doctor = doctor;
        this.diagnosis = diagnosis;
        this.prescription = prescription;
    }
}

// 5)
class Hospital{
    #patientsArr: Patient[];
    #doctorsArr: Doctor[];
    #appointmentsArr: Appointment[];
    #hospitalName: string;
    medicRecordArr: MedicalRecord[];
    constructor(patientsArr: Patient[], doctorsArr: Doctor[],
        appointmentsArr: Appointment[], hospitalName: string, medicRecordArr: MedicalRecord[]) {
        this.#patientsArr = patientsArr;
        this.#doctorsArr = doctorsArr;
        this.#appointmentsArr = appointmentsArr;
        this.#hospitalName = hospitalName;
        this.medicRecordArr = medicRecordArr;
    }
    doctorBySpecial(mySpecialization: string) {
        this.#doctorsArr.forEach((doctor) => {
            if (doctor.specialization === mySpecialization) return doctor
        })
        return 'no such specialization'
    }
    createMediclRecord(patient: Patient, doctor: Doctor, diagnosis: string, prescription: string) {
       let newReq: MedicalRecord = new MedicalRecord(patient, doctor, diagnosis, prescription);
       return newReq
    }
    addPateint(newPatient: Patient) {
        this.#patientsArr.push(newPatient)
    }
    addDoctor(newDoctor: Doctor) {
        this.#doctorsArr.push(newDoctor)
    }
    addAppointment(newAppointment: Appointment): void {
        this.#appointmentsArr.push(newAppointment)
    }
    allAppointsInfo() {
        this.#appointmentsArr.forEach((appoint) => {
            appoint.appointmentInfo()
        })
    }
    allAppointsByDoctorID(id: number) {
        this.#appointmentsArr.forEach((appointment) => {
            if (appointment.getDctor().getID() === id) appointment.appointmentInfo();
        })
    }
    alltheAppoByPatientID(id: number) {
        this.#appointmentsArr.forEach((appointment) => {
            if (appointment.getPatient().getID() === id) appointment.appointmentInfo()
        })
    }
    todayAppointments(date: string) {
        this.#appointmentsArr.forEach((appointment) => {
            if (appointment.getDate() === date) appointment.appointmentInfo
        })
    }
}

// let jony: Patient = new Patient("jony", "balboa", "brechia", 22, 12345, 1547095887, 123456789, []);
// let bilbo: Patient = new Patient("bilbo", "bagins", "maon bag", 50, 54321);
// let dolitel: Doctor = new Doctor("mr.", "dolitel", "london", 45, 56789, "very mumche etc");
// let rofeMadhim: Doctor = new Doctor("rofew", "madhim", "the moon", 579, 6544325, "very mumche etc");

// let appo1: Appointment = new Appointment(jony, dolitel, "27/08/23", "15:00");
// let appo2: Appointment = new Appointment(bilbo, rofeMadhim, "27/08/23", "15:00");

// let barzilay: Hospital = new Hospital([], [], [], "Barzilay");
// barzilay.addAppointment(appo1);
// barzilay.addAppointment(appo2);
// barzilay.alltheAppoByPatientID(12345)





