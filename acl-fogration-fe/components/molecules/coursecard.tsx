import { RiProjector2Line } from "react-icons/ri";
import { GiOldMicrophone } from "react-icons/gi";
import { HiVideoCamera } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { Button } from "@mui/material";

// let iconMap = new Map<string, any>([
//   ["camera", <HiVideoCamera className="h-32 w-32" key={1} />],
//   ["projector", <RiProjector2Line className="h-32 w-32" key={2} />],
//   ["microphone", <GiOldMicrophone className="h-32 w-32" key={3} />],
// ]);

const CourseCard = () => {

  const courses = [
    { id: 1, name: "CSEN702", totalHours: 6, rating: 5, price: 40 },
    { id: 2, name: "CSEN704", totalHours: 8, rating: 4, price: 40 },
    {
      id: 3,
      name: "CSEN703",
      totalHours: 4,
      rating: 1,
      price: 40,
    },
  ];

  if (courses.length === 0) {
    return <div className="text-center "> No courses</div>;
  }
  const stars = (rating: number) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <div>
          <AiFillStar />
        </div>
      );
    }
    return stars;
  };

  
  const discount =(discount:number,price:number) =>{
      if(discount == 0){
    return <div className="text-l">{price} $$</div>

  }
  else{ 
    <div className="flex flex-row">
    <div className="text-l line-through">{price} $$</div>
     <div className="text-l">{(price) * (1-discount)} $$</div>
     </div>
  }
   }
  //  var course ={
  //   Course_ID: NaN, //course id m7tag yetzabat string
  //   Course_Title: "",
  //   Course_Subject: "",
  //   Course_Description: "",
  //   Course_Price: NaN,
  //   Course_Rating: NaN,
  //   Course_Instructor: NaN,
  //   Course_Hours: NaN,
  //   Course_Country: "",
  //   Course_Discount: NaN,
  //   Course_Discount_Duration: NaN,
  //   Course_Subtitle: [""],
  //   Course_Users: [""],
  //   Course_Review: [""],
  //   Course_Rate: [""],
  //   Course_Exam: [""],
  //   Course_What_You_Will_Learn: [""],
  //   }
  return (
    <div className="m-2 grid grid-cols-1 place-items-center ">
      {courses.map((course) => (
        <div
          key={course.id}
          className=" border-1 flex h-52 w-2/3 flex-col items-start gap-3 justify-start  border-gray-300 p-2 text-center text-darkgrey shadow-lg"
        >
          <div className=" font-bold text-2xl" key={course.id}>
            {course.name}
            <div className="flex flex-row">{stars(course.Course_Rating)}</div>
          </div>

          
          {/* <div className="text-l">{course.Course_Price} $$</div> */}
          {discount(course.Course_Discount,course.Course_Price)}
          <div className="text-l"> {course.Course_Hours} Credit Hours</div>
          <Button variant="contained">Book Course</Button>

          {/* //Course content  */}
          <div className="bg-black3 rounded-md m-6 flex flex-col p-2">
            <h1 className="text-white font-bold text-3xl ">Course Content</h1>
            {course.Course_Subtitle.map((subtitle) => {
              return (
                <div>
                  <div className="flex flex-col gap-2 ">
                    <div className="flex flex-row gap-2 justify-between">
                      <div className="text-xl font-bold">
                        {subtitle.Subtitle_Name}
                      </div>
                      <div className="text-l flex items-end ">
                        Total Time: {subtitle.Subtitle_Hours} mins
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 w-[100%] ">
                    {subtitle.Subtitle_Video.map((video) => {
                      return (
                        <div>
                          <Link href={video.Video_Link}>
                            <img
                              className="flex-shrink-0"
                              src="/images/pausedvideo.png"
                              alt="No image yet 😅"
                            />
                          </Link>

                          <div className="text-l">
                            {video.Video_Description}
                          </div>
                          <div className="text-l">
                            {video.Video_Length} mins
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-1">
              <div className="text-white font-bold text-l">Reviews</div>
              <div className="flex flex-row gap-2">
                {course.Course_Review.map((review,index) => (
                  <div
                    key={index}
                    className="flex bg-gradient-to-l from-gray-700 to-black2 text-white p-6 rounded-md w-52"
                  >
                    {review}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default CourseCard;
