import { useSuperHeroesData } from "../hooks/useSuperHeroesData"
export const Home = () => {

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(
        (data) => console.log(data),
        (error) => console.log(error.message)
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

    console.log({ isLoading, isFetching })

    return (
        <div className="App">
            <header className="App-header">
                {data?.data.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </header>
        </div>
    )
}
