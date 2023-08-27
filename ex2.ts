// 1)
class Person{
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// 2)
class Patient extends Person{
    patientID:number;
    constructor(firstName: string, lastName:string, patientID: number) {
        super(firstName, lastName);
        this.patientID = patientID;
    }
    patientInfo() {
        const patientInf = `patient's name: ${this.firstName} ${this.lastName}, patient's ID: ${this.patientID}`;
        console.log(patientInf);
        return patientInf
        
    }
}

// 3)
class Doctor extends Person{
    doctorID: number;
    specialization: string
    constructor(firstName: string, lastName: string, doctorID: number, specialization: string) {
        super(firstName, lastName);
        this.doctorID = doctorID;
        this.specialization = specialization;
    }
    doctorInfo() {
        const docInfo = `name: ${this.firstName} ${this.lastName}, ID: ${this.doctorID}, specialization: ${this.specialization}`
        console.log(docInfo);
        return docInfo
    }
}

// 4)
class Appointment{
    patient: Patient;
    doctor: Doctor;
    date: string;
    time: string;
    constructor(patient: Patient, doctor: Doctor, date: string, time: string) {
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
            return appoInfo
            
    }
}

// 5)
class Hospital{
    patientsArr: Patient[];
    doctorsArr: Doctor[];
    appointmentsArr: Appointment[];
    hospitalName: string;
    constructor(patientsArr: Patient[], doctorsArr: Doctor[], appointmentsArr: Appointment[], hospitalName: string) {
        this.patientsArr = patientsArr;
        this.doctorsArr = doctorsArr;
        this.appointmentsArr = appointmentsArr;
        this.hospitalName = hospitalName;
    }
    addPateint(newPatient: Patient) {
        this.patientsArr.push(newPatient)
    }
    addDoctor(newDoctor: Doctor) {
        this.doctorsArr.push(newDoctor)
    }
    addAppointment(newAppointment: Appointment): void {
        this.appointmentsArr.push(newAppointment)
    }
    allAppointsInfo() {
        this.appointmentsArr.forEach((appoint) => {
            appoint.appointmentInfo()
        })
    }
    allAppointsByDoctorID(id: number) {
        this.appointmentsArr.forEach((appointment) => {
            if (appointment.doctor.doctorID === id) appointment.appointmentInfo();
        })
    }
    alltheAppoByPatientID(id: number) {
        this.appointmentsArr.forEach((appointment) => {
            if (appointment.patient.patientID === id) appointment.appointmentInfo()
        })
    }
    todayAppointments(date: string) {
        this.appointmentsArr.forEach((appointment) => {
            if (appointment.date === date) appointment.appointmentInfo
        })
    }
}

let jony: Patient = new Patient("jony", "balboa", 12345);
let bilbo: Patient = new Patient("bilbo", "bagins", 54321);
let dolitel: Doctor = new Doctor("mr.", "dolitel", 56789, "very mumche etc");
let rofeMadhim: Doctor = new Doctor("rofew", "madhim", 6544325, "very mumche etc");

let appo1: Appointment = new Appointment(jony, dolitel, "27/08/23", "15:00");
let appo2: Appointment = new Appointment(bilbo, rofeMadhim, "27/08/23", "15:00");

let barzilay: Hospital = new Hospital([], [], [], "Barzilay");
barzilay.addAppointment(appo1);
barzilay.addAppointment(appo2);
barzilay.alltheAppoByPatientID(12345)





