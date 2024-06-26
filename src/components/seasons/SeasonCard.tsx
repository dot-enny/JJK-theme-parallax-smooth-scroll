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
          <motion.button 
            className="bg-gray-500 h-[60%] group" onClick={() => setSeasonId(seasonData.mal_id)}
            variants={SeasonCardVariant} initial="initial" animate="animate"
          >
            <img src={seasonData.images.webp.large_image_url} alt="season 1 thumbnail" className="w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out" />
            <h1 className="text-xl font-serif mt-10">Season {seasonNumber}</h1>
          </motion.button>
        ) : (
          <div className="bg-gray-500  bg-gradient-to-b from-slate-900 via-gray-700 to-slate-900 animate-pulse" />
        )
      }
    </>
  )
}