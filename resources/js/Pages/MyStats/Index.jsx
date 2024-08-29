import Card from '@/Components/Card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import dayjs from 'dayjs';
import React from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
const avatar = "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg";

export default function Index({
    auth,
    total_test,
    average_wpm,
    average_accuracy,
    average_error,
    max_time,
    max_typed,
    reviews,
    all_tests


}) {

    console.log(all_tests)

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="My Stats" />

            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <h1 className="text-2xl text-primary-400 font-bold mb-10">My Stats</h1>
                <Card className="grid grid-cols-4 text-center mb-10">
                    <div className='grid grid-cols-2 gap-0'>
                        <img src={avatar} className='w-20 h-20 rounded-full' alt="" />
                        <div>
                            <p className='text-primary-400 font-bold'>{auth.user.name}</p>
                            <p className='text-lg text-slate-400'>Joined {dayjs().diff(dayjs(auth.user.created_at), 'day')} days</p>
                        </div>
                    </div>

                    <div>
                        <p className='text-primary-400 font-bold'>Test Completed</p>
                        {
                            total_test ? <p className='text-lg text-slate-400'>{total_test}</p> : <p className='text-lg text-slate-400'>0</p>
                        }

                    </div>

                    <div>
                        <p className='text-primary-400 font-bold'>Time Typing</p>
                        {
                            max_time ? <p className='text-lg text-slate-400'>{max_time}</p> : <p className='text-lg text-slate-400'>0</p>
                        }
                    </div>

                    <div>
                        <p className='text-primary-400 font-bold'>Reviews Posted</p>
                        {
                            reviews ? <p className='text-lg text-slate-400'>{reviews}</p> : <p className='text-lg text-slate-400'>0</p>
                        }
                    </div>
                </Card>
                <div className='grid grid-cols-1 gap-4 text-center'>
                    <Card className="grid grid-cols-4 mb-10">
                        <div>
                            <p className='text-primary-400 font-bold'>Average WPM</p>
                            {
                                average_wpm ? <p className='text-lg text-slate-400'>{average_wpm.toFixed(1)}</p> : <p className='text-lg text-slate-400'>0</p>
                            }
                        </div>

                        <div>
                            <p className='text-primary-400 font-bold'>Average Error</p>
                            {
                                average_error ? <p className='text-lg text-slate-400'>{average_error.toFixed(1)}</p> : <p className='text-lg text-slate-400'>0</p>
                            }
                        </div>

                        <div>
                            <p className='text-primary-400 font-bold'>Average Accuracy</p>
                            {
                                average_accuracy ? <p className='text-lg text-slate-400'>{average_accuracy.toFixed(1)}</p> : <p className='text-lg text-slate-400'>0</p>
                            }
                        </div>

                        <div>
                            <p className='text-primary-400 font-bold'>Total typed</p>
                            {
                                max_typed ? <p className='text-lg text-slate-400'>{max_typed}</p> : <p className='text-lg text-slate-400'>0</p>
                            }
                        </div>
                    </Card>
                </div>

                <div>
                    <h1 className='text-primary-400 mb-10 text-2xl font-bold'>Previous Test Stats</h1>
                    <Card className='grid grid-cols-6 gap-2 text-center text-2xl text-primary-400 mb-10'>
                        <p>WPM</p>
                        <p>Accuracy</p>
                        <p>Error</p>
                        <p>Typed</p>
                        <p>Time</p>
                        <p>Date</p>
                    </Card>
                    {all_tests.map(test => (
                        <Card
                            key={test.id}
                            className='grid grid-cols-6 gap-2 text-center text-lg text-slate-400 mb-4'
                        >
                            <p>{test.wpm}</p>
                            <p>{test.accuracy}</p>
                            <p>{test.error}</p>
                            <p>{test.typed}</p>
                            <p>{test.time}</p>
                            <p>{dayjs().to(dayjs(test.created_at))}</p>
                        </Card>
                    ))}
                </div>

            </div>
        </AuthenticatedLayout>
    );
}
