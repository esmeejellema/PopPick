function Recommendation({ results }) {
    if (results.length === 0) {
        return <p>No matching movies found. Try adjusting your answers!</p>;
    }

    return (
        <div>
            <h2>Your Movie Matches</h2>
            <ul>
                {results.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}
export default Recommendation;