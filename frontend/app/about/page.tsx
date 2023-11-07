'use client'

import Image from "next/image"
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { AboutForm } from "@/src/components/AboutForm"
import axios from "axios"



export default function Page() {
    const [users, setUsers] = useState([]);
    async function getUser() {

        try {
            console.log('...One')
            const response = await axios.get('http://localhost:5000/users');
            setUsers(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUser()
        console.log('...Users')
    }, [])

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-2">
            <h1 className="text-2xl font-extrabold mb-2 text-zinc-600">About us</h1>
            {/* {users.map((user: any) => {
                return (
                    <div key={user.id}>{user.email}</div>
                )
            })} */}
            <ul className="pb-4 text-2xl text-center">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/auth">Authorization</Link>
                </li>
                <li>
                    <Link href='/registry'>Registration</Link>
                </li>
            </ul>
            <AboutForm />
        </main>
    )
}
