import React from 'react'
import GameCard from '../../card/GameCard'

function GameList() {
  const [games, setGames] = React.useState<any[]>([])
  const [category, setCategory] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  // get games
  const getApiData = async () => {
    setIsLoading(true)
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games${category && `?category=${category}`}`, {
        method: 'GET', 
        headers: new Headers({
          'X-RapidAPI-Key': '6ca948ceb7msh426f11ced47c1b7p13741cjsnf6f65942f5df',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        })
      }
    ).then((response) => response.json());
  
    // update the state
    setGames(response);
    setIsLoading(false)
  };

  React.useEffect(() => {
    getApiData();
  }, [category]);
  
  return (
    <>
      {/* header */}
      <div className='flex flex-row items-center justify-between'>
        <p className='text-[#373B59] text-[24px] font-medium leading-[151.023%]'>Game Terbaru</p>
        <select
          name="category"
          id="category"
          className='pl-[16px] pr-[76px] py-[12px] text-[16px] leading-[151.023%]'
          style={{borderRight: "16px solid transparent"}}
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="">Semua Game</option>
            <option value="mmorpg">MMORPG</option>
            <option value="shooter">Shooter</option>
          </select>
      </div>

      {/* list */}
      <div className='grid grid-cols-12 gap-[34px] mt-10'>
        {isLoading ? (
          <div className='h-[100vh]'>
            <p>Loading...</p>
          </div>

        ) : (
          <>
            {games.map((game, index) => (
              <GameCard game={game}/>
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default GameList