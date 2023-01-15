# Fogration Courses
The purpose of ths website, is to create a complete Online Learning System. An Online Learning System which is a web application through which users can enroll to pre-recorded courses online which is given by certified instructors. The content is delivered through videos and assessment for each course is done through online mcq exams. The website abide by a flexible learning solution where users self-pace their learnings and can start by any chapter in the course they want but still the website sort the recommended chapters order. This allows the user to tailor their learning program based on their time and need. 


## Technologies:  
1. [React](https://reactjs.org/)
2. [Node.js](https://nodejs.org/en/)
3. [Typescript](https://www.typescriptlang.org/)
4. [MongoDB](https://www.mongodb.com/)
5. [Axios](https://axios-http.com/)


## Project Structure 

### 1. Backend Structure

<details>
    
```bash
ACL_Fogration_BE
├─ .env
├─ client_secret.json
├─ client_secret.json.json
├─ Controller
│  ├─ accounts.js
│  ├─ courses.js
│  ├─ exams.js
│  └─ instructor.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ Routes
│  ├─ accountsRouter.js
│  ├─ coursesRouter.js
│  └─ instructorRouter.js
├─ Schemas
│  ├─ Administrator.js
│  ├─ CorporateUser.js
│  ├─ CorpRequest.js
│  ├─ Course.js
│  ├─ Exam.js
│  ├─ IndividualUser.js
│  ├─ Instructor.js
│  ├─ Problem.js
│  ├─ Question.js
│  ├─ RefundRequest.js
│  ├─ StudentTakeCourse.js
│  ├─ StudentTookExam.js
│  ├─ Subtitle.js
│  └─ Video.js
├─ src
│  ├─ app.js
│  └─ client_secret.json.json
├─ Uploads
│  ├─ Certificate.pdf
│  └─ Notes.pdf
└─ utils
   ├─ sendCertificate.js
   └─ sendEmail.js

```
</details>

### 2. FrontEnd Structure

<details>

```
ACL_Fogration_FE
├─ acl-fogration-fe
│  ├─ .eslintrc.json
│  ├─ .next
│  │  ├─ build-manifest.json
│  │  ├─ cache
│  │  │  ├─ swc
│  │  │  │  └─ plugins
│  │  │  │     └─ v4
│  │  │  └─ webpack
│  │  │     ├─ client-development
│  │  ├─ package.json
│  │  ├─ react-loadable-manifest.json
│  │  ├─ server
│  │  │  ├─ middleware-build-manifest.js
│  │  │  ├─ middleware-manifest.json
│  │  │  ├─ middleware-react-loadable-manifest.js
│  │  │  ├─ pages
│  │  │  │  ├─ index.js
│  │  │  │  ├─ user
│  │  │  │  │  ├─ courses.js
│  │  │  │  │  └─ viewcourse.js
│  │  │  │  ├─ user.js
│  │  │  │  ├─ _app.js
│  │  │  │  ├─ _document.js
│  │  │  │  └─ _error.js
│  │  │  ├─ pages-manifest.json
│  │  │  ├─ webpack-runtime.js
│  │  │  └─ _error.js
│  │  ├─ static
│  │  │  ├─ chunks
│  │  │  │  ├─ amp.js
│  │  │  │  ├─ main.js
│  │  │  │  ├─ pages
│  │  │  │  │  ├─ index.js
│  │  │  │  │  ├─ user
│  │  │  │  │  │  ├─ courses.js
│  │  │  │  │  │  └─ viewcourse.js
│  │  │  │  │  ├─ user.js
│  │  │  │  │  ├─ _app.js
│  │  │  │  │  └─ _error.js
│  │  │  │  ├─ polyfills.js
│  │  │  │  ├─ react-refresh.js
│  │  │  │  ├─ webpack.js
│  │  │  │  └─ _error.js
│  │  │  ├─ development
│  │  │  │  ├─ _buildManifest.js
│  │  │  │  └─ _ssgManifest.js
│  │  │  └─ webpack
│  │  └─ trace
│  ├─ components
│  │  ├─ atoms
│  │  │  ├─ countries.ts
│  │  │  ├─ InputField.tsx
│  │  │  ├─ Nav.tsx
│  │  │  ├─ NavGuest.tsx
│  │  │  ├─ NavGuestLogin.tsx
│  │  │  ├─ Sort.tsx
│  │  │  └─ types.ts
│  │  ├─ molecules
│  │  │  ├─ AddAdmin.tsx
│  │  │  ├─ AddCourse.tsx
│  │  │  ├─ AddDiscount.tsx
│  │  │  ├─ AddInstructor.tsx
│  │  │  ├─ AddSubtitle.tsx
│  │  │  ├─ AddTrainee.tsx
│  │  │  ├─ AddVideo.tsx
│  │  │  ├─ AdminCourseCard.tsx
│  │  │  ├─ AdminCoursesCard.tsx
│  │  │  ├─ AdminViewInstructor.tsx
│  │  │  ├─ ApproveRequest.tsx
│  │  │  ├─ CorporateRequests.tsx
│  │  │  ├─ CourseCreation.tsx
│  │  │  ├─ CourseRefund.tsx
│  │  │  ├─ CoursesCard.tsx
│  │  │  ├─ Filter.tsx
│  │  │  ├─ FollowUp.tsx
│  │  │  ├─ GuestCourseCard.tsx
│  │  │  ├─ GuestCourses.tsx
│  │  │  ├─ GuestViewInstructor.tsx
│  │  │  ├─ IndividualUserProfile.tsx
│  │  │  ├─ InstructorCourseCard.tsx
│  │  │  ├─ InstructorCoursesCard.tsx
│  │  │  ├─ InstructorMyCourseCard.tsx
│  │  │  ├─ InstructorMyCoursesCard.tsx
│  │  │  ├─ InstructorProfile.tsx
│  │  │  ├─ InstructorViewInstructor.tsx
│  │  │  ├─ Modal.tsx
│  │  │  ├─ Payment.tsx
│  │  │  ├─ Question.tsx
│  │  │  ├─ Refund.tsx
│  │  │  ├─ RefundRequests.tsx
│  │  │  ├─ ReportCourse.tsx
│  │  │  ├─ ReportRequests.tsx
│  │  │  ├─ RequestAccess.tsx
│  │  │  ├─ Selector.tsx
│  │  │  ├─ Sidebar.tsx
│  │  │  ├─ SolveReport.tsx
│  │  │  ├─ SubtitleCreation.tsx
│  │  │  ├─ TraineeProfile.tsx
│  │  │  ├─ TraineeReports.tsx
│  │  │  ├─ TraineeWallet.tsx
│  │  │  ├─ UserCourseCard.tsx
│  │  │  ├─ UserCoursesCard.tsx
│  │  │  ├─ UserMyCourseCard.tsx
│  │  │  ├─ UserMyCoursesCard.tsx
│  │  │  ├─ UsersCard.tsx
│  │  │  ├─ ViewInstructor.tsx
│  │  │  └─ ViewUser.tsx
│  │  ├─ organisms
│  │  │  ├─ HeaderAccounts.tsx
│  │  │  ├─ HeaderAdminCourses.tsx
│  │  │  ├─ HeaderGuest.tsx
│  │  │  ├─ HeaderInstructorCourses.tsx
│  │  │  ├─ HeaderInstructorMyCourses.tsx
│  │  │  ├─ HeaderUser.tsx
│  │  │  ├─ HeaderUserCourses.tsx
│  │  │  ├─ HeaderUserMyCourses.tsx
│  │  │  ├─ UsersAdditions.tsx
│  │  │  └─ YoutubeEmbed.tsx
│  │  └─ templates
│  │     ├─ Layout.tsx
│  │     └─ LayoutGuest.tsx
│  ├─ interfaces.ts
│  ├─ next-env.d.ts
│  ├─ next.config.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ pages
│  │  ├─ admin
│  │  │  ├─ accounts.tsx
│  │  │  ├─ corporateRequests.tsx
│  │  │  ├─ course.tsx
│  │  │  ├─ courses.tsx
│  │  │  ├─ index.tsx
│  │  │  ├─ instructor.tsx
│  │  │  ├─ refunds.tsx
│  │  │  ├─ reports.tsx
│  │  │  ├─ user.tsx
│  │  │  ├─ users.tsx
│  │  │  └─ viewuser.tsx
│  │  ├─ api
│  │  │  └─ hello.js
│  │  ├─ guest
│  │  │  ├─ corpPasswordReset.tsx
│  │  │  ├─ course.tsx
│  │  │  ├─ enterEmail.tsx
│  │  │  ├─ guestcourses.tsx
│  │  │  ├─ instructor.tsx
│  │  │  ├─ instructorPasswordReset.tsx
│  │  │  ├─ login.tsx
│  │  │  ├─ policies.tsx
│  │  │  ├─ signup.tsx
│  │  │  ├─ userPasswordReset.tsx
│  │  │  └─ [Course_ID].tsx
│  │  ├─ index.tsx
│  │  ├─ instructor
│  │  │  ├─ contracts.tsx
│  │  │  ├─ courses.tsx
│  │  │  ├─ createcourse.tsx
│  │  │  ├─ createexam.tsx
│  │  │  ├─ createsubtitle.tsx
│  │  │  ├─ index.tsx
│  │  │  ├─ instructor.tsx
│  │  │  ├─ mycourses.tsx
│  │  │  ├─ profile.tsx
│  │  │  ├─ reports.tsx
│  │  │  ├─ viewcourse.tsx
│  │  │  └─ viewmycourse.tsx
│  │  ├─ user
│  │  │  ├─ correctanswers.tsx
│  │  │  ├─ courses.tsx
│  │  │  ├─ index.tsx
│  │  │  ├─ instructor.tsx
│  │  │  ├─ mycourses.tsx
│  │  │  ├─ profile.tsx
│  │  │  ├─ reports.tsx
│  │  │  ├─ score.tsx
│  │  │  ├─ solveexam.tsx
│  │  │  ├─ viewcourse.tsx
│  │  │  ├─ viewmycourse.tsx
│  │  │  ├─ wallet.tsx
│  │  │  └─ watchvideo.tsx
│  │  └─ _app.js
│  ├─ postcss.config.js
│  ├─ public
│  │  ├─ images
│  │  │  ├─ bgacl.jpeg
│  │  │  ├─ bgnew.jpeg
│  │  │  ├─ booksbg.jpeg
│  │  │  ├─ pausedvideo.png
│  │  │  └─ projbg.jpeg
│  │  └─ vercel.svg
│  ├─ README.md
│  ├─ styles
│  │  ├─ globals.css
│  │  └─ Home.module.css
│  ├─ tailwind.config.js
│  └─ tsconfig.json
├─ New Text Document.txt
├─ package-lock.json
├─ package.json
└─ README.md

```
</details>

## Code Examples

### 1. Backend

### I) View course with progress and exam grade

```
router.post("/viewMyCourse/:id", async (req, res) => {
  var id = req.params.id;
  var userId = req.body.UserID
  var type = req.body.type
  var hours=0;
  if(req.params.id=="null"){ 
    console.log("Moshkela")
  }
  else{
  var courseID;
  var progress;
  await (await StudentTakeCourse.find({StudentTakeCourse_StudentID:userId,StudentTakeCourse_Type:type,StudentTakeCourse_CourseID:id})).map((ex) => 
  {
    progress =ex.StudentTakeCourse_Progress;
  }
  ) 

  const courses = await course.find({Course_ID:Number(id) },'-_id');

  var {Course_Subtitle} = courses[0];
  var subtitle = []
  var videos = []
  for(let i = 0; i < Course_Subtitle.length; i++)
  {
    var tempVideo = [];
    subtitleTemp = await Subtitle.find({Subtitle_ID: Course_Subtitle[i]},'-_id');
    var {Subtitle_Video} = subtitleTemp[0];
    
    for(let j = 0; j < Subtitle_Video.length; j++){
    
      var videosTemp= await Video.find({Video_ID: Subtitle_Video[j]},'-_id');
      hours=hours+Number(videosTemp[0].Video_Length);

      const Videos = {
          Video_ID: videosTemp[0].Video_ID,
          Video_Link: videosTemp[0].Video_Link,
          Video_Subtitle: videosTemp[0].Video_Subtitle,
          Video_Description: videosTemp[0].Video_Description,
          Video_Length: videosTemp[0].Video_Length
      }
      tempVideo[j] = Videos;
      
    }
    videos[i] = tempVideo;
    const subtitleObj = {
      Subtitle_ID: subtitleTemp[0].Subtitle_ID,
      Subtitle_Name: subtitleTemp[0].Subtitle_Name,
      Subtitle_Course_ID: subtitleTemp[0].Subtitle_Name,
      Subtitle_Video: videos[i],
      Subtitle_Hours: subtitleTemp[0].Subtitle_Hours
    }
    subtitle[i] = subtitleObj;
  }
  
  var exams = courses[0].Course_Exam;

  var ExamObj = [];
  var grade =0;
  for(let i = 0; i < exams.length; i++){
    var x = await StudentTookexam.find({StudentTookExam_Student_ID:userId,StudentTookExam_Type:type,StudentTookExam_Exam_ID:exams[i]});
    if(x.length > 0){
    await (await StudentTookexam.find({StudentTookExam_Student_ID:userId,StudentTookExam_Type:type,StudentTookExam_Exam_ID:exams[i]})).map((ex) => 
    {
      grade =ex.StudentTookExam_Grades;
    }
    ) 
  }
  else{
    grade=0;
  }
    const ExamTemp = await Exam.find({Exam_ID: exams[i]},'-_id');

    var QuestionObj = [];
    for(let j = 0; j< ExamTemp[0].Exam_Question_ID.length; j++){
      var qq = await Question.find({Question_ID: ExamTemp[0].Exam_Question_ID[j]},'-_id -createdAt -updatedAt -__v');
      // console.log(qq)
      qq = qq[0];
      const tempQ = {
          Question_ID: qq.Question_ID,
          Question_Name: qq.Question_Name,
          Question_choices: qq.Question_choices,
          Question_Correct_Answers: qq.Question_Correct_Answers,
          Question_Grade: qq.Question_Grade,

      }
      
      QuestionObj.push(tempQ);

    }

   
    const exam = {
      Exam_ID: ExamTemp[0].Exam_ID,
      Exam_Question_ID: QuestionObj,
      Exam_Grade: ExamTemp[0].Exam_Grade,
      Exam_Instructor_ID: ExamTemp[0].Exam_Instructor_ID,
      Exam_Course_ID: ExamTemp[0].Exam_Course_ID,
      Exam_Grade:grade,
    }
    ExamObj.push(exam)
  }
  
  var instructor = await Instructor.findOne({Instructor_ID: courses[0].Course_Instructor}).select('-id -createdAt -updatedAt -_v')
  const CourseT = {
    Course_ID: courses[0].Course_ID,
    Course_Title: courses[0].Course_Title,
    Course_Subject: courses[0].Course_Subject,
    Course_Description: courses[0].Course_Description,
    Course_Price: courses[0].Course_Price,
    Course_Rating: courses[0].Course_Rating,
    Course_Instructor: instructor,
    Course_Country: courses[0].Course_Country,
    Course_Discount: courses[0].Course_Discount,
    Course_Discount_Duration: courses[0].Course_Discount_Duration,
    Course_Subtitle: subtitle,
    Course_Trainee: courses[0].Course_Trainee.length,
    Course_Review: courses[0].Course_Review,
    Course_Rate: courses[0].Course_Rate,
    Course_Exam: ExamObj,
    Course_Progress:progress,
    Course_Hours:Math.floor(hours/60)

  };
res.send(CourseT)
  }
})

```

## Authors 
1. [Salma Sleem](https://github.com/salmasleem)
2. [Nour Shehab]
3. [Hana Pasha]
4. [Andrew Shehata]
5. [Malak ElKhashab]
6. [Yahya Essam]

