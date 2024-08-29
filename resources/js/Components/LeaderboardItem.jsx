import { Link } from "@inertiajs/react";

// Components/LeaderboardItem.jsx
function LeaderboardItem({ rank, username, wpm, accuracy }) {
    return (
        <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
                <span className="text-xl text-slate-400 font-bold mr-4">{rank}</span>
                <Link href={route('profile.index', username)} className="text-slate-100 text-xl hover:text-slate-400">{username}</Link>
            </div>
            <div>
                <span className="text-xl text-slate-100 font-bold mr-4">{wpm} WPM</span>
                <span className="text-xl text-slate-100 font-bold">{accuracy} Accuracy</span>
            </div>
        </div>
    );
}

export default LeaderboardItem;
