import { motion } from "framer-motion";
import { SeasonCardVariant } from "../../utils/animations/variants/Season";

interface SeasonCardProps {
  seasonData: any;
  setSeasonId: (seasonNumber: number) => void;
}

export const SeasonCard = ({ seasonData, setSeasonId }: SeasonCardProps) => {

  const seasonNumber = seasonData ? (seasonData.mal_id === 40748 ? 1 : 2) : '';

  return (
    <>
      {
        seasonData ? (
          <button className="flex flex-col overflow-hidden justify-center items-center w-fit cursor-pointer mx-auto max-md:px-4 max-md:h-screen"
            onClick={() => setSeasonId(seasonData.mal_id)}
          >
            <motion.div
              className="h-100 w-100 bg-gray-600 overflow-hidden"
              variants={SeasonCardVariant} initial="initial" animate="animate"
            >
              <img src={seasonData.images.webp.large_image_url} alt="season 1 thumbnail" className="aspect-square w-full hover:scale-105 transition-transform duration-500 ease-in-out cursor-grab" />
            </motion.div>
            <span className="font-semibold font-serif text-xl mt-6">Season {seasonNumber}</span>
          </button>
        ) : (
          <div className="bg-gray-500 bg-gradient-to-b from-slate-900 via-gray-700 to-slate-900 animate-pulse" />
        )
      }
    </>
  )
}