import { useState } from "react"
import { useSuperHeroesData } from "../hooks/useSuperHeroesData"

const SuperHeroes = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setpostsPerPage] = useState(3);

    const { isLoading, data, isError, error } = useSuperHeroesData(
        // (data) => console.log(data),
        // (error) => console.log(error.message)
    )

    if (isLoading) {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Loading..</h1>
                </header>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>{error.message}</h1>
                </header>
            </div>
        )
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const data_ = data?.data.slice(indexOfFirstPost, indexOfLastPost)

    console.log({ data_ })

    return (
        <div className="App-header">
            <p>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>prev page</button>
                <span> </span>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={data_.length < postsPerPage}>next page</button>
            </p>
            {data_.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    )
}

export default SuperHeroes