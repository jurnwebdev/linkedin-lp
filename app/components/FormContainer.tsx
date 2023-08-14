
import Image from "next/image"
import Link from "next/link"
import appleLogo from '../../public/apple-logo.png'

export default function FormContainer() {
    return (
        <main className='h-[80vh] flex flex-col justify-center items-center'>
            <div className='w-[400px] h-auto p-8 rounded-lg border-[1px] border-gray-400 shadow-lg flex flex-col'>
                <h2 className="text-3xl font-bold">Sign in</h2>
                <p className='text-[14px]'> Stay updated on your professional world</p>


                <form className='flex flex-col mt-4'>
                    <input type='text' placeholder='Email or Phone' className='w-full p-3 border-[1px] border-black text-[14px] rounded-sm' />

                    <input type='password' placeholder='Password' className='w-full p-3 border-[1px] border-black text-[14px] rounded-sm my-4' />

                    <Link href="#" className="text-[#0073B0] mb-4">Forgot Password?</Link>

                    <button className='bg-[#0073B0] border-[1px] border-[#0073B0] rounded-3xl p-3 w-full text-white hover:bg-black hover:text-white'>Sign in</button>
                </form>

                <div className="flex justify-between items-center my-2"><span className="w-[140px] h-[1px] bg-gray-300"></span>or<span className="w-[140px] h-[1px] bg-gray-300"></span></div>
                <button className='bg-white border-[1px] border-black rounded-3xl p-3 w-full text-black flex gap-2 justify-center items-center mt-2'>
                    <Image src={appleLogo} width={20} height={20} alt="apple logo"></Image>Sign in with Apple</button>
            </div>
        </main>
    )
}
