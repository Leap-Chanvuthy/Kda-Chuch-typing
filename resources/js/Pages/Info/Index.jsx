import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index({
    auth,
    users_count,
    tests_count,
    reviews_count,
    total_time,
    total_typed,
    average_accuracy,
    average_wpm,
    average_error,
}) {

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Info" />
            <div className='my-20'>
                <p className='text-center text-gray-400 text-lg font-medium'>
                    Created with love by King-Typer Team.
                </p>
                <p className='text-center text-gray-400 text-lg font-medium'>
                    Supported and expanded by many awesome people.
                </p>
                <p className='text-center text-gray-400 text-lg font-medium'>
                    Launched on 15th of May, 2023
                </p>
            </div>

            <div className='grid grid-cols-3 gap-3 justify-items-center'>
                <div className='text-center text-lg'>
                    <p className='text-gray-400'>Total users joined</p>
                    {
                        users_count ? <p className='text-gray-100 text-7xl'>{users_count}</p> : <p className='text-gray-100 text-7xl'>0</p>
                    }

                </div>
                <div className='text-center text-lg'>
                    <p className='text-gray-400'>Total tests started</p>
                    {
                        tests_count ? <p className='text-gray-100 text-7xl'>{tests_count}</p> : <p className='text-gray-100 text-7xl'>0</p>

                    }

                </div>
                <div className='text-center text-lg'>
                    <p className='text-gray-400'>Total reviews</p>
                    {
                        reviews_count ? <p className='text-gray-100 text-7xl'>{reviews_count}</p> : <p className='text-gray-100 text-7xl'>0</p>
                    }

                </div>
            </div>

            <div className='grid grid-cols-3 gap-3 justify-items-center'>
                <div className='text-center text-lg'>
                    <p className='text-gray-400'>Total time typing</p>
                    {
                        total_time ? <p className='text-gray-100 text-7xl'>{total_time}</p> : <p className='text-gray-100 text-7xl'>0</p>
                    }

                </div>
                <div className='text-center text-lg'>
                    <p className='text-gray-400'>Total typed</p>
                    {
                        total_typed ? <p className='text-gray-100 text-7xl'>{total_typed}</p> : <p className='text-gray-100 text-7xl'>0</p>
                    }

                </div>
                <div className='text-center text-lg'>
                    <p className='text-gray-400'>Average Accuracy</p>
                    {
                        average_accuracy ? <p className='text-gray-100 text-7xl'>{average_accuracy.toFixed(1)}</p> : <p className='text-gray-100 text-7xl'>0</p>
                    }

                </div>
            </div>

            <div className='grid grid-cols-3 gap-3 justify-items-center'>
                <div className='text-center text-lg'>
                    <p className='text-gray-400'>Average WPM</p>
                    {
                        average_wpm ? <p className='text-gray-100 text-7xl'>{average_wpm.toFixed(1)}</p> : <p className='text-gray-100 text-7xl'>0</p>
                    }

                </div>
                <div className='text-center text-lg'>
                    <p className='text-gray-400'>Average Error</p>
                    {
                        average_error ? <p className='text-gray-100 text-7xl'>{average_error.toFixed(1)}</p> : <p className='text-gray-100 text-7xl'>0</p>
                    }

                </div>
                <div className='text-center text-lg'>
                    <p className='text-gray-400'>Average Accuracy</p>
                    {
                        average_accuracy ? <p className='text-gray-100 text-7xl'>{average_accuracy.toFixed(1)}</p> : <p className='text-gray-100 text-7xl'>0</p>
                    }

                </div>
            </div>

            <div className='text-gray-100 text-lg mt-10 mx-40'>

            </div>

        </AuthenticatedLayout>
    );
}
