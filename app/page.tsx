import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
      <div>
        <Image height={2000} width={2000} className="mb-12 h-32 w-fit rounded-full" alt="logo" src="/Basic.png" />
        <PatientForm/>
        <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">        © 2024 JoyCare
          </p>
          <Link className="text-green-500" href="/?admin=true">
          Admin
          </Link>
        </div>
      </div>
      </section>
      <Image alt="doctor" height={800} width={900} src="/patient-form.jpg" />
    </div>
  );
}
