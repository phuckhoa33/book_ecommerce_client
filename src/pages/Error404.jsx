import '../styles/error404.scss';

export const Error404 = () => {
    return(
        <>
            <div className="error">
                <h1>4<span><i class="fas fa-ghost"></i></span>4</h1>
                <h2>Error: 404 page not found</h2>
                <p>Sorry, the page you're looking for cannot be accessed</p>
            </div>
        </>
    )
}