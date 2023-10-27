import {
  Home as HomeIcon,
  Search,
  Library,
  Plus,
  ArrowRight,
  List,
  ChevronRight,
  ChevronLeft,
  Play
} from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-2 m-1 mr-0 rounded-lg h-96">
          <nav className="space-y-5 bg-zinc-900 p-4 rounded-lg">
            <a
              href=""
              className="flex items-center gap-4 font-semibold text-zinc-200 text-base ml-2 "
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-4 text-base font-semibold text-zinc-200 ml-2"
            >
              <Search />
              Search
            </a>
          </nav>
          <nav className="flex bg-zinc-900 p-6 rounded-t-lg mt-2">
            <a
              href="#"
              className="flex items-center gap-3 text-base font-semibold text-zinc-200"
            >
              <Library />
              Your Library
            </a>
            <a
              href="#"
              className="flex items-center gap-0 text-xs font-semibold text-zinc-200 ms-11"
            >
              <Plus />
            </a>
            <a
              href="#"
              className="flex items-center gap-0 text-xs font-semibold text-zinc-200 ms-2"
            >
              <ArrowRight />
            </a>
          </nav>
          <nav className="flex flex-row bg-zinc-900 p-4 -mt-2">
            <a
              href="#"
              className="flex flex-col mt-0 ml-2 bg-zinc-700 rounded-full h-6 w-16 p-1 text-center mr-2 text-xs font-semibold"
            >
              <span>Playlist</span>
            </a>
            <a
              href="#"
              className="flex flex-col mt-0 ml-2 bg-zinc-700 rounded-full h-6 w-16 p-1 text-center mr-2 text-xs font-semibold"
            >
              <span>Albums</span>
            </a>
            <a
              href="#"
              className="flex flex-col mt-0 ml-2 bg-zinc-700 rounded-full h-6 w-16 p-1 text-center mr-2 text-xs font-semibold"
            >
              <span>Artists</span>
            </a>
          </nav>
          <nav className="flex flex-row bg-zinc-900 p-2 -mt-1">
            <a href="" className="flex flex-row w-4 h-4 ms-5">
              <Search />
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold text-zinc-200 ml-32"
            >
              <span>Recents</span>
              <List />
            </a>
          </nav>
          <nav className="flex flex-col bg-zinc-900 rounded-b-xl p-5 overflow-hidden -mt-1">
          <div className="grid grid-col gap-4 mt-2">
            <a
              href=""
              className="rounded flex items-center gap-4 overflow-hidden hover:bg-white/5 transition-colors "
            >
              <img
                src="./images/liked-songs.png"
                alt="Album"
                height={48}
                width={48}
                className='shadow-black/20 shadow-md rounded gird grid-col-1'
              />
              <div className="flex flex-col">
              <strong className="font-semibold text-md">Liked Songs</strong>
              <span className="text-sm text-zinc-400">Playlist - 701 songs</span>
              </div>
              </a>
            <a
              href=""
              className="rounded flex items-center gap-4 overflow-hidden hover:bg-white/5 transition-colors "
            >
              <img
                src="./images/billieEilish.jpg"
                alt="Album"
                height={48}
                width={48}
                className='shadow-black/20 shadow-md rounded gird grid-col-1'
              />
              <div className="flex flex-col">
              <strong className="font-semibold text-md">Happier Than Never</strong>
              <span className="text-sm text-zinc-400">Album - Billie Eilish</span>
              </div>
              </a>
            <a
              href=""
              className="rounded flex items-center gap-4 overflow-hidden hover:bg-white/5 transition-colors "
            >
              <img
                src="./images/TheGreatestShowman.jpg"
                alt="Album"
                height={48}
                width={48}
                className='shadow-black/20 shadow-md rounded gird grid-col-1'
              />
              <div className="flex flex-col">
                <strong className="font-semibold text-md">The Greatest Showman</strong>
                <span className="text-sm text-zinc-400">Album - Several artists</span>
              </div>
              </a>
            <a
              href=""
              className="rounded flex items-center gap-4 overflow-hidden hover:bg-white/5 transition-colors "
            >
              <img
                src="./images/devsCansados.jpg"
                alt="Album"
                height={48}
                width={48}
                className='shadow-black/20 shadow-md rounded gird grid-col-1'
              />
              <div className="flex flex-col">
                <strong className="font-semibold text-md">Devs Cansados</strong>
                <span className="text-sm text-zinc-400">Podcast - Devs Cansados</span>
              </div>
              </a>
            <a
              href=""
              className="rounded flex items-center gap-4 overflow-hidden hover:bg-white/5 transition-colors"
            >
              <img
                src="./images/study.jpg"
                alt="Album"
                height={48}
                width={48}
                className='shadow-black/20 shadow-md rounded gird grid-col-1'
              />
              <div className="flex flex-col">
                <strong className="font-semibold text-md">Study Playlist</strong>
                <span className="text-sm text-zinc-400">Playlist - Study</span>
              </div>
              </a>
          </div>
          </nav>
        </aside>

        <main className="flex-1 p-6 rounded-lg m-2 mb-0 ml-0 bg-gradient-to-b from-indigo-900 to-zinc-800">
          <div className="flex flex-row items-center gap-3 ">
            <button type="button" className="p-2 bg-black/40 rounded-full">
              <ChevronLeft />
            </button>
            <button type="button" className="p-2 bg-black/40 rounded-full">
              <ChevronRight />
            </button>
          </div>

          <h1 className="text-3xl font-bold mt-4">Good Morning</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href=""
              className="rounded group bg-white/10 flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors "
            >
              <img
                src="./images/liked-songs.png"
                alt="Album"
                height={104}
                width={104}
                className='shadow-black/20 shadow-md rounded'
              />
              <strong className="font-semibold">Liked Songs</strong>
              <button
                type="button"
                className="invisible pl-3 justify-center items-center h-12 w-12 bg-green-500 text-black rounded-full ml-auto mr-8 group-hover:visible"
              >
                <Play />
              </button>
            </a>
            <a
              href=""
              className=" group rounded bg-white/10 flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors "
            >
              <img
                src="./images/On-Repeat.jpg"
                alt="on-repeat"
                height={104}
                width={104}
                className='shadow-black/20 shadow-md rounded'
              />
              <strong className="font-semibold">On Repeat</strong>
              <button
                type="button"
                className="invisible pl-3 justify-center items-center h-12 w-12 bg-green-500 text-black rounded-full ml-auto mr-8 group-hover:visible"
              >
                <Play />
              </button>
            </a>
            <a
              href=""
              className=" group rounded bg-white/10 flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors "
            >
              <img
                src="./images/2022.jpg"
                alt="Album"
                height={104}
                width={104}
                className='shadow-black/20 shadow-md rounded'
              />
              <strong className="font-semibold">Your Top Songs 2022</strong>
              <button
                type="button"
                className="invisible pl-3 justify-center items-center h-12 w-12 bg-green-500 text-black rounded-full ml-auto mr-8 group-hover:visible"
              >
                <Play />
              </button>
            </a>
            <a
              href=""
              className=" group rounded bg-white/10 flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors "
            >
              <img
                src="./images/SE-64.png"
                alt="Album"
                height={104}
                width={104}
                className='shadow-black/20 shadow-md rounded'
              />
              <strong className="font-semibold">Your Episodes</strong>
              <button
                type="button"
                className="invisible pl-3 justify-center items-center h-12 w-12 bg-green-500 text-black rounded-full ml-auto mr-8 group-hover:visible"
              >
                <Play />
              </button>
            </a>
            <a
              href=""
              className=" group rounded bg-white/10 flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors "
            >
              <img
                src="./images/Marron5.jpg"
                alt="Album"
                height={104}
                width={104}
                className='shadow-black/20 shadow-md rounded'
              />
              <strong className="font-semibold">Marron 5</strong>
              <button
                type="button"
                className="invisible pl-3 justify-center items-center h-12 w-12 bg-green-500 text-black rounded-full ml-auto mr-8 group-hover:visible"
              >
                <Play />
              </button>
            </a>
            <a
              href=""
              className=" group rounded bg-white/10 flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors "
            >
              <img
                src="./images/Eminem.jpg"
                alt="Album"
                height={104}
                width={104}
                className='shadow-black/20 shadow-md rounded'
              />
              <strong className="font-semibold"> This is Eminem</strong>
              <button
                type="button"
                className="invisible pl-3 justify-center items-center h-12 w-12 bg-green-500 text-black rounded-full ml-auto mr-8 group-hover:visible"
              >
                <Play />
              </button>
            </a>
          </div>

          <div className='flex flex-row w-full justify-between'>
          <h2 className="font-bold text-2xl mt-5 mb-2">Recently Played</h2>
          <h3 className='text-sm mt-6 mb-2 mr-8 text-zinc-500 hover:text-zinc-400 hover:underline '>Show All</h3>
          </div>
          <div className="grid grid-cols-7 gap-0 mt-1 items-center rounded-lg">
            <div className="rounded bg-white/10 hover:bg-white/20 transition-colors w-32 h-44">
            <a
              href=""
              className="rounded items-center gap-0 transition-colors "
            >
              <img
                src="./images/On-Repeat.jpg"
                alt="Album"
                height={112}
                width={112}
                className='shadow-black/20 shadow-md rounded ml-2 mt-2'
              />
              <div className="flex flex-col mt-2 ml-2">
                <strong className="font-semibold">On Repeat</strong>
                <span className="text-xs text-zinc-400">yours favorite songs</span>
              </div>

            </a>
            </div>
            <div className="rounded bg-white/10 hover:bg-white/20 transition-colors w-32 h-44">
            <a
              href=""
              className="rounded items-center gap-0 transition-colors "
            >
              <img
                src="./images/estoicismo.jpg"
                alt="Album"
                height={112}
                width={112}
                className='shadow-black/20 shadow-md rounded ml-2 mt-2'
              />
              <div className="flex flex-col mt-2 ml-2">
                <strong className="font-semibold">Prática Estóica</strong>
                <span className="text-sm text-zinc-400">Ándré Cicarreli</span>
              </div>

            </a>
            </div>
            <div className="rounded bg-white/10 hover:bg-white/20 transition-colors w-32 h-44 ">
            <a
              href=""
              className="rounded items-center gap-0 transition-colors "
            >
              <img
                src="./images/AJR.jpg"
                alt="Album"
                height={112}
                width={112}
                className='shadow-black/20 shadow-md rounded ml-2 mt-2'
              />
              <div className="flex flex-col mt-2 ml-2">
                <strong className="font-semibold">AJR Picks</strong>
                <span className="text-sm text-zinc-400">Artists - AJR</span>
              </div>

            </a>
            </div>
            <div className="rounded bg-white/10 hover:bg-white/20 transition-colors w-32 h-44">
            <a
              href=""
              className="rounded items-center gap-4 transition-colors "
            >
              <img
                src="./images/hades.jpg"
                alt="Album"
                height={112}
                width={112}
                className='shadow-black/20 shadow-md rounded ml-2 mt-2'
              />
              <div className="flex flex-col mt-2 ml-2">
                <strong className="font-semibold">Hades</strong>
                <span className="text-sm text-zinc-400">Album Daren Korb</span>
              </div>

            </a>
            </div>
            <div className="rounded bg-white/10 hover:bg-white/20 transition-colors w-32 h-44">
            <a
              href=""
              className="rounded items-center gap-4 transition-colors "
            >
              <img
                src="./images/sia.jpg"
                alt="Album"
                height={112}
                width={112}
                className='shadow-black/20 shadow-md rounded ml-2 mt-2'
              />
              <div className="flex flex-col mt-2 ml-2">
                <strong className="font-semibold">This is Sia</strong>
                <span className="text-sm text-zinc-400">Album - Sia</span>
              </div>

            </a>
            </div>
            <div className="rounded bg-white/10 hover:bg-white/20 transition-colors w-32 h-44">
            <a
              href=""
              className="rounded items-center gap-4 transition-colors "
            >
              <img
                src="./images/anthem.jpg"
                alt="Album"
                height={112}
                width={112}
                className='shadow-black/20 shadow-md rounded ml-2 mt-2'
              />
              <div className="flex flex-col mt-2 ml-2">
                <strong className="font-semibold">Anthem Lights</strong>
                <span className="text-sm text-zinc-400">Album - Anthem</span>
              </div>

            </a>
            </div>
            <div className="rounded bg-white/10 hover:bg-white/20 transition-colors w-32 h-44">
            <a
              href=""
              className="rounded items-center gap-4 transition-colors "
            >
              <img
                src="./images/rihana.jpg"
                alt="Album"
                height={112}
                width={112}
                className='shadow-black/20 shadow-md rounded ml-2 mt-2'
              />
              <div className="flex flex-col mt-2 ml-2">
                <strong className=" font-semibold">Lift me up</strong>
                <span className="text-sm text-zinc-400">Artist - Rihanna</span>
              </div>
            </a>
            </div>
          </div>

        </main>
      </div>
      <footer className="bg-zinc-950  shadow p-7">
        Footer
      </footer>
    </div>
  )
}
