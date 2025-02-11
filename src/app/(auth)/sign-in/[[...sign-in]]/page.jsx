import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <SignIn/>
      </div>
    </div>
  );
}

