import Greeting from "./component/page";
import Card from "./card/page";
import Links from "./links/page";

export default function Home() {
  const teacher = "Do You want to be a Teacher?, Click here to register";
  const student = "Do You want to be a Student?, Click here to register";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-white text-2xl mt-6">School Management System</h1>

        <Greeting />

        <div className="mt-10 flex flex-col items-center justify-center gap-10 lg:flex-row">
          <Card text="Teacher" description={teacher} />
          <Card text="Student" description={student} />
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-10 lg:flex-row">
          <Links name="Teacher" />
          <Links name="Student" />
        </div>
      </div>
    </main>
  );
}
