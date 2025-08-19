// // app/page.tsx
// import Layout from "./layout";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <Layout>
//       <section className="flex flex-col items-center justify-center text-center py-24">
//         <h2 className="text-5xl font-extrabold">Hi, I’m [Your Name] 👋</h2>
//         <p className="mt-6 text-lg text-gray-600 max-w-xl">
//           I’m a software developer passionate about building modern web
//           applications with clean design and solid architecture.
//         </p>
//         <Link
//           href="/projects"
//           className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
//         >
//           View My Work
//         </Link>
//       </section>

//       <section className="px-8 py-16 bg-gray-100">
//         <h3 className="text-3xl font-bold text-center mb-10">Featured Projects</h3>
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
//             <h4 className="text-xl font-semibold">Project One</h4>
//             <p className="mt-2 text-gray-600">
//               Short description of the project goes here.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
//             <h4 className="text-xl font-semibold">Project Two</h4>
//             <p className="mt-2 text-gray-600">
//               Another project description goes here.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
//             <h4 className="text-xl font-semibold">Project Three</h4>
//             <p className="mt-2 text-gray-600">
//               Another project description goes here.
//             </p>
//           </div>
//         </div>
//         <div className="text-center mt-10">
//           <Link
//             href="/projects"
//             className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
//           >
//             See All Projects
//           </Link>
//         </div>
//       </section>
//     </Layout>
//   );
// }
export default function HomePage() {
  return (
    <section className="max-w-4xl mx-auto text-center space-y-6">
      <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
      <p className="text-lg">
        I’m a software developer passionate about building full-stack applications.
      </p>
      <p className="text-lg">
        Explore my projects, learn about me, or get in touch!
      </p>
    </section>
  );
}
