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

### Change Password

```node
 router.post("/changeForgetPassword", async (req, res) => {
    const pass= req.body.Password
    const username=req.body.username
    if(await (await instructor.find({Instructor_username: username}).select('Instructor_username')).length > 0)
    {
      await instructor.findOneAndUpdate({Instructor_username: username},{Instructor_Password: pass})
    }
    //Choose another username.
else if(await (await Admin.find({Admin_Username: username}).select('Admin_Username')).length > 0){
    await Admin.findOneAndUpdate({Admin_Username: username},{Admin_Password: pass})
   }
else if(await (await corporateUser.find({CorporateUser_UserName: username}).select('CorporateUser_UserName')).length > 0){
  await corporateUser.findOneAndUpdate({CorporateUser_UserName: username},{CorporateUser_Password: pass})
    }
  else if(await (await individualUser.find({individualUser_UserName: username}).select('individual_Username')).length > 0)
    {
      await individualUser.findOneAndUpdate({individualUser_UserName: username},{individualUser_Password: pass})
  }       
  else{
    res.send("wrong username");
    
    }

});
```

## Authors 
1. [Salma Sleem](https://github.com/salmasleem)
2. [Nour Shehab]
3. [Hana Pasha]
4. [Andrew Shehata]
5. [Malak ElKhashab]
6. [Yahya Essam]

