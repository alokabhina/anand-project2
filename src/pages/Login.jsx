import React, { useState } from 'react'

const Login = () => {
    const [currentState, setCurrentState] = useState('Login');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }

    return (
        <div className='bg-gradient-to-b from-indigo-50 to-purple-50 min-h-screen pt-20 px-4'>
            <form onSubmit={onSubmitHandler} className='max-w-screen-sm mx-auto bg-white rounded-xl shadow-lg p-8 sm:p-12'>
                <div className='flex flex-col items-center mb-8'>
                    <div className='flex items-center gap-4 mb-4'>
                        <div className='w-10 h-[2px] bg-amber-400'></div>
                        <h1 className='prata-regular text-3xl text-indigo-900'>{currentState}</h1>
                        <div className='w-10 h-[2px] bg-amber-400'></div>
                    </div>
                    <p className='text-sm text-indigo-700'>Welcome to StyleNest</p>
                </div>

                <div className='space-y-6'>
                    {currentState === 'Login' ? null : (
                        <input 
                            className='w-full px-4 py-3 border-2 border-indigo-200 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all'
                            type="text" 
                            placeholder='Full Name' 
                            required 
                        />
                    )}
                    
                    <input 
                        className='w-full px-4 py-3 border-2 border-indigo-200 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all'
                        type="email" 
                        placeholder='Email Address' 
                        required 
                    />
                    
                    <input 
                        className='w-full px-4 py-3 border-2 border-indigo-200 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all'
                        type="password" 
                        placeholder='Password' 
                        required 
                    />
                    
                    <div className='flex justify-between text-sm text-indigo-700'>
                        <button type='button' className='hover:text-amber-500 transition-colors'>
                            Forgot your password?
                        </button>
                        <button 
                            type='button'
                            onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}
                            className='hover:text-amber-500 transition-colors'
                        >
                            {currentState === 'Login' ? 'Create account' : 'Login here'}
                        </button>
                    </div>

                    <button 
                        type='submit' 
                        className='w-full bg-amber-400 hover:bg-amber-300 text-indigo-900 font-semibold py-3 px-6 rounded-lg transition-all hover:shadow-md'
                    >
                        {currentState === 'Login' ? 'Sign In' : 'Create Account'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login