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
    <div className="flex flex-col gap-16 pt-36 justify-center items-center w-11/12 mx-auto">
      <h1 className="font-bold text-3xl">Courses</h1>
      {courses.length === 0 ? (
        <p>Loading courses...</p>
      ) : (
        <ul className="grid grid-cols-4 gap-5">
          {courses.map((course) => (
            <li className="bg-violet-200 flex flex-col gap-4 " key={course.id}>
              <div className="flex flex-col items-center gap-2">
                <h2 className="">{course.course}</h2>
                <Image
                  src={course.imgUrl}
                  alt={course.course}
                  width={250}
                  height={150}
                />
                <p>{course.description}</p>
              </div>
              <div>
                <h3>Topics:</h3>
                <ul>
                  {course.topics.map((topic) => (
                    <li key={topic.topicId}>
                      <strong>{topic.name}</strong>: {topic.content}
                    </li>
                  ))}
                </ul>
                <h3>Lecturers:</h3>
                <ul>
                  {course.lecturers.map((lecturer, index) => (
                    <li key={index}>{lecturer}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Courses };
