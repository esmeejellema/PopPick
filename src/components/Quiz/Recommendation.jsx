function Recommendation({ results }) {
    return (
        <div>
            {results.length === 0 ? (
                <p>No matching movies found. Try adjusting your answers!</p>
            ) : (
                <>
                    <h2>Your Movie Matches</h2>
                    <ul>
                        {results.map((movie) => (
                            <li key={movie.id}>{movie.title}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default Recommendation;