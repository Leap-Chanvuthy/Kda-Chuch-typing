import LeaderboardItem from '@/Components/LeaderboardItem';

function Leaderboard({ leaderboardData }) {
    return (
        <div className="mt-6 bg-gray-700 shadow-sm rounded-lg divide-y divide-gray-200">
            {leaderboardData.map((item, index) => (
                <LeaderboardItem
                    key={item.id}
                    rank={index + 1}
                    username={item.username}
                    wpm={item.wpm}
                    accuracy={item.accuracy}
                />
            ))}
        </div>
    );
}

export default Leaderboard;
