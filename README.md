# Fogration Courses
The purpose of ths website, is to create a complete Online Learning System. An Online Learning System which is a web application through which users can enroll to pre-recorded courses online which is given by certified instructors. The content is delivered through videos and assessment for each course is done through online mcq exams. The website abide by a flexible learning solution where users self-pace their learnings and can start by any chapter in the course they want but still the website sort the recommended chapters order. This allows the user to tailor their learning program based on their time and need. 

## Table of Contents

- [Motivation](#Motivation)
- [Technologies](#Technologies)
- [Screenshots](#Screenshots)
- [Project Structure](#project_structure)
- [Code Examples](#Code_Examples) 
- [How to use?](#How_to_Use?)
- [Contributing](#Contributing)
- [License](#License)



## Motivation

## Technologies

1. [React](https://reactjs.org/)
2. [Node.js](https://nodejs.org/en/)
3. [Typescript](https://www.typescriptlang.org/)
4. [MongoDB](https://www.mongodb.com/)
5. [Axios](https://axios-http.com/)

## Screenshots 



## Project Structure 

#### 1. Backend Structure

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

#### 2. Frontend Structure

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

## Code_Examples

### receiving an email to change a forgotten password

```node
router.post("/forgotPassword", async (req, res) => {
	try {
		//const x= req.body.Instructor_ID  
    const email = req.body.Email
    if(!(await instructor.findOne({Instructor_Email:email}))){
      if(!(await individualUser.findOne({individualUser_Email:email}))){
        if(!(await corporateUser.findOne({CorporateUser_Email:email}))){
          return res
				.status(409)
				.send({ message: "User with given email does not exist!" });
    }
    else {
      const url = `http://localhost:3000/guest/corpPasswordReset/`;
      await sendEmail(email, "Password Reset", url);
    }
  }
    else{
      const url = `http://localhost:3000/guest/userPasswordReset/`;
      await sendEmail(email, "Password Reset", url);
    }

  }
    else{
    const url = `http://localhost:3000/guest/instructorPasswordReset/`;
		await sendEmail(email, "Password Reset", url);
    }

		res
			.status(200)
			.send({ message: "Password reset link sent to your email account" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

```

### Changing the forgotten Password after receiving the email

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


### Users Card

```TSX
const UsersCard: React.FC<{ users }> = ({ users }) => {
  const [type,setType] = useState("");
  useEffect(()=>{
    // localStorage.setItem("Type","CorporateUser")
    setType(localStorage.getItem("Type"));
  })
  const detailsLink = ()=>{
    if(type=="Instructor"){
      return "instructor"
      }
  else{
      return "user"
  }
  }
  
  if (users.length === 0) {
    return <div className="text-center text-xl text-black1 "> No users</div>;
  }

  return (
    <div className="bg-bc h-screen">
    <div className="grid grid-cols-2 text-white  bg-bc gap-4">
      {users.map((person) => (
        <div
          key={person.User_Name}
className="flex gap-4 flex-row-1 bg-black3 justify-between mx-6 my-4 rounded-lg py-3 px-4 h-20"
        >

              <div className="texl-l">Name: {person.User_Name} </div>
              <div className="text-l">Role: {person.User_Role} </div>
          <div className="text-l">Country: {person.User_Country}</div>
          <div className="text-l"> City: {person.User_City}</div>
          <div className="text-l"> Address: {person.User_Address}</div>
          <div className="flex flex-row gap-2">
            <Link href={detailsLink()}>
              <button                 className="bg-gradient-to-r from-purple to-babyblue text-white py-3 px-4 rounded w-36 border border-violet-400">
                More Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

``` 

### instructor profile

```tsx

const profile = () => {
  
const [instructor,setPerson]=useState([])
function getInstProf(){
  axios.post("http://localhost:8000/instructorProfile",{
    Instructor_ID:Number(localStorage.getItem("user_id"))
  }
 ).then((response) => {
   setPerson(response.data)
 }).catch((error) => console.log(error))
}


useEffect(()=>{
  getInstProf();
})
const router = useRouter();
 var authBool=false;
 function Auth(){
   localStorage.clear();
   localStorage.setItem("Login","false");
   localStorage.setItem("Type","");
   router.push("/guest/login");

 }
 const[Type,setType] = useState("Instructor");
 useEffect(()=>{
  if(authBool==true){
    Auth();
  }
  else{
    setType(localStorage.getItem("Type"));}});
  if(Type!="Instructor"){
    authBool=true;
   }
 else{
 
  return (
    <div>
        <Layout>
        <div>
            <InstructorProfile instructor={instructor}/>

        </div>
      </Layout>
    </div>
  )
}
}

```

## How to Use?
#### Download this code in addition to the [backend code](https://github.com/Andysm21/ACL_Fogration_BE) 

#### before running make sure to install any missing tools
---> frontend
```txs
	ACL_Fogration_FE\acl-fogration-fe> npm i
```

---> backend
```txs
	ACL_Fogration_BE\src> npm i
```
#### Run both frontend and backend codes simultaneously
---> For frontend run using 
```txs
	ACL_Fogration_FE\acl-fogration-fe> npm run dev
```

---> For backend run using 
```txs
	ACL_Fogration_BE\src> node app.js
```

#### You can sign up as a trainee or if you want to take a look on the admin side view or the instructor these are possible usernames and passwords for testing.


| User Type | username | password |
| ------------ | ------------- |------------- |
| Admin  | Admin1  | Admin1 |
| Instructor | Inst2 | Inst2 |
| Corporate user | Corp1 | Corp1 |
| Individual user | Ind1 | Ind1 |

## Contributing

## License 

## Authors 
1. [Salma Sleem](https://github.com/salmasleem)
2. [Nour Shehab](https://github.com/NourShehab)
3. [Hana Pasha](https://github.com/HanaPasha)
4. [Andrew Shehata](https://github.com/Andysm21)
5. [Malak ElKhashab](https://github.com/malakel-khashab)
6. [Yahya Essam](https://github.com/yahyae07)

