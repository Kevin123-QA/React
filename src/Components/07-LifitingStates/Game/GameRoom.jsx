const GameRoom = ({ players }) => {

    const Display = ({ playerName }) => <li>{playerName}</li>
    return (
        <ol className="previousSearch">
            {players.map((playerName, i) => (
                <Display
                    playerName={playerName}
                    // Prevent duplicate keys by appending index:
                    key={i}
                />
            ))}
        </ol>
    );
}

export default GameRoom;