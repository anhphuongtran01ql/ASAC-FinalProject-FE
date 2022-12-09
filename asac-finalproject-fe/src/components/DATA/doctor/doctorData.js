const doctor = {
    avatar: "https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg",
    name: "Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng",
    description: "Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương </br> Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương <br> Nguyên Tổng Thư ký Hiệp hội Da liễu Việt Nam",
    moreInformation: "<li>Phó giáo sư, Tiến sĩ, Bác sĩ cao cấp chuyên khoa Da liễu" +
        "<li>Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương" +
        "<li>Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương" +
        "<li>Đạt chứng chỉ Diploma về Da liễu tại Viện da liễu Băng Cốc - Thái Lan" +
        "<li>Bác sĩ thường xuyên tham gia các Hội thảo, Hội nghị Quốc tế về Da liễu" +
        "<li>Hội viên của Hội Da liễu Đông Nam Á, Châu Á và Thế giới" +
        "<li>Giảng viên bộ môn Da liễu tại Đại Học Y Hà Nội" +
        "<li>Trưởng Bộ môn Da liễu, Trường Đại học Kinh doanh và Công nghệ" +
        "<li>Tốt nghiệp Đại học Y Hà Nội (1977)" +
        "<li>Nguyên Tổng Thư ký Hiệp hội Da liễu Việt Nam",
    examinationAndTreatment: "Phó Giáo sư khám và điều trị",
}
const scheduleInfo = {
    address: "<b>Phòng khám Chuyên khoa Da Liễu</b> </br> 207 Phố Huế - Hai Bà Trưng - Hà Nội",
    price: "300 000đ",
}

const timeData = [
    {
        time: "15:30 - 16:00",
        status:0
    },
    {
        time: "15:45 - 16:15",
        status:0
    },
    {
        time: "16:15 - 16:45",
        status:0
    },
    {
        time: "16:45 - 17:15",
        status:0
    },
    {
        time:  "17:15 - 17:45",
        status:0
    },
    {
        time:  "17:45 - 18:15",
        status:1
    }
]

const time = [
    {
        content: "15:30 - 16:00"
    },
    {
        content: "15:45 - 16:15",
    },
    {
        content: "16:00 - 16:30",
    },
    {
        content: "16:15 - 16:45",
    },
    {
        content: "16:30 - 17:00",
    },
    {
        content: "16:45 - 17:15",
    },
    {
        content: "17:00 - 17:30"
    },
    // {
    //     content: "17:45 - 18:15"
    // }
]

export {doctor, scheduleInfo, time, timeData}
