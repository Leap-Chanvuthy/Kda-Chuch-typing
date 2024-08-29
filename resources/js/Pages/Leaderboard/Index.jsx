import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Leaderboard from '@/Components/Leaderboard';
import Card from '@/Components/Card';

export default function Index({ auth, leaderboardData, time }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Leaderboard" />

            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <h1 className="text-2xl text-primary-400 font-bold mb-10">Leaderboard</h1>
                <Card className='mb-10'>
                    <Link href='/leaderboard/15' className='text-slate-500 hover:text-gray-800 cursor-pointer'>
                        15 Seconds
                    </Link>
                    <Link href='/leaderboard/30' className='text-slate-500 hover:text-gray-800 cursor-pointer'>
                        30 Seconds
                    </Link>
                    <Link href='/leaderboard/60' className='text-slate-500 hover:text-gray-800 cursor-pointer'>
                        60 Seconds
                    </Link>
                </Card>
                <h1 className="text-2xl text-primary-400 font-bold mb-10">Time {time} Seconds</h1>
                <Leaderboard leaderboardData={leaderboardData} />
                <h5 className="text-md text-primary-400 my-10">You must have an accuracy of more than 90% to be on this list</h5>
            </div>
        </AuthenticatedLayout>
    );
}
