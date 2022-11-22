"use client"
import TextField from "common/components/formInput/TextField"
import Image from "next/image"
import logo from "assets/logo.svg"

export default function LoginPage() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src={logo}
          alt="Logo"
          width={80}
          height={80}
          className="m-auto"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-800">
          Welcome to Nowna
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <TextField id="email" type="email" name="email" label="Email" />
            <TextField id="password" name="password" label="Password" />

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
