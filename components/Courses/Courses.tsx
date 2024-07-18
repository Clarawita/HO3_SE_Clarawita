import React, { useState, useEffect } from "react";
import Image from "next/image";

type Topic = {
  topicId: number;
  name: string;
  content: string;
};

type Course = {
  id: number;
  course: string;
  description: string;
  imgUrl: string;
  totalTopics: number;
  topics: Topic[];
  lecturers: string[];
};

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://sistech-server.vercel.app/api/data"
        );
        const data = await response.json();

        console.log("fetched data", data);

        if (data && Array.isArray(data.data)) {
          setCourses(data.data);
        } else {
          console.error("wrong format", data);
        }
      } catch (error) {
        console.error("error fetching data", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="flex flex-col gap-16 pt-36 pb-16 justify-center items-center w-11/12 mx-auto">
      <h1 className="font-bold text-3xl">Courses</h1>
      {courses.length === 0 ? (
        <p>Loading courses...</p>
      ) : (
        <ul className="grid grid-cols-4 gap-5">
          {courses.map((course) => (
            <li
              className="bg-violet-200 flex flex-col gap-4 pt-5 p-4 rounded-lg"
              key={course.id}
            >
              <div className="flex flex-col items-center gap-2">
                <h2 className="font-bold text-lg text-center h-14 ">
                  {course.course}
                </h2>
                <Image
                  src={course.imgUrl}
                  alt={course.course}
                  width={200}
                  height={200}
                />
                <p>{course.description}</p>
              </div>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-bold">Topics:</h3>
                  <ul>
                    {course.topics.map((topic) => (
                      <li
                        className="list-decimal list-inside"
                        key={topic.topicId}
                      >
                        <strong className="text-base">{topic.name}</strong>: <p className="text-sm text-gray-700">{topic.content}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold pt-4">Lecturers:</h3>
                  <ul>
                    {course.lecturers.map((lecturer, index) => (
                      <li className="list-disc list-inside" key={index}>{lecturer}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Courses };
