// import { RegistryForm } from "@/src/components/RegistryForm";
import RegistryForm from "@/src/components/RegistryForm";
import Link from "next/link";

export default function Registry() {
    return (

        <main className="flex min-h-screen max-h-screen flex-col items-center justify-center p-24">
            <h1 className='text-2xl font-extrabold mb-4 text-zinc-600 ml-2'>Registry page</h1>
            <ul className="pb-4 text-2xl text-center">
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About us</Link>
                </li>
                <li>
                    <Link href='/auth'>Authorization</Link>
                </li>
                <RegistryForm />
            </ul>
        </main>
    )
}