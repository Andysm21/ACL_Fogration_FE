export interface trainee {
  Trainee_ID: number;
  Trainee_Name: string;
}
export interface subtitle {
  Subtitle_ID: number; // string 3lshan 23rad a5do mn om el url
  Subtitle_Name: string;
  Subtitle_Course_ID: string;
  Subtitle_Video: video[];
  Subtitle_Hours: string;
}
export interface video {
  Video_ID: number;
  Video_Link: string;
  Video_Subtitle: string;
  Video_Description: string;
  Video_Length: number;
}


export interface exam {
  Exam_ID: string;
  Exam_Question_ID: questions[];
  Exam_Grade: number;
  Exam_Instructor_ID: string;
  Exam_Course_ID: string;
}
export interface questions {
  Question_ID: string;
  Question_Name: string;
  Question_choices: string[];
  Question_Correct_Answers: string;
  Question_Grade: string;
}
export interface instructor{
  Instructor_ID: string;
  Instructor_username: string;
  Instructor_FirstName: string;
  Instructor_LastName: string;
  Instructor_Email: string;
  Instructor_Password: string;


}

export interface course {
  _id: {
    $oid: string;
  };
  Course_ID: number; //course id m7tag yetzabat string
  Course_Title: string;
  Course_Subject: string;
  Course_Description: string;
  Course_Price: number;
  Course_Rating: number;
  Course_Instructor: string;
  Course_Hours: number;
  Course_Country: string;
  Course_Discount: number;
  Course_Discount_Duration: number;
  Course_Subtitle: subtitle[];
  Course_Trainee: trainee[];
  Course_Review: string[];
  Course_Rate: string[];
  Course_Exam: exam[];
  Course_What_You_Will_Learn: string[];
};
export interface user {
  _id: {
    $oid: string;
  },
  User_ID: number;
  User_Name: string;
  User_Email: string;
  User_Password: string;
  User_Role: string;
  User_Country: string;
  User_City: string;
  User_Address: string;
  User_Phone: string;
  User_Courses: course[];
  User_isCorporate: boolean;
};
export interface users {
  users: user[];
}