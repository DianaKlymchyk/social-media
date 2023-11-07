import { AutoForm } from "@/src/components/AuthForm";
import Link from "next/link";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center pb-2 ">
            <h1 className='text-2xl font-extrabold mb-4 text-zinc-600 ml-2'>Authorization</h1>
            <ul className="pb-4 text-2xl text-center">
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About us</Link>
                </li>
                <li>
                    <Link href='/registry'>Registration</Link>
                </li>
            </ul>
            <AutoForm />
        </main>
    )

}