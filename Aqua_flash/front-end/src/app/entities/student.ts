// Entity class for Student

export class Student {
    UserId:String;
    studentId: string;
    studentFname: string;
    studentFull:String;
    studentLname: string;
    studentAddress: string;
    studentCellPhone: string;
    studentFixedPhone: string;
    studentEmail: string;
    studentImgLink: string;
    studentDescription: string;
    studentDOB:string;
    studentSchool:string;
    studentGrade:string;
    studentParentName:string;
    studentGender:string;

    // getters
    public getId(): string {
        return this.studentId;
    }

    public getFirstName(): string {
        return this.studentFname;
    }

    public getLastName(): string {
        return this.studentLname;
    }

    public getAddress(): string {
        return this.studentAddress;
    }

    public getPhone(): string {
        return this.studentPhone;
    }

    public getEmail(): string {
        return this.studentEmail;
    }

    public getImgLink(): string {
        return this.studentImgLink;
    }

    public getDescription(): string {
        return this.studentDescription;
    }

    // setters
    public setId(id: string) {
        this.studentId = id;
    }

    public setFirstName(fname: string) {
        this.studentFname = fname;
    }

    public setLastName(lname: string) {
        this.studentLname = lname;
    }

    public setAddress(address: string) {
        this.studentAddress = address;
    }

    public setPhone(phone: string) {
        this.studentPhone = phone;
    }

    public setEmail(email: string) {
        this.studentEmail = email;
    }

    public setImgLink(imglink: string) {
        this.studentImgLink = imglink;
    }

    public setDescription(des: string) {
        this.studentDescription = des;
    }
}